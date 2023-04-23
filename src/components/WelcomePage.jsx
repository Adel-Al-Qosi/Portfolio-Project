import React from 'react';
import '../styles/WelcomePage.css'
import Me from './Me';

const WelcomePage = () => {
  return (
    <div id="welcome" className='welcome-page'>
      <Me />
    </div>
  );
}

export default WelcomePage;
