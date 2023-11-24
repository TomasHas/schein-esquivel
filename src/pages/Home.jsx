/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./home.module.css";
import frente from "./../assets/fotos solas y capturas/FRENTE 90G-ScheinEsquivel-AndonFRENTE aegui-EXT-CAM08-F.jpg";
import Edificio from "../components/Edificio";
import Mapa from "../components/Mapa";
const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <article>
          {" "}
          <div>
            <div className={styles.main_image_container}>
              {" "}
              <img src={frente} alt="frente" className={styles.main_image} />
              <h1 className="title">Home</h1>
            </div>{" "}
            <p></p>
          </div>
        </article>
      </section>
      <section>
        <Mapa />
      </section>{" "}
      <section>
        <h1 className="title">Barrio</h1>
      </section>{" "}
      <section>
        <Edificio />
      </section>{" "}
      <section>
        <h1 className="title">Unidades</h1>
      </section>{" "}
      <section>
        <h1 className="title">Avances de Obra</h1>
      </section>{" "}
      <section>
        {" "}
        <h1>Contacto</h1>
      </section>
    </div>
  );
};

export default Home;
