import React, { useState } from "react";
import'./style.css'

export default function topo() {
    const [active, setActive] = useState('nav_menu');
    const[toggleIcon, setToggleIcon] = useState("nav_toggler");

    const navToggle = () => {
        active === 'nav_menu' ? setActive ('nav_menu nav_active') : setActive('nav_menu');
       

        toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler');
    }

    return (

    <header  className=" nav limita-sessao">
       
        <h2 className="brand">Tiago Rodrigues</h2>
        <ul className={active}>
        <li className="nav_item"><a href="#aboutMe" className="nav_link">About</a></li>
            <li className="nav_item"><a href="#experience" className="nav_link">Experience</a></li>
            <li className="nav_item"><a href="#projects" className="nav_link">Projects</a></li>
            <li className="nav_item"><a href="#contact" className="nav_link">Contact</a></li>
        </ul>
        
        

        <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        
    </header>

        
)}