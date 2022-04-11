import React from 'react'
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import "../Css/Login.css";
import {Link} from "react-router-dom";

const Login = () => {

   const handleSubmit = (e)=>{
       e.preventDefault();
   }

  return (<div>
    <Navbar/>
     <div className='login-wrapper'>
       <div className='login-box'>
         <h4 className='login-heading'>Shaxsiy kabinetga kirish uchun login va parolni kiriting!</h4>
         <form onSubmit={handleSubmit}  class="row g-3">
              <div class="col-12">
                <input type="text" class="form-control" id="inputAddress1" placeholder='Login'/>
                <input type="password" class="form-control" id="inputAddress2" placeholder='Parol'/>
              </div>
            
              <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary">Sign in</button>
                <Link to="#">
                  <p>Sizda Login va Parol Yo`qmi</p>
                </Link>
              </div>
       </form>
       </div>
     </div>
      
      <Footer/>
      
      </div>
  )
}

export default Login