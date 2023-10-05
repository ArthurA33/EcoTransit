import './../../style/signup.scss'
import './../../style/login.scss'
import { NavLink, Link } from "react-router-dom";
import Head from './elements/head'
import React, { useState } from "react";
import axios from "axios";

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Signup = ()=>{
    const [formValue, setFormValue] = useState({
        email: "",
        pseudo: "",
        password: "",
        verif_password: "",
        phone_number: "",
    });

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleInput = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setEmailError("");
        setPasswordError("");

        // Vérification des champs avec des regex
        if (!emailRegex.test(formValue.email)) {
            // L'adresse e-mail n'est pas valide
            setEmailError("L'adresse e-mail n'est pas valide.");
            return;
        }

        if (formValue.password !== formValue.verif_password) {
            // Les mots de passe ne sont pas identiques
            setPasswordError("Les mots de passe ne correspondent pas.");
            return;
        }

        // Les champs sont valides, envoi de la requête POST
        const formData = {
            email: formValue.email,
            pseudo: formValue.pseudo,
            password: formValue.password,
            verif_password: formValue.verif_password,
            phone_number: formValue.phone_number,
        };

        const res = await axios.post(
            "http://localhost/ecotransit/api/inscription.php",
            formData
        );

        // Effacement des champs du formulaire
        setFormValue({
            email: "",
            pseudo: "",
            password: "",
            verif_password: "",
            phone_number: "",
    });
    };
        return (
            <div className='log'>
                <div className="formContainer">
                <Head/>
                    <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="mail">
                        E-MAIL <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={formValue.email}
                            onChange={handleInput}
                        />
                        {emailError && <p className="error">{emailError}</p>}

                    </div>
                    <div>
                        <label htmlFor="pseudo">
                        PSEUDO <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="pseudo"
                            value={formValue.pseudo}
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        
                        <label htmlFor="password">
                            MOT DE PASSE <span className="required">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formValue.password}
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="conf_password">
                            CONFIRMER LE MOT DE PASSE <span className="required">*</span>
                        </label>
                        <input
                            type="password"
                            name="verif_password"
                            value={formValue.verif_password}
                            onChange={handleInput}
                        />
                        {passwordError && <p className="error">{passwordError}</p>}

                    </div>
                    <div>
                        <label htmlFor="phone">NUMERO DE TEL </label>
                        <input
                            type="text"
                            name="phone_number"
                            value={formValue.phone_number}
                            onChange={handleInput}
                            maxLength="10"
                        />
                    </div>
                    <div>
                    <button name="submit" className='validate'>Inscription</button>
                    </div>
                    <div>
                    <p> VOUS AVEZ UN COMPTE <NavLink to="/connection">CONNEXION</NavLink></p>
                    </div>  

                    </form>
                </div>
            </div>  
        
    )
}
export default Signup 