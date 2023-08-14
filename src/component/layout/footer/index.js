import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../../container'
import { logoWhite } from '../../../assets'

import './footer.css'

function Footer() {
  return (
    <footer id="footer" className="primary-background">
      <Container>
        <section className='img-footer'>
          <img src={logoWhite} alt='logo' />
        </section>
        <section>
          <h5>Doormat Navigation</h5>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/">
                About
              </Link>
            </li>
            <li>
              <Link to="/">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/">
                Login
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h5>Contact</h5>
          <ul>
            <li>
              <Link to="/">
                Address
              </Link>
            </li>
            <li>
              <Link to="/">
                Phone number
              </Link>
            </li>
            <li>
              <Link to="/">
                Email
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h5>Social Media Links</h5>
          <ul>
            <li>
              <Link to="/">
                Address
              </Link>
            </li>
            <li>
              <Link to="/">
                Phone number
              </Link>
            </li>
            <li>
              <Link to="/">
                Email
              </Link>
            </li>
          </ul>
        </section>
      </Container>
    </footer>
  )
}

export default Footer
