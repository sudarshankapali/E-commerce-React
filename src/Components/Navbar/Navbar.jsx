import React, { useContext, useState } from "react";
import "./Navbar.css"
import cart_icon from "../../assets/cart_icon.png"
import logo from "../../assets/logo.webp"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = ()=>{
    const [menu,setMenu] = useState("home");
    const {getTotalCartItems} = useContext(ShopContext)
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""  height="50px"/>
                <p>Shopify</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:"none", color:"#626262"}} to="/" >Home</Link>
                    {menu==="home" ? <hr />:<></>}
                </li>
                <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:"none", color:"#626262"}} to="/men">Men</Link>
                {menu==="men" ? <hr />:<></>}
                </li>
                <li onClick={()=>{setMenu("women")}}> <Link style={{textDecoration:"none", color:"#626262"}} to="/women">Women</Link>                {menu==="women" ? <hr />:<></>}
                </li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none", color:"#626262"}} to="kids">Kids</Link>
                {menu==="kids" ? <hr />:<></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <button><Link style={{textDecoration:"none", color:"#626262"}} to="/login">Login</Link></button>
                <Link to="/cart"><img src={cart_icon} alt="" height="40px"/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            </div>
    )
}

export default Navbar