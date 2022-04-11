import React from 'react'
import "../Css/Navbar.css";
import Logo from "../ProjectImg/Untitled-3 3.png";
import {Link} from "react-router-dom";

const Navbar = () => {

  const navigation = [
    {id: 1, path: <Link className='nav-link' to="/boshSahifa">Bosh Sahifa</Link>},
    {id: 2, path: <Link className='nav-link' to="/kurs">Kurs Rejasi</Link>},
    {id: 3, path: <Link className='nav-link' to="/login">Kabinetga Kirish</Link>},
    {id: 4, path: <Link className='nav-link' to="/login">O`quvchilar va Natijalar</Link>},
    {id: 5, path: <Link className='nav-link' to="/login">Biz bilan Bog`lanish</Link>}
  ]
  return (
    <div>
          <nav class="navbar navbar-expand-lg ">
  <div className='d-flex'>
    <span class="navbar-brand">
        <img className='brand' src={Logo}/>
      </span>
      <ul class="navbar-list">
          {navigation.map((nav)=> <li className="navbar-item">{nav.path}</li>
          )}
      </ul>
  </div>
</nav>

    </div>
  )
}

export default Navbar