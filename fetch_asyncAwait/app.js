// Fetch API

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json()) //Respuesta a json
    .then(data => { //promesa
        data.results.forEach(element => {
            console.log(element.name);
        });
        console.log(data.results)
     })
     .catch(error => console.log(error));

// // Async await

let getPokemon = async() => {
    try {
        let res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        let data = await res.json();
        console.log(data.results);
    } catch (error) {
        console.log(error);
    }
}

getPokemon();
