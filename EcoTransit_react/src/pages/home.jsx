import React, { useState, useEffect } from "react";
import { NavLink, unstable_useBlocker } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import './../style/home.scss'
import HomeCard from './../elements/card.jsx'
import UserData from '../elements/userData';
import PHPIntegration from "../elements/PHPIntegration";

const Home = () => {
    const [userData, setUserData] = useState(null); // État pour stocker les données de l'utilisateur
    const navigate = useNavigate();
    // Vérifiez si le cookie user_id existe
    const userId = Cookies.get("sessionId");

    useEffect(() => {
        document.title = "EcoTransit | Home";
    
        if (userId) {
          // Utilisez l'ID de l'utilisateur pour charger ses données
          const url = `http://localhost/ecotransit/api/connexion.php?user_id=${userId}`;
    
          axios
            .get(url)
            .then((response) => {
              const userData = response.data;
              setUserData(userData);
              console.log(userData);
            })
            .catch((error) => console.error(error));
        }
      }, [userId]);


    return(
        <main>
        <section className='landing'>
            <div className='text-landing'>
                <h1 className='title'>Suivez votre empreinte carbonne à travers vos trajets</h1>
                <p className='text-bottom-title'>Grâce à notre system calculer votre empreinte carbonne sur vos trajet !</p>
                <div className='parent-see-more'>
                    <a className='see-more' href="/about">
                        Voir plus
                    </a>
                </div>
            </div>
            <div>
                <img className='image-right-home' src="src/assets/img-right-home.png" alt="image" />
                <div className="circle"></div>
            </div>
        </section>


        <section>
        {userData ? (
            // Si userData est défini (l'utilisateur est connecté), affichez les données de l'utilisateur
            <div className="user-info">
            <p>Bienvenue, votre user_id est : {userData[0].Id_utilisateur}</p>
            {/* Affichez d'autres informations utilisateur ici */}
            <div>
                <div>Pseudo : {userData[0].pseudo_personne}</div>
                <div>Email : {userData[0].email_utilisateur}</div>
                <div>Score : {userData[0].score_utilisateur}</div>
            </div>


            {/* Afficher les données des trajets */}
            {userData.map((user) => (
                <div key={user.Id_trajet}>
                    <p>Id Trajet : {getUserDataProperty(user, "Id_trajet")}</p>
                    <p>Distance : {getUserDataProperty(user, "nbr_km_trajet")}</p>
                    <p>CO2 : {getUserDataProperty(user, "CO2_utiliser_trajet")}</p>
                    <p>Date trajet : {getUserDataProperty(user, "date_trajet")}</p>
                    {/* ... Add other user fields here */}
                </div>
            ))}




            {/* Afficher la carte */}
            {/* <PHPIntegration /> */}
            <NavLink to={`http://localhost/ecotransit/index.php?sessionId=${userId}`}>
                <button>Accéder à index.php</button>
            </NavLink>
            {/* <iframe src="http://localhost/ecotransit/index.php" id="carte"></iframe> */}
            
            
            
            
            </div>
        ) : (
            // Sinon, affichez un texte générique ou masquez cette section
            <>
                <div className='svg-transition'>
                <svg width="1920" height="268" viewBox="0 0 1920 268" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 160.8L53.3333 169.761C106.667 178.388 213.333 196.812 320 196.561C426.667 196.812 533.333 178.387 640 156.361C746.667 134 853.333 107.2 960 93.8C1066.67 80.4 1173.33 80.4 1280 98.2388C1386.67 116.413 1493.33 151.588 1600 160.8C1706.67 170.013 1813.33 151.588 1866.67 142.961L1920 134V0H1866.67C1813.33 0 1706.67 0 1600 0C1493.33 0 1386.67 0 1280 0C1173.33 0 1066.67 0 960 0C853.333 0 746.667 0 640 0C533.333 0 426.667 0 320 0C213.333 0 106.667 0 53.3333 0H0V160.8Z" fill="#D3FFD3"/></svg>
                </div>
                <div className='parent-cards'>
                    {/* Exemple card */}
                    <div className="card">
                        <div className='image-part-card'>
                            <img src="src/assets/cars.png" alt="image"/>
                            <h2>Voiture</h2>
                        </div>
                        <div className='second-part-card'>
                            <div>
                                <svg width="451" height="81" viewBox="0 0 451 81" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 33.7456L12.5278 37.6958C25.0556 41.4983 50.1111 49.6202 75.1667 49.5094C100.222 49.6202 125.278 41.4983 150.333 31.789C175.389 21.9321 200.444 10.1185 225.5 4.21167C250.556 -1.69512 275.611 -1.69512 300.667 6.1683C325.722 14.1794 350.778 29.6847 375.833 33.7456C400.889 37.8066 425.944 29.6847 438.472 25.8822L451 21.9321V81H438.472C425.944 81 400.889 81 375.833 81C350.778 81 325.722 81 300.667 81C275.611 81 250.556 81 225.5 81C200.444 81 175.389 81 150.333 81C125.278 81 100.222 81 75.1667 81C50.1111 81 25.0556 81 12.5278 81H0V33.7456Z" fill="#FFD3D3"/></svg>
                            </div>
                            <div className='part-text'>
                            <p>Voiture  thermique <br /> 1 km en voiture =  217,60 g CO2</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='image-part-card'>
                            <img src="src/assets/cars.png" alt="image"/>
                            <h2>Voiture</h2>
                        </div>
                        <div className='second-part-card'>
                            <div>
                                <svg width="451" height="81" viewBox="0 0 451 81" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 33.7456L12.5278 37.6958C25.0556 41.4983 50.1111 49.6202 75.1667 49.5094C100.222 49.6202 125.278 41.4983 150.333 31.789C175.389 21.9321 200.444 10.1185 225.5 4.21167C250.556 -1.69512 275.611 -1.69512 300.667 6.1683C325.722 14.1794 350.778 29.6847 375.833 33.7456C400.889 37.8066 425.944 29.6847 438.472 25.8822L451 21.9321V81H438.472C425.944 81 400.889 81 375.833 81C350.778 81 325.722 81 300.667 81C275.611 81 250.556 81 225.5 81C200.444 81 175.389 81 150.333 81C125.278 81 100.222 81 75.1667 81C50.1111 81 25.0556 81 12.5278 81H0V33.7456Z" fill="#FFD3D3"/></svg>
                            </div>
                            <div className='part-text'>
                            <p>Voiture  thermique <br /> 1 km en voiture =  217,60 g CO2</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='image-part-card'>
                            <img src="src/assets/cars.png" alt="image"/>
                            <h2>Voiture</h2>
                        </div>
                        <div className='second-part-card'>
                            <div>
                                <svg width="451" height="81" viewBox="0 0 451 81" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 33.7456L12.5278 37.6958C25.0556 41.4983 50.1111 49.6202 75.1667 49.5094C100.222 49.6202 125.278 41.4983 150.333 31.789C175.389 21.9321 200.444 10.1185 225.5 4.21167C250.556 -1.69512 275.611 -1.69512 300.667 6.1683C325.722 14.1794 350.778 29.6847 375.833 33.7456C400.889 37.8066 425.944 29.6847 438.472 25.8822L451 21.9321V81H438.472C425.944 81 400.889 81 375.833 81C350.778 81 325.722 81 300.667 81C275.611 81 250.556 81 225.5 81C200.444 81 175.389 81 150.333 81C125.278 81 100.222 81 75.1667 81C50.1111 81 25.0556 81 12.5278 81H0V33.7456Z" fill="#FFD3D3"/></svg>
                            </div>
                            <div className='part-text'>
                            <p>Voiture  thermique <br /> 1 km en voiture =  217,60 g CO2</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='image-part-card'>
                            <img src="src/assets/cars.png" alt="image"/>
                            <h2>Voiture</h2>
                        </div>
                        <div className='second-part-card'>
                            <div>
                                <svg width="451" height="81" viewBox="0 0 451 81" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 33.7456L12.5278 37.6958C25.0556 41.4983 50.1111 49.6202 75.1667 49.5094C100.222 49.6202 125.278 41.4983 150.333 31.789C175.389 21.9321 200.444 10.1185 225.5 4.21167C250.556 -1.69512 275.611 -1.69512 300.667 6.1683C325.722 14.1794 350.778 29.6847 375.833 33.7456C400.889 37.8066 425.944 29.6847 438.472 25.8822L451 21.9321V81H438.472C425.944 81 400.889 81 375.833 81C350.778 81 325.722 81 300.667 81C275.611 81 250.556 81 225.5 81C200.444 81 175.389 81 150.333 81C125.278 81 100.222 81 75.1667 81C50.1111 81 25.0556 81 12.5278 81H0V33.7456Z" fill="#FFD3D3"/></svg>
                            </div>
                            <div className='part-text'>
                            <p>Voiture  thermique <br /> 1 km en voiture =  217,60 g CO2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}
            
        </section>
        </main>
    )
}

// Evite les erreurs si userDate est vide 
function getUserDataProperty(user, property) {
    try {
        return user[property] ?? "N/A";
    } catch (error) {
        console.error(`Error accessing property ${property}:`, error);
        return "N/A";
    }
}

export default Home