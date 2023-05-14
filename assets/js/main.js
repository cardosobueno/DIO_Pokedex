console.log("oi");

let offset = 0;
const limit = 5;
const maxRecords = 151


const loadMoreButton = document.getElementById("loadMore");
const pokemonList = document.getElementById('pokemonList')


function loadPokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

        const newHTML = pokemons.map((pokemon) => {
            return `
            <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class='type ${type}'>${type}</li>`).join("")}
                    </ol>
                    <img
                        src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
            `
        }).join('')

        pokemonList.innerHTML += newHTML




    })

}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {

    offset += limit

    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }


})
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

/*
    const listItems = []


    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItems.push(convertPokemonToLi(pokemon));
        

    }
    console.log(listItems)
    */