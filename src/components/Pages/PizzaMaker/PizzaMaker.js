import { useState } from "react";
import Garniture from "../../Garniture/Garniture";
import PizzaPreview from "../PizzaPreview/PizzaPreview";
import { Link, useHistory } from "react-router-dom";
import StyledError from "../../VisualComponents/StyledError/StyledError";
import "./PizzaMaker.css";

const PizzaMaker = ({ ListeGarnitures: Garnitures, PresetsPizza, SauvegarderPizza, prixBase}) => {
	const [nomPizza, setNomPizza] = useState("");
	const history = useHistory();

	const nomPizzaHandler = (e) => {
		setNomPizza((ancienNom) => e.target.value);
		console.log(hasUniqueName);
	};

	const [mesGarnitures, setGarnitures] = useState(Garnitures);

	const nbGarnitures = mesGarnitures.reduce(
		(nbGarniture, garniture) =>
			garniture.state ? nbGarniture + 1 : nbGarniture + 0,
		0
	);

	const nameIsUnique = (pizza) => {
		if (nomPizza.trim() === pizza.nom.trim()) {
			return false;
		} else {
			return true;
		}
	}

	const hasName = nomPizza.trim() !== "";
	const hasGarniture = nbGarnitures > 0;
	const hasUniqueName = PresetsPizza.every(nameIsUnique);

	let totalPrice = mesGarnitures.reduce(
		(oldPrice, garniture)=> 
		garniture.state ? oldPrice + garniture.prix : oldPrice + 0 ,
		prixBase
	);

	const makePizza = () => {
		let garnituresChoisis = [];
		mesGarnitures.forEach((garniture) => {
			if (garniture.state) {
				garnituresChoisis.push({ nom: garniture.nom });
			}
		});
		let nouvellePizza = {
			nom: nomPizza,
			garnitures: garnituresChoisis,
			prix: totalPrice
		};
		return nouvellePizza;
	}

	const SavePizza = () =>{
		if (hasGarniture && hasName && hasUniqueName) {//si nom est set, au moins 1 garniture choisie et nom est unique, on peut sauvegarder et rediriger
			const savedPizza = SauvegarderPizza(makePizza());
			resetForm();
			history.push(`/pizza/${savedPizza.length - 1}`);
		}else{
            return null;
        }
	}

	const resetForm = () => {
		mesGarnitures.map((garniture) => {
			garniture.state = false;
		});
		setGarnitures([...mesGarnitures]);
		setNomPizza("");
	};

	return (
		<div className="pizzaMaker">
			<h2>Createur de pizza</h2>
			{/* Preview visuel live de la pizza de l'utilisateur */}
			<div className="preview">
				<PizzaPreview mesGarnitures={mesGarnitures} />
			</div>
			{/* Formulaire pour créer la pizza */}
			<div className="formulaire">
				<h3>Choix de garnitures :</h3>
				<div className="ChoixGarnitures">
					{mesGarnitures.map((garniture, id) => (
						<Garniture
							key={garniture.nom + id}
							id={id}
							nom={garniture.nom}
							mesGarnitures={mesGarnitures}
							setGarnituresFn={setGarnitures}
						/>
					))}
				</div>
				<label className="formNomPizza">
					Nommer vôtre pizza :&nbsp;
					<input
						name="Nom Pizza"
						type="text"
						value={nomPizza}
						onChange={nomPizzaHandler}
					/>
				</label>

				<div className="price">Prix totale : {totalPrice.toFixed(2)}$</div>

				<div className="formBtns">
					<button className="myButton"
						onClick={SavePizza}
					>
						Enregistrer
					</button>
					<Link to="/pizza"><button className="myButton" onClick={resetForm}>Annuler</button></Link>
					{!hasName ? <StyledError className="formError">*Un nom doit être entré</StyledError> : null}
					{!hasUniqueName ? <StyledError className="formError">*Un nom unique doit être entré</StyledError> : null}
					{!hasGarniture ? <StyledError className="formError">*Au moins une garniture doit être selectionné</StyledError> : null}
				</div>
			</div>
		</div>
	);
};

export default PizzaMaker;
