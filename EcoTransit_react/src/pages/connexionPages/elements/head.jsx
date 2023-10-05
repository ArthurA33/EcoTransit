import './../../../style/head.scss'
import { NavLink, Link } from "react-router-dom";


const HeadConnexion = ()=> {
    return(
        <div className="container">
            <NavLink className={'connexionLink'} to="/connection">CONNEXION</NavLink>
            <NavLink className={'connexionLink'} to="/inscription">INSCRIPTION</NavLink>
        </div>
    )
} 
export default HeadConnexion