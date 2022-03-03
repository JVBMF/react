import React from 'react';
import './NavBar.css';

/* Esta NavBar es function based */

const NavBar = () => {
    
 return(

    <div>
        <nav className="menu">
            <ul className="menuItems">
                <li><a href="#"><img src="https://w7.pngwing.com/pngs/1005/948/png-transparent-shopping-cart-graphy-shopping-cart-furniture-rectangle-supermarket.png" alt="" height="50 rem"/></a></li> 
                <li><a href="#">zapatillas</a></li>
                <li><a href="#">remeras</a></li>
                <li><a href="#">pantalones</a></li>
            </ul>
    
        </nav>
    </div>
 )
}

export { NavBar }