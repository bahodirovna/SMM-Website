import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sahifa from './Sahifa'
import Mijoz from './Mijoz.js';
import "../Css/BoshSahifa.css";

const BoshSahifa = () => {
  return (<div className='all-wrap'>
    <div className='bosh-sah-wrapper cointainer-fluid bg-white'>
      <Navbar/>
      <Sahifa/>
      <Mijoz/>
      <Footer/>
    </div>
    </div>
  )
}

export default BoshSahifa