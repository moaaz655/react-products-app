import React, { useState } from "react";
import "./Navbar2.css";
import avatar from "../../assets/avatar.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar2 = ({ sidebarOpen, openSidebar, toggle }) => {
  const [move, setMove] = useState(false);

  const moveNavbar = () => {
    if (window.scrollY >= window.innerHeight) {
      setMove(true);
    } else {
      setMove(false);
    }
  };
  window.addEventListener("scroll", moveNavbar);
  return (
    <nav className={`navbar2 ${move ? "move" : ""}`}>
      <Link className='navlink' to='/'>
        <div className='desktop'>Mobile Shop</div>
      </Link>
      <div className='navicon2' onClick={toggle}>
        <FaBars className='icon'></FaBars>
      </div>
    </nav>
  );
};

export default Navbar2;
