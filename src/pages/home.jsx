import React, { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [kilometers, setKilometers] = useState(0); // kilomettre total (partiel remplacer par bdd)
  const [scoreTotal, setScoreTotal] = useState(0); // Score total (partiel remplacer par bdd)

  useEffect(() => {
    if (!isDataFetched) {
      fetch("https://api.monimpacttransport.fr/beta/getEmissionsPerDistance")
        .then(response => response.json())
        .then(data => {
          setData(data);
          setIsDataFetched(true);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
  }, [isDataFetched]);

  const handleVehicleChange = (event) => {
    setSelectedVehicle(event.target.value);
  }

  const handleKilometersChange = (event) => {
    setKilometers(parseFloat(event.target.value));
  } // choix nbr kilomettre (a elever vu que recuperer dans API google)

  const initialiseScore = () => {
    const newScoreTotal = scoreTotal + parseFloat(emissions); 
    setScoreTotal(newScoreTotal);
  } // ajoue du CO2 dans le score, a modifier pour etre compatible avec BDD

  const filteredData = data.filter(item => item.name === selectedVehicle);
  const emissions = (kilometers * filteredData[0]?.emissions.gco2e || 0).toFixed(2);

  return (
    <>
      <h1>homePage</h1>
      <div>
        <label htmlFor="vehicleSelect">Sélectionnez un véhicule :</label>
        <select
          id="vehicleSelect"
          value={selectedVehicle}
          onChange={handleVehicleChange}
        >
          <option value="">Sélectionnez un véhicule</option>
          {data.map(item => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <div> 
          <label htmlFor="kilometers">Nombre de kilomètres :</label>
          <input
            type="number"
            id="kilometers"
            value={kilometers}
            onChange={handleKilometersChange}
          />
        </div>
        {selectedVehicle && (
          <div>
            CO2 : {emissions}g
          </div>
        )}
        <button onClick={initialiseScore}>Ajouter</button>
        <div>
          Score Total : {scoreTotal}
        </div>
      </div>
    </>
  );
}

export default Home;