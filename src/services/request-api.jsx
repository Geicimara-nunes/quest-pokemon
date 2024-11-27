import axios from "axios";

async function getPokemons(offset) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`);
        const pokemonsData = response.data.results
        return pokemonsData

    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
};

async function getPokemon(url) {
    try {
        const response = await axios.get(url);
        const pokemon = response.data
        return pokemon

    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
};

export { getPokemons, getPokemon }