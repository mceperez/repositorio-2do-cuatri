let contenedor = document.getElementById("contenedor");

fetch("https://pokeapi.co/api/v2/pokemon?limit=8&offset=0")
.then(resp =>resp.json())
.then(data =>{
    data.results.forEach(pokemon => {
         contenedor.innerHTML += `<h3>nombre: ${pokemon.name}</h3>`;
    })
})
.catch(err => console.log(err));

