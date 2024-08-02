import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Home from 'components/Home';
import What from 'components/What';
import How from 'components/How';
import SocialMediaPara from 'components/SocialMediaPara';
import ClientsPara from 'components/Clients';
import NumbersPara from 'components/Numbers';

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='App'>
      <Home />
      <What/>
      <How/>
      <SocialMediaPara/>
      <ClientsPara/>
      <NumbersPara/>
    </div>
  );
}

export default App;