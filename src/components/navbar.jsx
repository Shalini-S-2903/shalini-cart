import React from "react";
import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import "./navbar.css";
import {Gift} from "phosphor-react"

export const Navbar=()=>{
    return (
        <div className="navbar">
            {/* <i class='fas fa-gift' style='font-size:24px;color:white'></i>  */}
            <h2 className="appname" >buyNgo<Gift size={30}/></h2> 
            <div className="links">
                <Link to="/"><b>Home</b></Link>
                <Link to="/cart"><b>
                    <ShoppingCart size={32}/></b></Link>
            </div>
        </div>
    )
}