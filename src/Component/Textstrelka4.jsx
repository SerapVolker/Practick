
import React, { useState } from 'react';
import './Accordion.css'; // Подключите файл стилей CSS

const Textstrelka2 = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      {/* Заголовок с кнопкой и стрелкой */}
      <button className="accordion-header" onClick={toggleAccordion}>
        <p>How do I get the payment complete?</p>
        <span className="accordion-title">{title}</span>
        {/* Стрелка меняет класс в зависимости от состояния */}
        <span className={`accordion-arrow ${isOpen ? 'open' : ''}`}>
          ▼
        </span>
      </button>

      {/* Содержимое, которое показывается или скрывается */}
    
      <div className={`accordion-content ${isOpen ? 'show' : ''}`}>
         
        <div className="accordion-body">
          {children}
        </div>
      </div>
      
    </div>
  );
};

export default Textstrelka2;