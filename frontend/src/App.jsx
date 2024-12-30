import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Hero from './components/Hero/Hero';
import bannerMessages from './data-folder/banner-messages';


function App() {

  return (
   <div>
    <Banner messages={bannerMessages} interval={5000} />
    <Navbar />
    <Hero />
   </div>
  )
}

export default App