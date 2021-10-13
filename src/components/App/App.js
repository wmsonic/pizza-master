import React from "react";
import {BrowserRouter, useHistory} from 'react-router-dom';
import Routes from '../Routes/Routes';
import { useState } from "react";
import './App.css';
import Header from '../Header/Header';
// import Panier from '../Pages/Panier/Panier';

//imports de donnees
import Garnitures from "../Donnees/Garnitures.json";
import Pizzas from "../Donnees/Pizzas.json";

const App = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    // rendu a faire que ma liste s'update quand je la change dans pizza maker
    // vérifier que pizzaList retourne un tableau
    const [pizzaList, setPizzaList] = useState(Pizzas)
    const history = useHistory();
    const prixBase = 9.80;

    const sauvegardePizza = (nouvellePizza) => {
		const newPizzaList = [...pizzaList, nouvellePizza];
		setPizzaList(newPizzaList);
        return newPizzaList;
	};

    const [cart, setCart] = useState([]);

    const addToCart = (nouvelleItem) => {
		const newCart = [...cart, nouvelleItem];
		setCart(newCart);
        return newCart;
	};

    return(
        <BrowserRouter>
            <div className="App">
                
                <Header
                isAuthenticated={isAuthenticated}
                />
                
                {/* <Panier
                cart={cart}
                /> */}

                <main>
                    {/* <PizzaMaker ListeGarnitures={Garnitures} PresetsPizza={pizzaList} setPizzaListFN={setPizzaList}/>
                    <Presets ListeGarnitures={Garnitures} PresetsPizza={pizzaList}/> */}
                    <Routes 
                    Garnitures={Garnitures}
                    PizzasList={pizzaList}
                    // SetPizzaList={setPizzaList}
                    isAuthenticated={isAuthenticated}
                    setAuthenticatedFn={setAuthenticated}
                    SauvegarderPizza={sauvegardePizza}
                    AddToCart={addToCart}
                    prixBase={prixBase}
                    />
                </main>
            </div>
        
        </BrowserRouter>
    )
}

export default App;