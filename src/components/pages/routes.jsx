import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonsList } from "./pokemons-list";
import { Pokemon } from "./pokemon";

const AppRoutes = () => (

    <BrowserRouter >
        <Routes >
            <Route exact path="/" element={<PokemonsList />} />
            <Route exact path="/pokemon/:url" element={<Pokemon />} />
        </Routes>
    </BrowserRouter>

);

export { AppRoutes }