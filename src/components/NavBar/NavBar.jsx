import React from 'react';
import './NavBar.css';

const NavBar = () => {
 return(
    <nav class="menu">
        <ul class="menuItem">
            <li><a href="#">Logo</a></li>
            <li><a href="#">Zapatillas</a></li>
            <li><a href="#">Remeras</a></li>
            <li><a href="#">Pantalones</a></li>
        </ul>

        <span class="btn_menu">
            <i class="fa fa fa-bars"></i>
        </span>

    </nav>
 )
}

export { NavBar }