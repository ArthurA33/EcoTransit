import './../style/nav.scss'
import { NavLink, Link } from "react-router-dom";


const Nav =()=>{

    return(
      <header>
            <nav> 
              <div>
                <NavLink className={'logo'} to="/">ECOTRANSIT</NavLink>
              </div>

              <div className='link-nav'>
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
              </div>

              <div className='button-login'>
                <a href='login' className='actionCall'> <span>connexion</span> </a>
              </div>
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