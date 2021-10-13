import MainNavBtn from "../VisualComponents/MainNavBtn/MainNavBtn";
import "./Header.css"

const Header = ({isAuthenticated, cart}) =>{
    let mainNav;
    if(isAuthenticated){
        mainNav = <>
        <MainNavBtn to="/pizza"><div>Liste Pizza</div></MainNavBtn>
        <MainNavBtn to="/pizza/creer"><div>Creer Pizza</div></MainNavBtn>
        <MainNavBtn to={location=>`${location.pathname}?panier=true`}><div>Panier</div></MainNavBtn>
        </>
    }
    return(
        <header id="AppHeader">
            <h1>Mi-session Pizza!</h1>
            <div id="mainNav">
                {mainNav}
            </div>
        </header>
    );
}

export default Header;