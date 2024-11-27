import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
body{
 margin: 0 auto;
}

#root {
 padding-bottom: 25px;
 text-align: center;
 font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

a {
 text-decoration: none;
}

ul {
 list-style: none;
}

`
export { GlobalStyle }