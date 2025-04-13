import React from 'react'
import PageHeader from '../Components/Pageheader'
import Aboutheader from '../Components/Aboutheader'
import Aboutapp from '../Components/Aboutapp'
import Feature from '../Components/Feature'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import '../App.css'

const About = () => {
  return (
    <div>
    <PageHeader title="#KnowUs" description="Our journey, your trust." className="about-header"/>
    <Aboutheader/>
    <Aboutapp/>
    <Feature/>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default About