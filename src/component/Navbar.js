import React, { useState, useEffect } from "react";

import Logo from "../img/logo.svg";
import "../css/Navbar.css";

import { Link, animateScroll as scroll } from "react-scroll";
import burger_close from "../img/close.svg";
import burger from "../img/burger.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 60) {
        // Cambia este valor según cuánto quieres que se desplace antes de cambiar de color
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-left-container">
        <div>
          <img className="navbar-logo" src={Logo}></img>
        </div>
      </div>

      <div className="navbar-center-container">
        <Link
          activeClass="active"
          to="materiales"
          spy={true}
          smooth={true}
          offset={90}
          duration={500}
        >
          <a className="navbar-link">Materiales</a>
        </Link>
        <Link
          activeClass="active"
          to="limpieza-container"
          spy={true}
          smooth={true}
          offset={140}
          duration={500}
        >
          <a className="navbar-link">Cuidados</a>
        </Link>

        <Link
          activeClass="active"
          to="testimonios"
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
        >
          <a className="navbar-link">Testimonios</a>
        </Link>

        <Link
          activeClass="active"
          to="faqs-section"
          spy={true}
          smooth={true}
          offset={40}
          duration={500}
        >
          <a className="navbar-link">Dudas</a>
        </Link>
      </div>

      <div className="navbar-right-container">
        <a
          href="https://sites.google.com/view/mgmgamersblog/inicio"
          target="_blank"
          className="navbar-link"
        >
          Blog
        </a>
        <a
          href="https://mgmgamers.store/"
          target="_blank"
          className="navbar-link-button"
        >
          Comprar
        </a>
      </div>

      <button className="burger-menu-button" onClick={handleMenuToggle}>
        {!isOpen && (
          <>
            <img className="burger-img" src={burger}></img>
          </>
        )}

        {isOpen && (
          <>
            <img className="burger-img" src={burger_close}></img>
          </>
        )}
      </button>

      {isOpen && (
        <nav className="burger-menu">
          <div className="burger-container">
            <Link
              activeClass="active"
              to="materiales"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <a className="navbar-link">Materiales</a>
            </Link>
            <Link
              activeClass="active"
              to="limpieza-container"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <a className="navbar-link">Cuidados</a>
            </Link>

            <Link
              activeClass="active"
              to="testimonios"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <a className="navbar-link">Testimonios</a>
            </Link>

            <Link
              activeClass="active"
              to="faqs-section"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <a className="navbar-link">Dudas</a>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
