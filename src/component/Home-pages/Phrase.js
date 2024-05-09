import React from "react";
import "../../css/Home3.css";

function Phrase() {
  return (
    <div className="phrase-container">
      <p className="bracket">{"["}</p>
      <h4 className="phrase-text" id="text-pc">
        Nuestros mousepads gamers<br></br> potenciarán tu rendimiento,
        <br></br> brindándote
        <span className="t-b"> rapidez</span> cuando necesitas<br></br>{" "}
        <span className="t-b"> velocidad</span> y <span className="t-b"> precisión</span>{" "}
        cuando buscas<br></br>
        <span className="t-b"> exactitud</span>.
      </h4>

      <h4 className="phrase-text" id="text-mobile">
        Nuestros mousepads gamers potenciarán tu rendimiento,
        brindándote
        <span className="t-b"> rapidez</span> cuando necesitas{" "}
        <span className="t-b"> velocidad</span> y <span className="t-b"> precisión</span>{" "}
        cuando buscas
        <span className="t-b"> exactitud</span>.
      </h4>

      
      <p className="bracket">{"]"}</p>
    </div>
  );
}

export default Phrase;
