import './Navbar.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu,setMenu]=useState("menu");
  const{getTotalCartAmount,token,setToken}=useContext(StoreContext);

  const navigate=useNavigate();
  const logout=()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/")

  }

  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.logo} alt="" className='logo'  /> </Link>
        <ul className="navbar-menu">
            <Link  onClick={()=>setMenu("home")}  className={menu==="home"?"active":""} >Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")}  className={menu==="menu"?"active":""}>Menu</a>
            <a href='#app-download'  onClick={()=>setMenu("mobile-app")}  className={menu==="mobile-app"?"active":""}>Mobile-App</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")}   className={menu==="contact-us"?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" style={{ width: "30px", height: "auto" }}/>
            <div className="navbar-search-icon" >
             <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
              <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token? <button onClick={()=>setShowLogin(true)}>Sign In</button>
            :<div className='navbar-profile'>  
            <img src={assets.user_profile} alt="" />   
            <ul className='nav-profile-dropdown'>
                <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}> <img src={assets.logout_icon} alt="" /><p>Logout</p></li>  
               
            </ul>
               </div>
}
           
        </div>
    </div>
  )
}

Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};
export default Navbar


