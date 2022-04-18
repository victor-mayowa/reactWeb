import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  );
};

export default App;
