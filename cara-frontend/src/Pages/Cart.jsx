import React from 'react'
import Pageheader from '../Components/Pageheader'
import Cartdetails from '../Components/Cartdetails'
import Cartadd from '../Components/Cartadd'
import Footer from '../Components/Footer'
import '../App.css'

const Cart = () => {
  return (
    <div>
<Pageheader title="#CartPage 🛒" description="Your fashion picks, ready to checkout!" className="about-header"/>
<Cartdetails/>
<Cartadd/>
<Footer/>
    </div>
  )
}

export default Cart