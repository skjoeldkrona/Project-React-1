import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <>
        <section className="landing-page">
            <div className="landing-page-shadow">
                <div className="container container-flex-column">
                    <h1>Nasza firma oferuje najwyższej jakości produkty</h1>
                    <h2>Nie wierz nam na słowo - sprawdź</h2>                    
                    <a className="button" href="#oferta">oferta</a>
                </div>
            </div>
        </section>
    </>
  );
}

export default LandingPage;