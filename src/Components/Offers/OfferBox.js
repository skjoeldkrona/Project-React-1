import React from 'react';
import './Offers.css';

function OfferBox({ title, isNew  }) {
  return (
    <>
        <div className="offers-container-box">
            <div className={`${isNew ? "offers-container-box-dot" : ''}`}></div>
            <div className="offers-container-box-content">
                <h2>{title}</h2>
                {isNew && <span>(nowość)</span>}
            </div>
        </div>                
    </>          
  );
}

export default OfferBox;