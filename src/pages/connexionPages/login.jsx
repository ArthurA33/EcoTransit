import './../../style/login.scss'
import { NavLink, Link } from "react-router-dom";
import Head from './elements/head'
import { useState } from 'react';

const Login = ()=>{


  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit  = () => {
      if(email.length === 0){
        alert("Email has left blank!");
      }
      else if(password.length === 0){
        alert("Password can't be blank!");
      }
      else{
         alert('itsok')
      }
    }
     return (
        <div className='log'>
        <div className="formContainer">
        <Head/>
            <form action="">
                <div>
                <label htmlFor="email">E-MAIL</label>
                <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                <label htmlFor="password">MOT DE PASSE</label>
                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                  <div>
                  <input type="submit"  className='validate' value="SE CONNECTER" onClick={handleSubmit} />
                  </div>
                  <div>
                    <p> PAS DE COMPTE <NavLink to="/connexion/signup">INSCRIVEZ-VOUS</NavLink></p>
                 </div>  
          
</form>
        </div>
    </div>
     )
}
export default Login