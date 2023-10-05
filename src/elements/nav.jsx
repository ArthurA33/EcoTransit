import './../style/nav.scss'
import { NavLink, Link } from "react-router-dom";


const Nav =()=>{

  function handleClick(){
      const menu = document.getElementById('menu-responsive');
      menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
  }

    return(
      <header>
            <nav> 
            <NavLink className={'logo'} to="/">ECOTRANSIT</NavLink>
                  <ul className='parent-link-nav'>
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
                  <NavLink className={'actionCall'} to="/connexion/login"> connexion </NavLink>

            
              <div onClick={handleClick} className='new-nav'>
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