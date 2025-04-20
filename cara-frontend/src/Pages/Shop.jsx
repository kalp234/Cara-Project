import React from 'react'
import '../App.css'
import Pageheader from '../Components/Pageheader'
import Product1 from '../Components/Product1'
import Product2 from '../Components/Product2'
// import Pagination1 from '../Components/Pagination1'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'


const Shop = () => {
  return (
    <div>
      <Pageheader title="#stayhome" description="Save more with coupons & upto 70% off" className={"page-header"} />
      <Product1 />
      <Product2 />
      {/* <Pagination1 /> */}
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Shop