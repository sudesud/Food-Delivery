
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
     <img src={assets.logo} alt="" className='footer-icon' />
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, commodi?</p>
        <div className="footer-social-icons">
            <img src={assets.face_icon} alt="" /><img src={assets.insta_icon} alt="" /><img src={assets.x_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
             <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
        </div>
        <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
              <ul>
                <li>+90-536-387-33-22</li>
                <li>sude@gmail.com</li>
              </ul>

        </div>
    
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 ........</p>
    </div>
  )
}

export default Footer
