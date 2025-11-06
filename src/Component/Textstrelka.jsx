
import React, { useState } from 'react';
import './Accordion.css'; // Подключите файл стилей CSS

const Textstrelka = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      {/* Заголовок с кнопкой и стрелкой */}
      <button className="accordion-header" onClick={toggleAccordion}>
        <p>What are the services provided to customers?</p>
        <span className="accordion-title">{title}</span>
        {/* Стрелка меняет класс в зависимости от состояния */}
        <span className={`accordion-arrow ${isOpen ? 'open' : ''}`}>
          ▼
        </span>
      </button>

      {/* Содержимое, которое показывается или скрывается */}
    
      <div className={`accordion-content ${isOpen ? 'show' : ''}`}>
          <p>Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs,<br/> develop websites and mobile applications, provide support for the growth of business ideas, to help customers<br/> market their products online through the marketplace.</p>
        <div className="accordion-body">
          {children}
        </div>
      </div>
      
    </div>
  );
};

export default Textstrelka;