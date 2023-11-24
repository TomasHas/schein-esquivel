/* eslint-disable no-unused-vars */
import React from "react";
import mapa from "./../assets/imagnes del PDF/JPG/AND_2.jpg";
import styles from "./mapa.module.css";
function Mapa() {
  return (
    <div>
      <h1>Mapa</h1>
      <img src={mapa} alt="mapa" className={styles.mapa} />
    </div>
  );
}

export default Mapa;
