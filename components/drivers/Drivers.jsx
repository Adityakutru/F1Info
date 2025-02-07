import React, { useState } from "react";
import "./drivers.css";
import driver_1 from "../../assets/max.jpg";
import driver_2 from "../../assets/Lando.jpg";
import driver_3 from "../../assets/charles.jpg";
import driver_4 from "../../assets/oscar.png";
import driver_5 from "../../assets/carlos.jpg";
import driver_6 from "../../assets/gorge.jpg";
import driver_7 from "../../assets/Lewis.jpg";
import driver_8 from "../../assets/sergio.jpg";
import driver_9 from "../../assets/fernando.jpg";
import driver_10 from "../../assets/pierre.png";

const Drivers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleDrivers = 3; // Number of drivers to show at a time

  const handleNext = () => {
    if (currentIndex < 10 - visibleDrivers) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="drivers">
      <button
        className="arrow left"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        ❮
      </button>
      <div className="driver-slider">
        <div
          className="driver-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleDrivers)}%)`,
          }}
        >
          <div className="driver-card">
            <img src={driver_1} alt="Max Verstappen" />
            <div className="driver-text">Max Verstappen</div>
          </div>
          <div className="driver-card">
            <img src={driver_2} alt="Lando Norris" />
            <div className="driver-text">Lando Norris</div>
          </div>
          <div className="driver-card">
            <img src={driver_3} alt="Charles Leclerc" />
            <div className="driver-text">Charles Leclerc</div>
          </div>
          <div className="driver-card">
            <img src={driver_4} alt="Oscar Piastri" />
            <div className="driver-text">Oscar Piastri</div>
          </div>
          <div className="driver-card">
            <img src={driver_5} alt="Carlos Sainz" />
            <div className="driver-text">Carlos Sainz</div>
          </div>
          <div className="driver-card">
            <img src={driver_6} alt="George Russell" />
            <div className="driver-text">George Russell</div>
          </div>
          <div className="driver-card">
            <img src={driver_7} alt="Lewis Hamilton" />
            <div className="driver-text">Lewis Hamilton</div>
          </div>
          <div className="driver-card">
            <img src={driver_8} alt="Sergio Perez" />
            <div className="driver-text">Sergio Perez</div>
          </div>
          <div className="driver-card">
            <img src={driver_9} alt="Fernando Alonso" />
            <div className="driver-text">Fernando Alonso</div>
          </div>
          <div className="driver-card">
            <img src={driver_10} alt="Pierre Gasly" />
            <div className="driver-text">Pierre Gasly</div>
          </div>
        </div>
      </div>
      <button
        className="arrow right"
        onClick={handleNext}
        disabled={currentIndex >= 10 - visibleDrivers}
      >
        ❯
      </button>
    </div>
  );
};

export default Drivers;
