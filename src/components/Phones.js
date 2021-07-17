import React from "react";
import "./Phones.css";
import { phones } from "../data/list";
import Slide from "react-reveal/Reveal";

const Phones = ({ id }) => {
  return (
    <div className='phoneContainer' id={id}>
      <h1 className='phoneHeading'>Most popular</h1>
      <div className='phoneWrapper'>
        {phones.map((phone, index) => (
          <Slide
            key={index}
            right={index >= 3 ? true : false}
            left={index < 3 ? true : false}>
            <div className='phoneCard'>
              <img src={phone.img} className='phoneImg' alt={phone.alt} />
              <div className='phoneInfo'>
                <div className='protTitle'>{phone.title}</div>
                <div className='protDesc'>{phone.desc}</div>
                <div className='phonePrice'>{phone.price}</div>
                <button className='phoneBtn'>Select</button>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Phones;
