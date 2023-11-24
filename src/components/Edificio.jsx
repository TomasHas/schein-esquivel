// eslint-disable-next-line no-unused-vars
import React from "react";
import Carroussel from "./Carroussel";

import ingreso from "../assets/imagnes del PDF/JPG/AND_5.jpg";
import sum from "../assets/imagnes del PDF/JPG/AND_6.jpg";
import terraza from "../assets/imagnes del PDF/JPG/AND_7.jpg";
import terraza2 from "../assets/imagnes del PDF/JPG/AND_4.jpg";
const slides = [
  { url: ingreso },
  { url: sum },
  { url: terraza },
  { url: terraza2 },
];

const Edificio = () => {
  return (
    <div id="edificio">
      <Carroussel data={slides} />
    </div>
  );
};

export default Edificio;
