import { render, fireEvent } from "@testing-library/react";
import {StaticRouter} from 'react-router';
import Login from './Login';

describe('sur page de login',()=>{
    let result;
    const setAuthenticated = jest.fn(); 
    beforeEach(()=>{
        result = render(
            <StaticRouter>
                <Login 
                defaultUsername={""}
                setAuthenticatedFn={setAuthenticated}
                />
            </StaticRouter>
        )
    })

    test("si click sur bouton 'se connecter' sans entrer de nom, fait une erreur", ()=>{
        const loginBtn = result.container.querySelector("button");
        fireEvent.click(loginBtn)
    
        // console.log(result.container.innerHTML);
        expect(result.container.querySelector("loginError")).toBeTruthy;
    })
    
    test("lorsqu'on entre un nom et on appui sur 'se connecter' l'utilisateur se fait connecté", ()=>{
        
        const loginBtn = result.container.querySelector("button");
        const usernameField = result.container.querySelector("input");
        fireEvent.input(usernameField, {target:{value:'Bob'}});
        fireEvent.click(loginBtn);
        // console.log(setAuthenticated.mock);
        expect(setAuthenticated).toBeCalledWith(true);
    })
})
