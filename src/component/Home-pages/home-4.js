import "../../css/Home4.css";
import VideoPlayer from "../Home-pages/video-player.js";
import video1 from "../../img/clean.mp4";
import testimonies1 from "../../img/testimonies1.mp4";
import testimonies2 from "../../img/testimonies2.mp4";
import testimonies3 from "../../img/testimonies3.mp4";
import React from "react";
import clientes from "../../img/clientes.png";
function Home4() {
  return (
    <>
      <div className="limpieza-container">
        <div className="limpieza-left">
          <h2 className="title-1-process">Limpieza 🫰🧼</h2>

          <ul className="ul-list-clean" id="text-pc">
            <li className="list-text">
              Moja el mousepad con abundante agua 💦
            </li>
            <li className="list-text">
              Para una limpieza óptima, utiliza una <br />
              esponja suave y jabón líquido o detergente 🧽
            </li>
            <li className="list-text">
              Refriega suavemente toda la superficie del pad, <br />
              prestando especial atención a la costura de los bordes 🔍
            </li>
            <li className="list-text">
              Enjuaga hasta que no quede ningún resto de jabón en el material 🚿
            </li>
            <li className="list-text">Deja que se seque a la sombra ☂️</li>
            <li className="list-text">
              Una vez completamente seco, ya puedes <br />
              volver a viciar 😎
            </li>
          </ul>

          <ul className="ul-list-clean" id="text-mobile">
            <li className="list-text">
              Moja el mousepad con abundante agua 💦
            </li>
            <li className="list-text">
              Para una limpieza óptima, utiliza una esponja suave y jabón
              líquido o detergente 🧽
            </li>
            <li className="list-text">
              Refriega suavemente toda la superficie del pad, prestando especial
              atención a la costura de los bordes 🔍
            </li>
            <li className="list-text">
              Enjuaga hasta que no quede ningún resto de jabón en el material 🚿
            </li>
            <li className="list-text">Deja que se seque a la sombra ☂️</li>
            <li className="list-text">
              Una vez completamente seco, ya puedes volver a viciar 😎
            </li>
          </ul>

          <h4 className="video-text" id="text-pc">
            Si te quedo alguna duda, <br />
            podes ver el minitutorial de <br />
            cómo hacerlo 👉
          </h4>
          <h4 className="video-text" id="text-mobile">
            Si te quedo alguna duda, podes ver el minitutorial de cómo hacerlo
            👇
          </h4>
        </div>
        <div className="limpieza-right">
          <VideoPlayer video={video1} autoplay={false} controls={true} />
        </div>
      </div>
      <div className="process-container" id="testimonios">
        <h2 className="title-1-process">Nuestros clientes 🫂✨</h2>

        <div className="process-steps-container">
          <div className="process-step">
            <VideoPlayer video={testimonies1} autoplay={true} controls={true} />
          </div>

          <div className="process-step">
            <VideoPlayer video={testimonies2} autoplay={true} controls={true} />
          </div>

          <div className="process-step">
            <VideoPlayer video={testimonies3} autoplay={true} controls={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home4;
