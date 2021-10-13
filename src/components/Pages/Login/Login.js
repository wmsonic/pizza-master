import { useState } from "react";
import {useHistory} from "react-router-dom";
import StyledError from "../../VisualComponents/StyledError/StyledError";
import "./Login.css";

const Login = ({setAuthenticatedFn:setAuthenticated, defaultUsername}) =>{

    const [nomUser, setNomUser] = useState(defaultUsername);

    const [requireNameError, setRequireError] = useState(false);

    const history = useHistory();

    const nomUserHandler = (e) => {
      setNomUser((ancienNom) => e.target.value);
    };

    const handleLogin = () => {
        // console.log(history.push)
        if(nomUser.trim()!==""){
          setAuthenticated(true);
          history.push("/pizza");
        }else{
          setRequireError(true);
          document.getElementById("usernameInput").focus();
        }
        // console.log(requireNameError);
    }

    return(
        <div className="loginForm">
            <input
              id="usernameInput"
              name="Nom Pizza"
              type="text"
              placeholder="Nom d'usager"
              value={nomUser}
              onChange={nomUserHandler}
            />
            {/* <button className="myButton" disabled={nomUser !== "" ? false : true} onClick={handleLogin}>
              Se connecter
            </button> */}
            <button className="myButton" onClick={handleLogin}>
              Se connecter
            </button>
            {requireNameError?<StyledError id="loginError" className="formError">*Un nom d'usager est requis</StyledError>:null}
        </div>
    );
}

export default Login;