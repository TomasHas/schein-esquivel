// import logo from "../assets/logoAND.jpg";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import logo from "./../../assets/logoAND.jpg";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = (e) => {
    e.preventDefault();
    // setIsMenuOpen(!isMenuOpen);
    setIsMenuOpen(() => !isMenuOpen);
  };

  return (
    <nav>
      <Link to={"/"}>
        <img src={logo} alt="logo" height="90" />
      </Link>
      <div className={styles.burger} onClick={handleBurgerClick}>
        {!isMenuOpen ? (
          <GiHamburgerMenu size={40} />
        ) : (
          <h1 className={styles.x}>x</h1>
        )}
      </div>

      <ul className={isMenuOpen ? styles.open : ""}>
        <li>
          <a href="#barrio">Barrio</a>{" "}
        </li>
        <li>
          <a href="#edificio">Edificio</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
        <li>
          <a href="#mapa">mapa</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
