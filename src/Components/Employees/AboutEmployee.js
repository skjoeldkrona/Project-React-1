import React from 'react';
import './Employees.css';

function AboutEmployee({ name, desc, img }) {
  return (
    <div className="employee-container">
        <div style={{backgroundImage: `url(${img})`}} className="employee-image-round"></div>
        <div className="employee-description">
        <h2>{name}</h2>
            <p>{desc}</p>
        </div>
    </div>          
  );
}

export default AboutEmployee;