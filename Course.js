import React from 'react'
import "../Css/Course.css";
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import List from "./List";


const Course = (props) => {

    const {state} = props;


  return (
    <div className="all-wrap">
      <div className="kusr-wrapper cointainer-fluid bg-white">
        <Navbar/>
        <List state={state}/>
        <Footer/>
      </div>
</div>

  )
}

export default Course