import React from 'react';
import './Offers.css';

function Offers() {
  return (
    <>
        <section className="offers" id="oferta">
            <div className="container">
                <h1>Czym zajmuje się nasza firma?</h1>
                <div className="offers-container">
                    <div className="offers-container-box">
                        <div className="offers-container-box-dot"></div>
                        <div className="offers-container-box-content">
                            <h2>Usługa 1</h2>
                            <span>(nowość)</span>
                        </div>
                    </div>
                    <div className="offers-container-box">
                        <div className="offers-container-box-content">
                            <h2>Usługa 2</h2>
                        </div>    
                    </div>
                    <div className="offers-container-box">
                        <div className="offers-container-box-content">
                            <h2>Usługa 3</h2>
                        </div>    
                    </div>
                    <div className="offers-container-box">
                        <div className="offers-container-box-content">
                            <h2>Usługa 4</h2>
                        </div>    
                    </div>
                    <div className="offers-container-box">
                        <div className="offers-container-box-content">
                            <h2>Usługa 5</h2>
                        </div>    
                    </div>
                    <div className="offers-container-box">
                        <div className="offers-container-box-content">
                            <h2>Usługa 6</h2>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Offers;