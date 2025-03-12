import React, { useState } from "react";
import "../../css/Faqs.css";
import Open from "../../img/open_faq.svg";
import Close from "../../img/close_faq.svg";
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? "open" : "closed"}`}>
      <div className="question" onClick={toggleOpen}>
        {question}

        <img className="menu-option" src={isOpen ? Close : Open} />
      </div>
      {isOpen && (
        <div className="answer" id="show">
          {answer.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

function Faq() {
  return (
    <div className="faqs-section">
      <h2 className="title-1-process">Preguntas frecuentes 🤔💭</h2>
      <div className="faq-container">
        <FAQItem
          question="¿Los mousepads se pueden personalizar?"
          answer="Si, podes personalizar la medida y el diseño a tu gusto. Para hacerlo hace click acá 👌"
        />
        <FAQItem
          question="¿Los mousepads personalizados tienen costo extra?"
          answer={`No, el costo solo depende de la medida 📐 podes guiarte con los precios\n visita la página www.mgmgamers.store y busca la medida que te interesa\n para ver su precio 🙌`}
        />
        <FAQItem
          question="¿Cuánta demora tienen los mousepads?"
          answer={`Fabricamos los pads desde 0, por eso tenememos una demora de 5 a 7\n días habiles en tenerlos listos. Pero estamos mejorando los tiempos para\n que puedas tener tu pedido más rápido 💪`}
        />

        <FAQItem
          question="¿Hacen envíos internacionales?"
          answer={`Si 😎 trabajamos con la empresa DHL para hacer llegar el pedido a\n tus manos. Háblanos para cotizar el envío (30usd aproximadamente) 🚀`}
        />

        <FAQItem
          question="¿Son mayoristas?"
          answer={`¡Si! Podes acceder a un 30% off a partir de las 100 unidades. Para\n calcularlo entra a www.mgmgamers.store y restas el 30% a las medidas \nque quieras. El envío se calcula el día a despachar 🙌`}
        />
      </div>
    </div>
  );
}

export default Faq;
