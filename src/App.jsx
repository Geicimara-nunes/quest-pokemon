import { AppRoutes } from './components/pages/routes'
import { ThemeProvider } from './context/theme-context'
import { PokemonHeader } from './components/header/header'
import { GlobalStyle } from './style/global-style'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider >
        <PokemonHeader />
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
