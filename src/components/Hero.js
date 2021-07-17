import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Hero.css";
import Sidebar from "./Sidebar";

const Hero = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className='container'>
      <Navbar toggle={toggle}></Navbar>
      <Sidebar show={show} toggle={toggle}></Sidebar>
      <div className='content'>
        <div className='contentItems'>
          <h1 className='navHead'>New Smart Phones</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ea quo cupiditate facere deleniti fuga officia. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='btn'>Book now</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
