import PizzaPreview from "../PizzaPreview/PizzaPreview";
import Garniture from "../../Garniture/Garniture";
import { Link } from 'react-router-dom';

const PizzaInfo = ({ PresetsPizza, mesGarnitures, AddToCart }) => {
    const pathname = window.location.pathname;
    const pizzaId = parseInt(pathname.replace('/pizza/', ''));
    return (
        <>
            {PresetsPizza.map((pizza, id) => (
                (id !== pizzaId ? null :
                    <>
                        <div className="section-head">
                            <Link to="/pizza">
                                <button className="myButton">X</button>
                            </Link>
                            <h2>{pizza.nom}</h2>
                        </div>

                        <div className="preview">
                            <PizzaPreview
                                mesGarnitures={pizza.garnitures}
                                info={true}
                            />
                        </div>

                        <div className="price">Prix : {pizza.prix.toFixed(2)}$</div>

                        <div className="ulTitle">Garnitures :</div>
                        <ul className="garnituresPreset">
                            {pizza.garnitures.map((garniture, id) => (
                                <Garniture
                                    key={pizza.nom + "ingredient" + id}
                                    id={id}
                                    nom={garniture.nom}
                                    mesGarnitures={mesGarnitures}
                                    setGarnituresFn={null}
                                    preset={true}
                                />
                            ))}
                        </ul>
                        <button onClick={()=>{AddToCart(pizza)}}>Ajouter au panier</button>
                        {/* <Link to={`/pizza/${id}`} className="addToCart"><div>Ajouter au panier</div></Link> */}
                    </>
                )
            ))}

        </>
    )
}

export default PizzaInfo;