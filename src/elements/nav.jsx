import './../style/nav.scss'
import { NavLink, Link } from "react-router-dom";


const Nav =()=>{

    return(
      <header>
            <nav> 
            <NavLink to="/">ECOTRANSIT</NavLink>
                  <ul>
                    <li>
                    <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact">contact</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about">à propos</NavLink>
                    </li>
                  </ul>

                  <button className='actionCall'> connexion </button>


 

            </nav>
      </header>
    )
}
export default Nav