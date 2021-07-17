import React from "react";
import "./App.css";
// import Hero from "./components/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
