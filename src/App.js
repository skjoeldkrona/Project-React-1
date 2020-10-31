import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import Employees from './Components/Employees/Employees';
import Offers from './Components/Offers/Offers';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <LandingPage />
        <Employees />
        <Offers />
      </main>
      <Footer />
    </>  
  );
}

export default App;