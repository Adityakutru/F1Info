import React from "react";
import "./history.css";

const History = () => {
  return (
    <div className="history">
      <div className="history-hero">
        <h1 className="history-title">The History of Formula 1</h1>
      </div>
      <div className="history-content">
        <section>
          <h2>The Beginnings</h2>
          <p>
            Formula 1, also known as F1, is the highest class of single-seater
            auto racing. It began in 1950 with the inaugural World Championship
            held at Silverstone, United Kingdom. Over the decades, F1 has
            evolved into a global phenomenon, showcasing cutting-edge
            technology and the finest drivers in motorsport history.
          </p>
        </section>
        <section>
          <h2>The Golden Era</h2>
          <p>
            The 1970s and 1980s are often referred to as the golden era of F1.
            Legends like Ayrton Senna, Alain Prost, and Niki Lauda competed in
            some of the most thrilling races. Teams like Ferrari, McLaren, and
            Williams dominated the sport, pushing the limits of both engineering
            and driver skill.
          </p>
        </section>
        <section>
          <h2>Modern Day Formula 1</h2>
          <p>
            Today, F1 combines unparalleled speed, precision, and innovation.
            Hybrid engines, advanced aerodynamics, and data-driven strategies
            define the sport. The championship now spans across continents,
            featuring iconic circuits like Monaco, Monza, and Suzuka.
          </p>
        </section>
      </div>
    </div>
  );
};

export default History;
