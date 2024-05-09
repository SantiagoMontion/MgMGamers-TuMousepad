import React, { useState, useEffect } from "react";
import "../css/Home.css";
import face from "../img/face.png";

import Home3 from "./Home-pages/home-3";
import Home4 from "./Home-pages/home-4";
import Process from "./Home-pages/process";
import Phrase from "./Home-pages/Phrase";
import Footer from "./Footer";
import Faq from "./Home-pages/Faq";

const texts = ["PERSONALIZADOS", "RESISTENTES", "ANTIDESLIZANTES"];
function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cambiar al siguiente texto
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2100); // Cambia el valor de acuerdo a la duración que desees

    return () => {
      // Limpiar el temporizador al desmontar el componente
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-left-container">
          <div className="home-text-container">
            <h4 className="home-text">MGM</h4>
            <div className="box-text-container">
              <h4 className="box-text">Company</h4>
              <img className="box-img" src={face}></img>
            </div>
          </div>
          <h1 className="home-title">MOUSEPADS GAMERS</h1>

          <div className="slider-container">
            <div className="text-animation">{texts[currentTextIndex]}</div>
          </div>

          <div className="fake-search-bar">
            <div className="home-fake-text">Cómo personalizar mi mousepad</div>
            <a
              href="https://tu-mousepad-personalizado.mgmgamers.store/"
              target="_blank"
              className="home-fake-icon"
            ></a>
          </div>
        </div>
        <Home3></Home3>
      </div>
      <Phrase></Phrase>
      <Process></Process>
      <Home4></Home4>
      <Faq></Faq>

      <Footer></Footer>
    </>
  );
}

export default Home;
