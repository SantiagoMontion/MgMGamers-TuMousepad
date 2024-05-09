import React from "react";
import "../../css/Home2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Rectangle1 from "../../img/Rectangle1.png";
import Rectangle2 from "../../img/Rectangle2.png";
import Rectangle3 from "../../img/Rectangle3.png";
import Rectangle4 from "../../img/Rectangle4.png";
import Rectangle5 from "../../img/Rectangle5.png";
import Rectangle6 from "../../img/Rectangle6.png";

function Home2() {
  return (
    <>
      <div className="fake-navbar">
        <div className="left">
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className="center">Sus diseños favoritos</div>
        <div className="right">
          <a href="https://www.instagram.com/mgmgamers.store/" target="_blank">
            <FontAwesomeIcon className="right-icon" icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="photos-background">
        <div className="photos-right">
          <img className="photo" src={Rectangle1}></img>
          <img className="photo" src={Rectangle4}></img>
          <img className="photo" src={Rectangle5}></img>
          <img className="photo" src={Rectangle3}></img>
          <img className="photo" src={Rectangle2}></img>
          <img className="photo" src={Rectangle6}></img>
        </div>
      </div>
    </>
  );
}

export default Home2;
