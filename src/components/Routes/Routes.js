import { useState } from "react";
import Login from "../Pages/Login/Login"
import PizzaMaker from "../Pages/PizzaMaker/PizzaMaker";
import Presets from "../Pages/Presets/Presets";
import { Redirect, Route, Switch } from 'react-router';

const Routes = ({ Garnitures, PizzasList , isAuthenticated, setAuthenticatedFn:setAuthenticated, SauvegarderPizza, AddToCart, prixBase}) => {
    

    if (isAuthenticated) {
        return (
            <Switch>
                <Route exact path="/pizza/creer">
                    <PizzaMaker
                        ListeGarnitures={Garnitures}
                        PresetsPizza={PizzasList}
                        SauvegarderPizza={SauvegarderPizza}
                        prixBase={prixBase}
                    />
                </Route>
                <Route path="/pizza">
                    <Presets
                        ListeGarnitures={Garnitures}
                        PresetsPizza={PizzasList}
                        AddToCart={AddToCart}
                    />
                </Route>
                <Redirect to="/pizza" />
            </Switch>

        )
    }
    return (
        <Switch>
            <Route exact path="/login">
                <Login 
                setAuthenticatedFn={setAuthenticated} 
                defaultUsername={""}/>
            </Route>
            <Redirect to="/login" />
        </Switch>

    )
};

export default Routes;