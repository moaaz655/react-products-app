import React from "react";
import "./Team.css";
import Slide from "react-reveal/Reveal";
import team from "../images/team.jpg";

const Team = () => {
  return (
    <div className='teamContainer'>
      <h2>Our favorite</h2>

      <div className='teamContent'>
        <Slide left>
          <img src={team} className='teamImage' alt='phone' />
        </Slide>
        <Slide right>
          <div className='textContent'>
            <p>
              A mobile phone is a wireless handheld device that allows users to
              make calls. A mobile phone is a wireless handheld device that
              allows users to make calls.
            </p>
          </div>
        </Slide>
      </div>
      <button className='teamBtn'>Order Now</button>
    </div>
  );
};

export default Team;
