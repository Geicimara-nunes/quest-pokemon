import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../../context/theme-context";

async function getInfoPokemons(url) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`);
        return await response.json()

    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
};

const PokemonCard = () => {
    const { theme } = useContext(ThemeContext)
    const [pokemon, setPokemon] = useState({
        name: "",
        sprites: [],
    });

    const [moves, setMoves] = useState([]);
    const [types, setTypes] = useState([]);
    const { url } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            const pokemon = await getInfoPokemons(url)
            const moves = pokemon.moves.slice(0, 10)
            const types = pokemon.types

            setPokemon(pokemon)
            setMoves([...moves])
            setTypes([...types])
        }

        fetchData();
    }, []);

    const [abilities, setAbilities] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const pokemonAbilities = await getInfoPokemons(url)
            const pokemonAbilitiesDetails = pokemonAbilities.abilities.map(async ability => {
                const response = await fetch(ability.ability.url)
                return await response.json()
            })
            const pokemonAbilitiesPromises = await Promise.all(pokemonAbilitiesDetails)
            setAbilities(pokemonAbilitiesPromises)
        }
        fetchData();
    }, []);

    return (
        <Section >

            <Link to='/' style={{ color: theme.color }} >Voltar para a lista de Pokémons</Link>

            <h2 style={{ color: theme.color }}>{pokemon.name.toUpperCase()}</h2>

            <PokemonInfo >
                <img src={pokemon.sprites?.front_default} alt="{pokemon.name}" />

                <InfoDetails>
                    <Moves>
                        <h3>Movimentos</h3>
                        {moves.length ? (
                            moves.map((moves, index) => {
                                return (
                                    <ul>
                                        <li key={index}>
                                            <p>{moves.move.name}</p>
                                        </li>
                                    </ul>
                                )
                            })
                        ) : (
                            "Nenhum movimento encontrado"
                        )
                        }
                    </Moves>
                    <Types>
                        <h3>Tipo</h3>
                        {types.length ? (
                            types.map((types, index) => {
                                return (
                                    <div key={index}>
                                        <p> {types.type.name}</p>
                                    </div>
                                )
                            })
                        ) : (
                            "Nenhum tipo encontrado"
                        )
                        }
                    </Types>
                    <Abilities>
                        <h3>Habilidades</h3>
                        {abilities.length ?(
                        abilities.map((ability, index) => {
                            const abilityText = ability.flavor_text_entries.filter((text) => text.language.name === 'en')
                            return (
                                <ul>
                                    <li key={index}>
                                        <h4>{ability.name}</h4>
                                        <p>{abilityText[0].flavor_text}</p>
                                    </li>
                                </ul>
                            )
                        })
                        ) : (
                            "Nenhuma habilidade encontrada"
                        )
                        }
                    </Abilities>
                </InfoDetails>
            </PokemonInfo>
        </Section>
    );
};

const Section = styled.section`
  margin: 0 auto;
  padding: 20px 35px;
  font-size: 17px;
  max-width: 700px;
  color: #000;

    h2 {
     padding-bottom: 13px;
     padding-top: 10px;
    }
`
const PokemonInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 18px;
  padding: 10px;
  line-height:22px;
  border: 2px solid #87cefa;
  border-radius: 10px;
  background-color: #ffffe0;

    img {
     display: flex;
     justify-content: center;
     width: 22%;
     background-color: #87cefa;
     border-radius: 50%;
   }

    p, h4 {
     text-transform: capitalize;
     
   }

     @media(max-width: 600px){
     padding: 18px;

     img {
     width: 30%;
     }
`
const InfoDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 300px;

    @media(max-width: 600px){
    display: block;
    }
`
const Moves = styled.div`
  margin: 20px;

    h3 {
     padding-bottom: 5px;
     }  
`
const Types = styled.div`
  margin: 20px;
  text-align: center;

    h3 {
     padding-bottom: 5px;
     }
`
const Abilities = styled.div`
  margin: 20px;
  text-align: center;
   
    h3, h4, p, {
     padding-bottom: 5px;
     }
`
export { PokemonCard }