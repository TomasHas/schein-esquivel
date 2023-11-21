/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className="container">
      <section className="header">
        <h1 className="title">Home</h1>
      </section>
      <section>
        <h1 className="title">Intro</h1>
      </section>{" "}
      <section>
        {" "}
        <section>
          <h1>Proyectos</h1>
        </section>{" "}
        <h1>Mapa</h1>
      </section>
    </div>
  );
};

export default Home;
