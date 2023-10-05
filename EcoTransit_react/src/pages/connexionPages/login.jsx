import './../../style/login.scss'
import { NavLink, Link } from "react-router-dom";
import Head from './elements/head'
import { useState } from "react";
import axios from 'axios';

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
        const url = "http://localhost/ecotransit/api/connexion.php";
  
        let fData = new FormData();
        fData.append('email', email);
        fData.append('password', password);
  
        axios.post(url, fData)
        .then(response=> alert(response.data))
        .catch(error=> alert(error));
      }
    }

    return (
    <div className='log'>
        <div className="formContainer">
        <Head/>
            <form action="login-form">
                <div>
                    <label htmlFor="email">E-MAIL</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">MOT DE PASSE</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                <input type="button" name="connexion" id="connexion" value="Connexion" onClick={handleSubmit}/>
                </div>
                <div>
                    <p> PAS DE COMPTE <NavLink to="/inscription">INSCRIVEZ-VOUS</NavLink></p>
                </div>  
            </form>
        </div>
    </div>
     )
}
export default Login