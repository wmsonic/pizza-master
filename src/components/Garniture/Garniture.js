import "./Garniture.css"

const Garniture = ({id, nom, mesGarnitures , setGarnituresFn, preset}) =>{

    const garniture = mesGarnitures[id]; // Selection de l'objet de ma garniture a modifier
    const prix = garniture.prix.toFixed(2);
    const checkHandler = () =>{
        garniture['state'] = !garniture['state']; // Modification du state de la garniture choisie
        setGarnituresFn([...mesGarnitures]);
    };
    // console.log(prix);
    return(
        <>
            {(preset?
                <li>{nom}</li>
                :
                <div className="choix">
                    <label>
                        <input name={nom} type="checkbox" checked={garniture['state']} onChange={checkHandler}/>
                        {nom} <span className="extraCost">(+{prix}$)</span>
                    </label>
                </div>
            )}
        </>
    )
}

export default Garniture;