import React, { useEffect, useState } from "react";
import axios from "axios";

const UserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Effectuez une requête vers votre API pour récupérer les informations de l'utilisateur
    axios.get("http://localhost/ecotransit/api/connexion.php")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!userData) {
    return <p>Npn connecté</p>;
  }

  return (
    <div>
      <h2>Informations de l'utilisateur</h2>
      <p>Nom d'utilisateur : {userData.username}</p>
      <p>Email : {userData.email}</p>
      {/* Affichez d'autres informations de l'utilisateur ici */}
    </div>
  );
};

export default UserData;