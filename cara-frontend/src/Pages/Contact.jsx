
import React from 'react'
import PageHeader from '../Components/Pageheader'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import Contactdetails from '../Components/Contactdetails'
import Formdetails from '../Components/Formdetails'
import '../App.css'

const Contact = () => {
  return (
    <div>
    <PageHeader title="#KnowUs" description="Our journey, your trust." className="about-header"/>
    <Contactdetails/>
    <Formdetails/>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Contact