import React from 'react';
import './NavBar.css';

/* Esta NavBar es function based */

const NavBar = () => {
    
 return(

    <div>
        <nav class="menu">
            <ul class="menuItems">
                {/* Me dice que <a href=""> tiene un error pero compila igual */}
                <li><a href="#">Logo</a></li> 
                <li><a href="#">Zapatillas</a></li>
                <li><a href="#">Remeras</a></li>
                <li><a href="#">Pantalones</a></li>
            </ul>
    
            <span class="btn_menu">
                <i class="fa fa fa-bars"></i>
            </span>
    
        </nav>
    </div>
 )
}

export { NavBar }