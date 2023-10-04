import './../style/nav.scss'
import { NavLink, Link } from "react-router-dom";


const Nav =()=>{

    return(
      <header>
            <nav> 
            <NavLink className={'logo'} to="/">ECOTRANSIT</NavLink>
                  <ul>
                    <li>
                    <NavLink className={'link'} to="/">ACCUEIL</NavLink>
                    </li>
                    <li>
                    <NavLink className={'link'} to="/contact">CONTACT</NavLink>
                    </li>
                    <li>
                    <NavLink className={'link'} to="/about">A PROPOS</NavLink>
                    </li>
                  </ul>

                  <a href='login' className='actionCall'> <span>connexion</span> </a>


 

            </nav>
      </header>
    )
}
export default Nav