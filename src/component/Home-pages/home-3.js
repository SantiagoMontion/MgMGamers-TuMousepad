import React from "react";
import "../../css/Home3.css";

function Home3() {
  return (
    <div className="story-telling-container">
      <h2 className="title-1">Somos MGM Company 😎</h2>
      <h3 className="text-mgm" id="text-pc">
        Desde nuestro inicio en 2020, MGMGamers ha crecido extraordinariamente
        gracias al
        <br /> gran apoyo de nuestra comunidad. Hoy nos enorgullece ser líderes
        en la fabricación de
        <br /> mousepads gamers en Argentina, todo gracias a ustedes 🇦🇷 .
        <br></br>
        <br></br>A quienes ya forman parte de MGM ¡Muchas gracias! Su apoyo
        constante nos impulsa <br />a crecer y mejorar. Son la razón de nuestro
        éxito y la inspiración para seguir <br />
        perfeccionando en cada producto porque se merecen lo MEJOR 🙌✨
      </h3>

      <h3 className="text-mgm" id="text-mobile">
        Desde nuestro inicio en 2020, MGMGamers ha crecido extraordinariamente
        gracias al gran apoyo de nuestra comunidad. Hoy nos enorgullece ser
        líderes en la fabricación de mousepads gamers en Argentina, todo gracias
        a ustedes 🇦🇷 .<br></br>
        <br></br>A quienes ya forman parte de MGM ¡Muchas gracias! Su apoyo
        constante nos impulsa a crecer y mejorar. Son la razón de nuestro éxito
        y la inspiración para seguir perfeccionando en cada producto porque se
        merecen lo MEJOR 🙌✨
      </h3>

      <div className="home-3-button-container">
        <a
          href="https://mgmgamers.store/productos/"
          target="_blank"
          className="home-3-button"
        >
          Conoce todos nuestros productos
        </a>
      </div>
    </div>
  );
}

export default Home3;
