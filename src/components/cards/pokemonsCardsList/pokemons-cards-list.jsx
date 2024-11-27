import { getPokemons, getPokemon } from "../../../services/request-api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PokemonsCardsList = () => {

    const [poke, setPoke] = useState([]);
    const [offset, setOffset] = useState(0);
    const pokemonsToLoad = 10

    const morePokemonsCards = async () => {
        setOffset(offset + pokemonsToLoad);
    }

    useEffect(() => {

        const fetchData = async () => {
            const pokemons = await getPokemons(offset);
            const pokemonsUrls = pokemons.map(pokemon => pokemon.url);
            const pokemonsPromisses = pokemonsUrls.map(async (pokemonUrl) => await getPokemon(pokemonUrl));
            const completePokemons = await Promise.all(pokemonsPromisses);

            setPoke([...poke, ...completePokemons])
        };
        fetchData();
    }, [offset]);

    return (
        <>
            <Container >
                {poke.map((pk, index) => {

                    return (
                        <StyledLink to={`/pokemon/${pk.name}`} key={index}>
                            <PokemonImage src={pk.sprites?.front_default} alt={pk.name} />
                            <PokemonName>{pk.name.toUpperCase()}</PokemonName>
                        </StyledLink>
                    )
                })}
            </Container>

            <ButtonMoreCards onClick={() => morePokemonsCards()}> Mais Pokémons </ButtonMoreCards>
        </>
    )
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 25px;
`
const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #87cefa;
  border-radius: 10px;
  margin: 20px 30px;
  width: 150px;
  height: 210px;
  transition: 0.3s;
  background-color: #ffffe0;
  color: #242424;
  text-align: center;

       &:hover {
     transform: translateX(0.3px) scale(1.1);
    }

       @media (max-width: 1200px){
       margin: 15px 10px;
       }

       @media (max-width: 740px){
       margin: 15px 5px;
       }
`
const PokemonImage = styled.img`
  background-color: #87cefa;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  max-width: 90%;
`
const PokemonName = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 15px;
  color: #000;
  font-weight: bold;
  font-size: 17px;
`
const ButtonMoreCards = styled.button`
  width: 200px;
  font-size: 17px;
  font-weight: bold;
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
  color: #000;
  border: 2px solid #87cefa;
  background-color: #ffffe0;
  transition: 0.3s;

      &:hover{
      transform: translateX(0.3px) scale(1.1);
      }
`
export { PokemonsCardsList }