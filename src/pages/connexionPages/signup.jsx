import './../../style/signup.scss'
import './../../style/login.scss'
import { NavLink, Link } from "react-router-dom";
import Head from './elements/head'


const Signup = ()=>{
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
                    <label htmlFor="conf-password">CONFIRMER MOT DE PASSE</label>
                    <input type="password" name='conf-password' />
                    </div>
                    <div>
                    <label htmlFor="tel">NUMERO DE TEL</label>
                    <input type="text" name='tel' />
                    </div>
                      <div>
                      <input type="submit"  className='validate' value={'VALIDER'} />
                      </div>
                      <div>
                        <p> VOUS AVEZ UN COMPTE <NavLink to="/contact/login">CONNEXION</NavLink></p>
                     </div>  
              
    </form>
            </div>
        </div>  
        
    )
}
export default Signup 