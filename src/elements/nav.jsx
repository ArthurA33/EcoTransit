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
                    <NavLink to="/contact/login">CONTACT</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about">A PROPOS</NavLink>
                    </li>
                  </ul>

            
              <div className='new-nav'>
                <div className='menu'>
                  <span className='line-1'></span>
                  <span className='line-2'></span>
                  <span className='line-3'></span>
                </div>
              </div>
            </nav>
      </header>
    )
}
export default Nav