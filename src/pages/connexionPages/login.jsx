import './../../style/login.scss'
import { NavLink, Link } from "react-router-dom";
import Head from './elements/head'
import { useState } from 'react';

const Login = ()=>{


  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState("");

    const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
    const handleSubmit  = () => {
      if(email.length === 0){
        setEmailError("L'adresse email est manquante");
         return;
      }
      if (!emailRegex.test(formValue.email)) {
        setEmailError("L'adresse e-mail n'est pas valide.");
        return;
      }
      else if(password.length === 0){
        alert("Password can't be blank!");
      }
      else{
         alert('its ok')
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