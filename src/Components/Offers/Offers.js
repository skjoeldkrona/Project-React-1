import React from 'react';
import OfferBox from './OfferBox';
import './Offers.css';

const offersList = [
    {
        offerName: 'Rowery',
        isNew: false, 
    },
    {
        offerName: 'Buty',
        isNew: false, 
    },
    {
        offerName: 'Odzież',
        isNew: false, 
    },
    {
        offerName: 'Narzędzia',
        isNew: true, 
    },
    {
        offerName: 'Akcesoria',
        isNew: false, 
    },
    {
        offerName: 'Kaski',
        isNew: false, 
    },
    {
        offerName: 'Bagaż',
        isNew: true, 
    },
    {
        offerName: 'Części',
        isNew: false, 
    },
    {
        offerName: 'Inne',
        isNew: false, 
    },
]

function Offers() {
  return (
    <>
        <section className="offers" id="oferta">
            <div className="container">
                <h1>Czym zajmuje się nasza firma?</h1>
                <div className="offers-container">
                {offersList.map(offer => {
                    return <OfferBox title={offer.offerName} isNew={offer.isNew} />
                })}
                </div>
            </div>
        </section>
    </>
  );
}

export default Offers;