import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Home from 'components/Home';
import What from 'components/What';
import How from 'components/How';

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='App'>
      <Home />
      <What/>
      <How/>
    </div>
  );
}

export default App;