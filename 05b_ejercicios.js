// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function getPosts() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getPosts();

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function createPost() {
    try {
        const newPost = {
            title: "Nuevo post",
            body: "Contenido del nuevo post"
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

createPost();

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

async function updatePost() {
    try {
        const updatedPost = {
            id: 1,
            title: "Post actualizado",
            body: "Contenido actualizado"
        };

        const response = await fetch(`${url}/${updatedPost.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPost)
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

updatePost();

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function partialPostUpdate() {
    try {
        const response = await fetch(`${url}/1`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: "Nuevo titulo" })
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

partialPostUpdate();

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function deletePost() {
    try {
        const response = await fetch(`${url}/1`, {
            method: "DELETE"
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

deletePost();

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

async function getWeather() {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getWeather();

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

async function getPokemon(pokemon) {
    try {
        const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const responsePokemon = await fetch(urlPokemon);
        const dataPokemon = await responsePokemon.json();

        const urlSpecies = dataPokemon.species.url;
        const responseSpecies = await fetch(urlSpecies);
        const dataSpecies = await responseSpecies.json();

        const urlEvolution = dataSpecies.evolution_chain.url;
        const responseEvolution = await fetch(urlEvolution);
        const dataEvolution = await responseEvolution.json();

        console.log(`Pokémon: ${dataPokemon.name}`);
        console.log(`Especie: ${dataSpecies.name}`);
        console.log("Cadena evolutiva:");
        console.log(dataEvolution);

    } catch (error) {
        console.log("Error:", error);
    }
}

getPokemon('bulbasaur');