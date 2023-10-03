import './../style/nav.scss'
import { NavLink, Link } from "react-router-dom";


const Nav =()=>{

    return(
      <header>
            <nav> 
            <NavLink className={'logo'} to="/">ECOTRANSIT</NavLink>
                  <ul>
                    <li>
                    <NavLink to="/">ACCUEIL</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact">CONTACT</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about">A PROPOS</NavLink>
                    </li>
                  </ul>

                  <button className='actionCall'> connexion </button>


 

            </nav>
      </header>
    )
}
export default Nav