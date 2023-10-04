import './../../../style/head.scss'
import { NavLink, Link } from "react-router-dom";


const HeadConnexion = ()=> {
    return(
        <div className="container">
            <NavLink className={'connexionLink'} to="/contact/login">CONNEXION</NavLink>
            <NavLink className={'connexionLink'} to="/contact/signup">INSCRIPTION</NavLink>
        </div>
    )
} 
export default HeadConnexion