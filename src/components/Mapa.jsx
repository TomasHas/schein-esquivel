/* eslint-disable no-unused-vars */
import React from "react";
import mapa from "./../assets/imagnes del PDF/JPG/AND_2.jpg";
import styles from "./mapa.module.css";
function Mapa() {
  return (
    <div id="mapa">
      <div className={styles.mapa_img_container}>
        <img src={mapa} alt="mapa" className={styles.mapa_img} />
      </div>
    </div>
  );
}

export default Mapa;
