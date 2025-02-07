import React from "react";
import "./championship.css";

const Championship = () => {
  return (
    <div className="championship">
      <h1 className="title">F1 Championship Standings 2024</h1>
      <table className="standings-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Max Verstappen</td>
            <td>Red Bull Racing</td>
            <td>437</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lando Norris</td>
            <td>McLaren</td>
            <td>374</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Charles Leclerc</td>
            <td>Ferrari</td>
            <td>356</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Oscar Piastri</td>
            <td>Mclaren</td>
            <td>292</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Carlos Sainz jr</td>
            <td>Ferrari</td>
            <td>290</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Geoege Russel</td>
            <td>Mercedes</td>
            <td>245</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Lewis Hamilton</td>
            <td>Mercedes</td>
            <td>223</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Sergio Pérez</td>
            <td>Red Bull Racing</td>
            <td>152</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Fernando Alonso</td>
            <td>Astorn Martin</td>
            <td>70</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Pierre Gasly</td>
            <td>Alpine</td>
            <td>42</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Championship;
