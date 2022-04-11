import React from 'react'
import Imzo from "../ProjectImg/IMZO PECHAT 1.png";
import Instagram from "../ProjectImg/Untitled-3 1.png";
import Facebook from "../ProjectImg/Untitled-3 5.png";
import Youtube from "../ProjectImg/Untitled-3 2.png";
import Song from "../ProjectImg/Untitled-3 4.png";
import Twitter from "../ProjectImg/Untitled-3 6.png";
import "../Css/BoshSahifa.css";

const Sahifa = () => {
  return (
    <div className='sahifa-bg'>
        <div className='row'>
            <div className='col-md-7'>
                <h1 className='smm'>SMM</h1>
                <p className='smm-text'>kurslari</p>
                <p className='smm-parag'>
                    "Target IT house" loyihasi menejeri, "Target" brendi marketing
                     bo'limi menejeri, SMM kurslari online maktabi
                     asoschisi, Marketolog. 2 yillik tajriba 100+ o'quvchi
                </p>
                <button className='smm-btn'>ONLINE KURS</button>
                <div>
                <img className='imzo' src={Imzo} />
                </div>

            </div>
            <div className='col-lg-5'>
                <img className='ins' src={Instagram}/>
                <img className='face' src={Facebook}/>
                <img className='you' src={Youtube}/>
                <img className='song' src={Song}/>
                <img className='twit' src={Twitter}/>
            </div>
        </div>
    </div>
  )
}

export default Sahifa