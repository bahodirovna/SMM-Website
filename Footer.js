import React from 'react';
import Logo from "../ProjectImg/Untitled-3 3.png";
import  "../Css/Footer.css";

const Footer = () => {


  const icons = [
    {name: "fa fa-telegram"},
    {name: "fa fa-instagram"},
    {name: "fa fa-facebook-official"},
    {name: "fa fa-youtube-play"}
  ]
  

  return (
    <div>
          <footer class="footer  footer-expand-lg ">
  <div class="footer-container">
    <span class="footer-brand">
        <img src={Logo}/>
      </span>
      <ul class="footer-list mb-lg-0">
        {icons.map((icon)=>  <li className='footer-item text-white px-1'>
                                  <i class={icon.name} aria-hidden="true"></i>
                             </li>
                             )}
      </ul>
  </div>
</footer>
    </div>
  )
}

export default Footer