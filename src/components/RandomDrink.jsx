import React, { useEffect, useState } from "react";
import { fetchRandomDrink } from "../services/api";
import "./RandomDrink.css";

const RandomDrink = () => {
  const [drink, setDrink] = useState(null);

  const fetchNewRandomDrink = async () => {
    try {
      const randomDrinkData = await fetchRandomDrink();
      setDrink(randomDrinkData);
    } catch (error) {
      console.error("Error fetching randomdrink:", error.message);
    }
  };

  useEffect(() => {
    fetchNewRandomDrink();
  }, []);

  console.log(drink);

  return (
    <div className="randomDrinkDiv">
      {drink && (
        <div className="infoDiv">
          <div className="divOne">
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <div className="bttnDiv">
            <button onClick={fetchNewRandomDrink}>Decision Maker</button>
            </div>
          </div>

          <div className="divTwo">
            <h3>Ingredients</h3>
            <ul>
              {Object.keys(drink)
                .filter(
                  (key) =>
                    key.startsWith("strIngredient") && drink[key] !== null
                )
                .map((key) => (
                  <li key={key}>{drink[key]}</li>
                ))}
            </ul>
            
            <h3>Instructions</h3>
            <p>{drink.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomDrink;
