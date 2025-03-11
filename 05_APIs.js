// Manejo de APIs

// - APIs REST (HTTP + URLs + JSON)

// -- HTTP (HyperText Transfer Protocol). 
// --- Métodos
//      GET - Obtiene información, pide datos
//      POST - Envia información
//      PUT - Actualiza información
//      DELETE - Elimina información
//      PATCH - Actualiza parcialmente

// --- Códigos de respuesta HTTP:
//      200 - OK
//      201 - Created
//      400 - Bad Request
//      404 - Not Found
//      500 - Internal Server Error

// Consumir una API
// GET
// - Fetch

// fetch("https://jsonplaceholder.typicode.com/posts")
//    .then(response => response.json()) // Transformar la respuesta a JSON
//    .then(data => console.log(data)) // Mostrar los datos
//    .catch(error => console.log(error)); // Manejar errores

// - Uso de fetch con async/await

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log("Error:", error)
    }
}

// getPosts();

// Solicitud POST

async function createPost() {
    try {
        const newPost = {
            userId: 1,
            title: "Nuevo post",
            body: "Contenido del nuevo post"
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost),
        })

        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log("Error:", error)
    }
}

// createPost();

// Manejo de errores


// fetch("https://jsonplaceholder.typicode.com/pedro")
//     .then(response => {
//         if (!response.ok) {
//             throw Error(`Error en la solicitud: ${response.status}`);
//         }
//         return response.json();
// })
//     .catch(error => {
//         console.log("Error:",error)
//     });

// Métodos HTTP Adicionales
// - PATCH
// - OPTIONS

async function partialPostUpdate() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: "Nuevo titulo" }),
        })

        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log("Error:", error)
    }
}

// partialPostUpdate();

// Authentificación - API Key



async function getWeather(city) {
    const apiKey = "123456789";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

// getWeather("Buenos Aires");


// Otros métodos de Authentificación y Autorización
// - Bearer Token
// - JWT

// Versionado de APIs
// - https://api.example.com/v1/resources
// - https://api.example.com/v2/resources

// Otras APIs

async function pokeApi(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(`Habilidades de ${pokemon}: ${data.abilities.map(ability => ability.ability.name).join(", ")}`);
    } catch (error) {
        console.log("Error:", error);
    }
}

pokeApi("pikachu");