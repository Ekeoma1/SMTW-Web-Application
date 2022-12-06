import React, {useEffect} from "react";
import Hero from "../components/Home/Hero";
import "../assets/css/home.css";
import About from "../components/Home/About";
import SectionTwo from "../components/Home/SectionTwo";
import Portfolio from "../components/Home/Portfolio";
import Category from "../components/Home/Category"

const Home = () => {
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return (
    <>
      <Hero />
      <About />
      <SectionTwo />
      <Portfolio />
      <Category/>
    </>
  );
};

export default Home;
