// eslint-disable-next-line no-unused-vars
import React from "react";

// import ingreso from "../assets/imagnes del PDF/JPG/AND_5.jpg";
// import sum from "../assets/imagnes del PDF/JPG/AND_6.jpg";
// import terraza from "../assets/imagnes del PDF/JPG/AND_7.jpg";
import barrio1 from "../assets/fotos solas y capturas/barrio/20221014_125411.jpg";
import barrio2 from "../assets/fotos solas y capturas/barrio/20221014_125746.jpg";
import barrio3 from "../assets/fotos solas y capturas/barrio/20221014_130140.jpg";
import barrio4 from "../assets/fotos solas y capturas/barrio/20221014_130706.jpg";

import styles from "./barrio.module.css";
const Barrio = () => {
  return (
    <div id="barrio" className={styles.container}>
      <div className={styles.image_container}></div>
      <img src={barrio1} alt="barrio1" className={styles.barrio_image} />
      <img src={barrio3} alt="barrio1" className={styles.barrio_image} />{" "}
      <img src={barrio2} alt="barrio1" className={styles.barrio_image} />{" "}
      <img src={barrio4} alt="barrio1" className={styles.barrio_image} />
    </div>
  );
};

export default Barrio;
