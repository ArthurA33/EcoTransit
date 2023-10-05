import './../../../style/head.scss'
import { NavLink, Link } from "react-router-dom";


const HeadConnexion = ()=> {
    return(
        <div className="container">
            <NavLink className={'connexionLink'} to="/connexion/login">CONNEXION</NavLink>
            <NavLink className={'connexionLink'} to="/connexion/signup">INSCRIPTION</NavLink>
        </div>
    )
} 
export default HeadConnexion