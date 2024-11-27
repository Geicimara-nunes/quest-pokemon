import { useContext } from "react"
import { ThemeContext} from "../../../context/theme-context"
import styled from "styled-components"


const ThemeButton = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Button {...props} style={{ color: theme.color, background: theme.background}} />
    )
};

const Button = styled.button`
  width: 150px;
  font-size: 17px;
  font-weight: bold;
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
  border: 1px solid #e5e5e5;

    @media (max-width: 678px){
    width: 120px;
    }

    @media (max-width: 388px){
    width: 110px;
    }
`
export { ThemeButton }