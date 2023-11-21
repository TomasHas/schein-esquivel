// import logo from "../assets/logoAND.jpg";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

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
        <p className={styles.logo}>SCHEIN | ESQUIVEL</p>
      </Link>
      <section className={styles.burger} onClick={handleBurgerClick}>
        {!isMenuOpen ? (
          <GiHamburgerMenu size={40} />
        ) : (
          <h1 className={styles.x}>x</h1>
        )}
      </section>

      <ul className={isMenuOpen ? styles.open : ""}>
        <li>
          <Link to="/nosotros">Nosotros</Link>{" "}
        </li>
        <li>
          <Link to="/proyectos">Proyectos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
