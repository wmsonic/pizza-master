import { render } from '@testing-library/react';
import {StaticRouter} from 'react-router';
import Routes from '../../Routes/Routes';

import Garnitures from "../../Donnees/Garnitures.json";
import Pizzas from "../../Donnees/Pizzas.json"


test("Autant de presets de pizza s'affichent au départ que la quantité dans notre base de donnees", ()=>{
    
    //Act
    // const result = render(<Presets/>);
    const result = render(
        <StaticRouter location="/pizza">
            <Routes 
            Garnitures={Garnitures}
            PizzasList={Pizzas}
            isAuthenticated={true}
            />
        </StaticRouter>
    );
    const displayedPizzas = result.container.getElementsByClassName('preset');
    const pizzaPresetsAmount = Pizzas.length;
    
    //Assert
    expect(displayedPizzas).toHaveLength(pizzaPresetsAmount);
})

// test("Bouton pour enregistrer n'est pas cliquable si pas de nom inscrit, mais cases cocher",()=>{

//     //Act
//     const result = render(<Presets/>);
//     const bouton = result.getByDisplayValue('Enregistrer');
    
//     //Assert
//     expect(bouton).toHaveAttribute("disabled");
// })