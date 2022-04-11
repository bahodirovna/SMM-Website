import React, {useState, useEffect} from "react";
import "../Css/App.css";
import {courseState} from "../State.js";
import Course from "./Course.js";
import BoshSahifa from "./BoshSahifa.js";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import NotFound from "./NotFound";
import Login from "./Login";




function App() {

  const [state, setstate] = useState([]);



 useEffect(()=>{
   setstate(courseState);

   
},[])


  return (<Router>

        <Routes>
           <Route path="/boshSahifa" element={<BoshSahifa/>}/>
           <Route path="/not-found" element={<NotFound/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/kurs" element={<Course  state={state}/>} />
           <Route path="/" element={<Navigate to="boshSahifa"/>} />
           <Route path="/*" element={<Navigate to="not-found"/>} />
        </Routes>

   </Router>



  );
}

export default App;
