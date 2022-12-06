import React, {useEffect} from 'react'
import '../assets/css/about.css'
import Hero from '../components/about/Hero'
import History from '../components/about/History'
import SectionOne from '../components/about/SectionOne'
import Testimonial from '../components/about/Testimonial'

const About = () => {
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return (
    <div>
        <Hero/>
        <SectionOne/>
        <History/>
        <Testimonial/>
    </div>
  )
}

export default About
