import React from 'react';

const MiniMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      {/* Contenido del menú */}
      <button onClick={toggleMenu}>Cerrar</button>
    </div>
  );
};

export default MiniMenu;