import React from 'react';
import { About,Footer,Header,Skills,Testimonial,Work } from './components';
import Navbar from './container/Navbar/Navbar';
import './App.scss';
import Practice from './components/Practice/Practice';


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
      <Practice/>


    </div>
  );
}

export default App