import { ThemeTogglerButton } from "../buttons/themeTogglerButton/theme-toggler-button"
import styled from "styled-components"
import Pikachu from "../../assets/images/pikachu.png"
import PokemonLogo from "../../assets/images/pokemon-logo.png"
import { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"

const PokemonHeader = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <Header style={{ background: theme.primary }} >
      <PikachuImage src={Pikachu} alt="pikachu image" />
      <PokemonLogoImage src={PokemonLogo} alt="pokemon logo" />
      <ThemeTogglerButton />
    </Header>
  )
};

const Header = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  height: 100px;
  padding:25px;
`
const PokemonLogoImage = styled.img`
  width: 10%;

   @media (max-width: 1060px){
    width: 14%;
    }

    @media (max-width: 878px){
    width: 20%;
    }

    @media (max-width: 678px){
    width: 25%;
    }

    @media (max-width: 458px){
    width: 30%;
    }
`
const PikachuImage = styled.img`
  width:5%;

   @media (max-width: 1060px){
    width: 8%;
    }

    @media (max-width: 878px){
    width: 10%;
    }

    @media (max-width: 678px){
    width: 15%;
    }

    @media (max-width: 458px){
    width: 20%;
    }
`
export { PokemonHeader }