import React from 'react';
import { About,Footer,Header,Skills,Testimonial,Work } from './components';
import Navbar from './container/Navbar/Navbar';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar/> 
      <Header/> 
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>


    </div>
  );
}

export default App