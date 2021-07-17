import React from "react";
import Hero from "../components/Hero";
import Managers from "../components/Managers";
import Phones from "../components/Phones";
import Team from "../components/Team";

function Home() {
  return (
    <div>
      <Hero />
      <Phones />
      <Team />
      <Managers />
    </div>
  );
}

export default Home;
