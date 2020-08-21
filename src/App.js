import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Carousel.scss";

import Home from "./pages/Home.js";
import TheEarl from "./pages/TheEarl.js";
import TheTerrace from "./pages/TheTerrace.js";
import Gallery from "./pages/Gallery.js";
import ContactUs from "./pages/ContactUs.js";
import Error from "./pages/Error.js";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VisitUs from "./components/VisitUs";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/the-earl/" component={TheEarl} />
        <Route exact path="/the-terrace/" component={TheTerrace} />
        <Route exact path="/gallery/" component={Gallery} />
        <Route exact path="/contact-us/" component={ContactUs} />
        <Route component={Error} />
      </Switch>
      <VisitUs />
      <Footer />
    </>
  );
}

export default App;
