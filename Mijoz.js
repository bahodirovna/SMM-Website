import React from 'react'
import "../Css/BoshSahifa.css"
import one from "../ProjectImg/1.png";
import two from "../ProjectImg/2.png";
import three from "../ProjectImg/3.png";
import four from "../ProjectImg/4.png";
import five from "../ProjectImg/5.png";
import six from "../ProjectImg/6.png";
import seven from "../ProjectImg/7.png";
import eight from "../ProjectImg/8.png";
import nine from "../ProjectImg/9.png";
import ten from "../ProjectImg/10.png";
import eleven from "../ProjectImg/11.png";
import twelve from "../ProjectImg/12.png";
import thirteen from "../ProjectImg/13.png";
import fourteen from "../ProjectImg/14.png";
import fifteen from "../ProjectImg/15.png";
import sixteen from "../ProjectImg/16.png";
import seventeen from "../ProjectImg/17.png";
import eightteen from "../ProjectImg/18.png";

const Mijoz = () => {

  //  const images = [
  //    {name: one},
  //    {name: two},
  //    {name: three},
  //    {name: four},
  //    {name: five},
  //    {name: six},
  //    {name: seven},
  //    {name: eight},
  //    {name: nine},
  //    {name: ten},
  //    {name: eleven},
  //    {name: twelve},
  //    {name: thirteen},
  //    {name: fourteen},
  //    {name: fifteen},
  //    {name: sixteen},
  //    {name: seventeen},
  //    {name: eightteen},
  //  ]

  return (<div className='fluid'>
      <div className='heading-box'>
        <h2 className='mijoz-heading pt-2'>Bizni Tavsiya Etadigan Mijozlarimiz</h2>
      </div>

    {/* <div className='img-fluid d-flex'>
        {images.map((image)=> <div><img className='mijoz-img' src={image.name}/></div>)}
    </div> */}

      <div className='row text-center  mijoz-row'>
        <div className='col-lg-12 mb-3'>
          <img src={one}/>
          <img src={two}/>
          <img src={three}/>
          <img src={four}/>
          <img src={five}/>
          <img src={six}/>
          <img src={seven}/>
        </div>
        <div className='col-lg-12 mb-3'>
        <img src={eight}/>
          <img src={nine}/>
          <img src={ten}/>
          <img src={eleven}/>
          <img src={twelve}/>
          <img src={thirteen}/>
          <img src={fourteen}/>
        </div>
        <div className='col-lg-12'>
        <img src={fifteen}/>
          <img src={sixteen}/>
          <img src={seventeen}/>
          <img src={eightteen}/>
        </div>
      </div>


    </div>
  )
}

export default Mijoz