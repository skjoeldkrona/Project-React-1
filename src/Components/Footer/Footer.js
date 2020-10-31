import React from 'react';
import './Footer.css';
import Facebook from '../../icons/facebook-square.svg';
import Instagram from '../../icons/instagram-square.svg';

function Footer() {
  return (
    <>
        <footer>
            <div className="container container-flex">
                <span>
                    Nazwa firmy - wszelkie prawa zastrzeżone, 2019
                </span>
                <div className="social-media-icons">
                    <div className="social-media-icon-square">
                        <img src={Facebook} alt="#" />
                    </div>
                    <div className="social-media-icon-square">
                        <img src={Instagram} alt="#" />
                    </div>
                </div>
            </div>
        </footer>
    </>
    );
}

export default Footer;