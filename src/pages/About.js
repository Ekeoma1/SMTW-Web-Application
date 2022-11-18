import React from 'react'
import '../assets/css/about.css'
import Hero from '../components/about/Hero'
import History from '../components/about/History'
import SectionOne from '../components/about/SectionOne'
import Testimonial from '../components/about/Testimonial'

const About = () => {
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
