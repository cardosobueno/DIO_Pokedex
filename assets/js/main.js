console.log("oi");

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
 

function convertPokemonTypesToLi(pokemonTypes)
{
    return pokemonTypes.map((typeSlot) => {
        return `<li class="type">${typeSlot.type.name}</li>`
    })
}



function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join('')} 
            </ol>
            <img
                src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons = []) => {

    const newList = pokemons.map((pokemon) => {
        return convertPokemonToLi(pokemon)
    })

    const newHTML = newList.join('');
    pokemonList.innerHTML += newHTML



    /*
     const listItems = []


     for (let i = 0; i < pokemons.length; i++) {
         const pokemon = pokemons[i];
         listItems.push(convertPokemonToLi(pokemon));
         

     }
     console.log(listItems)
     */
})


    .catch((error) => console.log(error));

/** 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonBody){
        jsonBody.results
    })
    .then(function (pokemonList) {
        console.log(pokemonList);
    })
    .catch(function (error) {
        console.error(error);
    })
    .finally(function () {
        console.log("Requisição feita.")
    })
*/