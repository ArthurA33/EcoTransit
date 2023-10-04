import './../../style/login.scss'
import { NavLink, Link } from "react-router-dom";
import Head from './elements/head'

const Login = ()=>{
     return (
        <div className='log'>
        <div className="formContainer">
        <Head/>
            <form action="">
                <div>
                <label htmlFor="email">E-MAIL</label>
                <input type="text" name='email' />
                </div>
                <div>
                <label htmlFor="password">MOT DE PASSE</label>
                <input type="password" name='password' />
                </div>
                  <div>
                  <input type="submit"  className='validate' value={'VALIDER'} />
                  </div>
                  <div>
                    <p> PAS DE COMPTE <NavLink to="/contact/signup">INSCRIVEZ-VOUS</NavLink></p>
                 </div>  
          
</form>
        </div>
    </div>
     )
}
export default Login