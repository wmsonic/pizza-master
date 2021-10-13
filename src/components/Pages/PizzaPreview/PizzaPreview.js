import "./PizzaPreview.css";
const PizzaPreview = ({ mesGarnitures, ...props }) => {
    const isPreset = props.preset;
    const isInfo = props.info;
    return (
        <>
            {props.nom != "" ?
                <div className="nomPizza">{props.nom}</div>
                :
                null
            }
            <img className="pate" src="/img/pate.png" alt="" />
            {mesGarnitures.map((garniture) => (
                (!isPreset ?
                    <img
                        key={garniture.nom + "preview"}
                        className={garniture.nom}
                        src={"/img/" + garniture.nom + ".png"}
                        alt=""
                        style={{ display: + garniture.state || isInfo ? 'inherit' : 'none' }}
                    />
                    :
                    <img
                        key={garniture.nom + "preview"}
                        className={garniture.nom}
                        src={"/img/" + garniture.nom + ".png"}
                        alt=""
                    />
                )
            ))}

        </>
    )
}
export default PizzaPreview;