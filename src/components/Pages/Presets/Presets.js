import { useState } from "react";
import PizzaPreview from "../PizzaPreview/PizzaPreview";
import { Link, useLocation } from 'react-router-dom';
import { Route, useRouteMatch } from "react-router";
import PizzaInfo from "../PizzaInfo/PizzaInfo";

import './Presets.css';

const Presets = ({ ListeGarnitures: Garnitures, PresetsPizza: Pizzas , AddToCart}) => {

	const { path } = useRouteMatch();

	const pathname = window.location.pathname;
    const pizzaId = parseInt(pathname.replace('/pizza/', ''));
	// console.log(pizzaId);
	// const [mesGarnitures, setGarnitures] = useState(Garnitures);

	const isPanierUp = new URLSearchParams(useLocation().search).get("panier");

	return (
		<div className="pizzas-container">
			{/* Présentation des pizzas sauvegardés */}
			<div className="presets">
				<div className="section-head">
					<h2>Pizzas</h2>
					<Link to="/pizza/creer"><button className="myButton">Creer nouvelle pizza</button></Link>
				</div>
				{Pizzas.map((pizza, id) => (
					<div key={"preview" + id} className="preset">
						<Link to={`/pizza/${id}`}>
							<PizzaPreview
								mesGarnitures={pizza.garnitures}
								nom={pizza.nom}
								preset={true}
							/>
						</Link>

						<div className="price">{pizza.prix.toFixed(2)}$</div> 

						{/* Replace text with add to cart icon & replace link to right link for action */}
						<button className="myButton" onClick={()=>{AddToCart(pizza)}}>Ajouter au panier</button>
						{/* <Link to={`/pizza/${id}`} className="addToCart"><div>Ajouter au panier</div></Link> */}
					</div>
				))}
			</div>
			<div className={"pizzaInfo" + (isNaN(pizzaId) ? " hiddenInfo" : "")}>
				<Route path={`${path}/:pizza`}>
					<PizzaInfo 
						PresetsPizza={Pizzas}
                        mesGarnitures={Garnitures}
						AddToCart={AddToCart}
					/>
				</Route>
			</div>
			{
				<div className={"panier"}>
					{(isPanierUp ? "cool le panier hein ?!" : null)}
					
				</div>
			}
		</div>
	);
};

export default Presets;
