import React from 'react'
import { hamburger, logo } from '../../assets'

function Nav() {
    return (
        <header id="navbar">
            <nav className="navbar-container container">
                <img
                    src={hamburger}
                    class='hamburger'
                    alt="hamburger icon"
                />
                <img
                    class='logo'
                    src={logo}
                    alt="little lemon logo"
                />
                <ul class="nav-items">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">Reservations</a>
                    </li>
                    <li>
                        <a href="#">Reservations</a>
                    </li>
                    <li>
                        <a href="#">Order online</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
