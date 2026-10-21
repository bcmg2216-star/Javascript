// paso 1
const urlListado = "https://pokeapi.co/api/v2/pokemon?limit=5";
const promesaListado = fetch(urlListado)
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }else {
            console.log("Respuesta recibida: ", respuesta);
            return respuesta.json();
        }
    })
    .then(datos =>{
        console.log("Objeto pokemon: ", datos);
        console.log("Tipo de dato: ", typeof datos);
        console.log("Propiedad resulst: ", datos.results);

        //paso 2
        const lista = datos.results
            .map(pokemon => `<li>Nombre: ${pokemon.name}, URL: ${pokemon.url}</li>`)
            .join("");

        document.body.innerHTML = `
            <h1>Lista de pokemons</h1>
            <article>
              <ul>${lista}</ul>
            </article>
        `;
    });
console.log(promesaListado);

// paso 3
const urlPika = "https://pokeapi.co/api/v2/pokemon/pikachu";
const promesaPika = fetch(urlPika)
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }else {
            console.log("Respuesta recibida Pikachu: ", respuesta);
            return respuesta.json();
        }
    })
    .then(datos => {
        document.body.innerHTML += `
            <article>
                <h2>Nombre: ${datos.name}</h2>
                <h2>Numero: ${datos.id}</h2>
                <img src="${datos.sprites.front_default}" alt="${datos.name}">
                <h2>Tipo: ${datos.types[0].type.name}</h2>
            </article>`;
    });
console.log(promesaPika);

// paso 4
const promesaListado2 = fetch(urlListado)
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }else {
            console.log("Respuesta recibida: ", respuesta);
            return respuesta.json();
        }
    })
    .then(datos =>{
        const urlPrimerPoke = datos.results[0].url;
        return fetch(urlPrimerPoke);
    })
    .then(respuesta => {
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        } else {
            console.log("Respuesta recibida: ", respuesta);
            return respuesta.json();
        }
    })
    .then(datos => {
        document.body.innerHTML += `
            <article>
                <h2>Nombre: ${datos.name}</h2>
                <h2>Numero: ${datos.id}</h2>
                <img src="${datos.sprites.front_default}" alt="${datos.name}">
                <h2>Tipo: ${datos.types[0].type.name}</h2>
            </article>`;
    });
console.log(promesaListado2);

// paso 5
function obtenerDatos(url){
    return fetch(url).then(respuesta => {
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        } else {
            console.log("Respuesta recibida: ", respuesta);
            return respuesta.json();
        }
    });
}

function mostrarPokemon(pokemon){
    document.body.innerHTML += `
            <article>
                <h2>NombreP: ${pokemon.name}</h2>
                <h2>Numero: ${pokemon.id}</h2>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <h2>Tipo: ${pokemon.types[0].type.name}</h2>
            </article>`;
}


obtenerDatos(urlPika)
    .then(datos => {
        mostrarPokemon(datos);
    });

// paso 6
const urlError = "https://pokeapi.co/api/v2/pokemon/noexiste";
document.body.innerHTML += `<p>Cargando...</p>`;
obtenerDatos(urlError)
    .then(datos => {
        mostrarPokemon(datos);
    })
    .catch(error => {
        console.error("Error: ", error.message);
        document.body.innerHTML += `<p>No se puedo cargar el pokemon: ${error.message}</p>`;
    })
    .finally(() => {
        console.log("Peticion terminada");
    });

// paso 7
function esperar(ms) {
    return new Promise(resolve =>
        setTimeout(resolve, ms));
}

document.body.innerHTML += `<p>Cargando despues de 5 segundos...</p>`;

esperar(5000)
    .then(()=>{
        return obtenerDatos(urlPika);
    })
    .then(datos =>{
        mostrarPokemon(datos)
    })
    .catch(error => {
        console.log("Error tras los 5 segundos: ", error.message);
        document.body.innerHTML += `<p>No se puedo cargar el pokemon despues de los 5 segundos: ${error.message}</p>`;
    });

// paso 8
async function obtenerPokeAsyns(){
    document.body.innerHTML += `<p>Cargando...</p>`;

    try{
        const datosListado = await obtenerDatos(urlListado);
        const urlPrimerPoke = datosListado.results[0].url;
        const datosPoke = await obtenerDatos(urlPrimerPoke);
        mostrarPokemon(datosPoke);
    }catch (error) {
        console.log("Error de la funcion async: ", error.message);
        document.body.innerHTML += `<p>No se puedo cargar el pokemon de la funcion async: ${error.message}</p>`;
    }finally {
        console.log("Peticion terminada");
    }
}

obtenerPokeAsyns();
