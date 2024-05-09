import React from "react";
import "../../css/process.css";

import scissors from "../../img/scissors.svg";
import costura from "../../img/costura.svg";
import sublimacion from "../../img/sublimacion.svg";
import empaquetado from "../../img/empaquetado.svg";
import envio from "../../img/envio.svg";
import entrega from "../../img/entrega.svg";
import desing from "../../img/desing.png";
import borde from "../../img/borde.png";
import anti from "../../img/anti.png";

function Process() {
  return (
    <>
      <div className="process-container">
        <h2 className="title-1-process">proceso que cumple tu mousepad</h2>

        <div className="process-steps-container">
          <div className="process-step">
            <h4 className="step-title">CORTE</h4>
            <img className="photo-step" src={scissors}></img>
          </div>

          <div className="process-step">
            <h4 className="step-title">COSTURA</h4>
            <img className="photo-step" src={costura}></img>
          </div>

          <div className="process-step">
            <h4 className="step-title">sublimación</h4>
            <img className="photo-step" src={sublimacion}></img>
          </div>
          <div className="process-step">
            <h4 className="step-title">Empaquetado</h4>
            <img className="photo-step" src={empaquetado}></img>
          </div>
          <div className="process-step">
            <h4 className="step-title">envío</h4>
            <img className="photo-step" src={envio}></img>
          </div>
          <div className="process-step">
            <h4 className="step-title">En Tus manos</h4>
            <img className="photo-step" src={entrega}></img>
          </div>
        </div>

        <div className="process-button-container">
          <a
            href="https://www.mgmgamers.store/"
            target="_blank"
            className="process-button"
          >
            QUIERO MI MOUSEPAD GAMER
          </a>
        </div>
      </div>

      <div className="process-container" id="materiales">
        <h2 className="title-1-process">MATERIALES</h2>

        <div className="process-steps-container">
          <div className="process-step" id="mat">
            <h4 className="step-title">Diseño</h4>
            <div className="material-step">
              <img className="photo-step-material" src={desing}></img>
              <h5 className="material-text">
                Los mousepads están fabricados con una tela de superficie
                perfectamente lisa para un deslizamiento suave y rápido, pero a
                su vez también se puede lograr un gran control por su mínima
                rugosidad.
              </h5>
            </div>
          </div>

          <div className="process-step" id="mat">
            <h4 className="step-title">Bordes</h4>
            <div className="material-step">
              <img className="photo-step-material" src={borde}></img>
              <h5 className="material-text">
                Sus bordes cuentan con una costura que prolongará la vida útil
                del pad. Además, este bordado se sublima con el mismo diseño del
                mousepad (hilos de fibra de poliéster).
              </h5>
            </div>
          </div>

          <div className="process-step" id="mat">
            <h4 className="step-title">Antideslizante</h4>
            <div className="material-step">
              <img className="photo-step-material" src={anti}></img>
              <h5 className="material-text">
                En la parte inferior llevan una goma antideslizante de alta
                resistencia, que prolongaran su vida útil por muchos años.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;
