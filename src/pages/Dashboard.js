import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import Main from "../components/main/Main";
import Navbar2 from "../components/navbar/Navbar2";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className=''>
      <Navbar2 className='navdash' toggle={toggle} />
      {/* <Navbar2 sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> */}
      <Sidebar show={show} toggle={toggle}></Sidebar>
      <Main />
    </div>
  );
}

export default Dashboard;
