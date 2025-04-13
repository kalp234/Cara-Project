import React from 'react'
import '../App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";


const Contactdetails = () => {
  return (
    <section id="contact-details" className="section-p1">
      <div className="details">
        <span>GET IN TOUCH</span>
        <h2>Visit one of our agency locations or contact us today</h2>
        <h3>Head Office</h3>
        <div>
          <li>
          <i className="fa-regular fa-map"></i>
            <p>Shop No.1, Ground Floor,<br></br>Satya-2, Next to Bharat Petrol Pump,<br></br> Opp. Ranna Park Bus Stop, Ghatlodia,<br></br> Ahmedabad-380061</p>
          </li>
          <li>
          <i className="fa-regular fa-envelope"></i>
            <p>info@cara.com</p>
          </li>
          <li>
          <i className="fa-solid fa-phone"></i>
            <p>+91-7984832590</p>
          </li>
          <li>
          <i className="fa-regular fa-clock"></i>
            <p>Mon-Fri : 10 am to 6 pm</p>
          </li>
        </div>
      </div>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.84979572474!2d72.54478347394527!3d23.06596771470995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8366d33c3de5%3A0x16fb1ea27975b0dd!2sSATYA%20TWO!5e0!3m2!1sen!2sin!4v1743791634216!5m2!1sen!2sin" width="600" height="450" style={{"border":0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}

export default Contactdetails