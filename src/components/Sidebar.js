import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Dashboard from "../pages/Dashboard";

const Sidebar = ({ toggle, show }) => {
  return (
    <div className={`sideContainer ${show ? "show" : ""}`}>
      <div className='close' onClick={toggle}>
        Close
      </div>
      {/* <Router> */}
      <div className='sideMenu'>
        <Link to='/' className='sideLink'>
          Home
        </Link>
        <Link to='/pricing' className='sideLink'>
          Pricing
        </Link>
        <Link to='/dashboard' className='sideLink'>
          Dashboard
        </Link>
        <Link to='#' className='sideLink'>
          Contact
        </Link>

        <div className='btnWrap'>
          <div className='sideRoute'>Book now</div>
        </div>
      </div>
      {/* <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch> */}
      {/* </Router> */}
    </div>
  );
};

export default Sidebar;
