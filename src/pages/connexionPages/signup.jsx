import React, { useState } from "react";
import Head from "./elements/head";
import { NavLink, Link } from "react-router-dom";


const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Signup = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    pseudo: "",
    password: "",
    verif_password: "",
    phone_number: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState([]);
  const [passwordErrorConfirm, setPasswordErrorConfirm] = useState("");
  const [numberError, setNumberError] = useState("");

  const handleInput = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError([]);
    setPasswordErrorConfirm("");
    setNumberError("");

    // Vérification de l'e-mail avec une regex
    if (!emailRegex.test(formValue.email)) {
      setEmailError("L'adresse e-mail n'est pas valide.");
    }

    // Vérification du mot de passe
    const errors = [];

    if (!/[A-Z]/.test(formValue.password)) {
      errors.push("une lettre majuscule");
    }

    if (!/[a-z]/.test(formValue.password)) {
      errors.push("une lettre minuscule");
    }

    if (!/[0-9]/.test(formValue.password)) {
      errors.push("un chiffre");
    }

    if (!/[^a-zA-Z0-9]/.test(formValue.password)) {
      errors.push("un caractère spécial");
    }

    if (errors.length > 0) {
      setPasswordError(`le mot de passe doit contenir: ${errors}`);
    }

    // Vérification du mot de passe de confirmation
    if (formValue.password !== formValue.verif_password) {
      setPasswordErrorConfirm("Les mots de passe ne correspondent pas.");
    }

    // Vérification du numéro de téléphone (ajoutez vos propres règles ici)
    if (formValue.phone_number.length !== 10) {
      setNumberError("Le numéro de téléphone doit avoir 10 chiffres.");
    }

    // Si aucune erreur n'a été définie, le formulaire est valide
    if (
      !emailError &&
      !passwordError.length &&
      !passwordErrorConfirm &&
      !numberError
    ) {
      // Envoyez le formulaire ou effectuez l'action souhaitée ici
      console.log("Formulaire valide, prêt à être soumis.");
    }
  };

  return (
    <div className="log">
      <div className="formContainer">
        <Head />
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
              type="text"
              name="password"
              value={formValue.password}
              onInput={handleInput}
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <div>
            <label htmlFor="cof_password">
              CONFIRMER LE MOT DE PASSE <span className="required">*</span>
            </label>
            <input
              type="password"
              name="verif_password"
              value={formValue.verif_password}
              onChange={handleInput}
            />
            {passwordErrorConfirm && <p className="error">{passwordErrorConfirm}</p>}
          </div>
          <div>
            <label htmlFor="phone">NUMERO DE TEL</label>
            <input
              type="text"
              name="phone_number"
              value={formValue.phone_number}
              onInput={handleInput}
              maxLength="10"
            />
                        {numberError && <p className="error">{numberError}</p>}
          </div>
          <div>
            <input
              name="submit"
              type="submit"
              className="validate"
              value={"S'INSCRIRE"}
            ></input>
          </div>
          <div>
            <p>
              {" "}
              VOUS AVEZ UN COMPTE{" "}
              <NavLink to="/connexion/login">CONNEXION</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;


