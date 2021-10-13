import { render, fireEvent } from "@testing-library/react";
import {StaticRouter} from 'react-router';
import Routes from './Routes';


import Garnitures from "../Donnees/Garnitures.json";
import Pizzas from "../Donnees/Pizzas.json";
import Presets from "../Pages/Presets/Presets";

test("page de login lorsque l'url est '/login' et usager n'est pas login", ()=>{
    const result = render(
        <StaticRouter location="/login">
            <Routes isAuthenticated={false}/>
        </StaticRouter>
    );
    // console.log(result.container.innerHTML);
    expect(result.container.innerHTML).toContain("loginForm");
});


// test("lorsqu'on affiche détails d'une pizza dans '/pizza/pizzaId' on voit ses infos", ()=>{
//     const Pizza = [{
//         nom : "Pâte sauce",
//         garnitures : [
//             {nom : "sauce"}]
//         }
//     ]
//     const result = render(
//         <StaticRouter location="/pizza/0">
//             <Presets 
//             ListeGarnitures={Garnitures}
//             PresetsPizza={Pizza}
//             />
//         </StaticRouter>
//     )
//     console.log(window.location.pathname);
//     console.log(result.container.innerHTML);
//     // expect(result.container.innerHTML).toContain("<div class='section-head'><h2>Pâte sauce");
// })