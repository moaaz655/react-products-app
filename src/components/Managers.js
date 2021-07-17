import React from "react";
import "./Phones.css";
import "./Managers.css";
import { managers } from "../data/members";
import Slide from "react-reveal/Reveal";

const Managers = ({ id }) => {
  return (
    <div className='managerContainer' id={id}>
      <h1 className='phoneHeading'>Our Team</h1>
      <div className='phoneWrapper'>
        {managers.map((manager, index) => (
          <Slide
            key={(manager, index)}
            right={index % 2 === 1 ? true : false}
            left={index % 2 === 0 ? true : false}>
            <div className='phoneCard'>
              <img src={manager.img} className='managerImg' alt={manager.alt} />
              <div className='phoneInfo'>
                <div className='protTitle'>{manager.name}</div>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Managers;
