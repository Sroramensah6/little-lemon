import React from 'react'
import { hamburger, logo } from '../../../assets'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <header id="navbar">
            <nav className="navbar-container container">
                <img src={hamburger} className='hamburger' alt="hamburger icon" />
                <img className='logo' src={logo} alt="little lemon logo" />
                <ul className="nav-items">
                    <li>
                        <Link to="/">Home</Link>
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

export default NavBar
