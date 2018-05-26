import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <div>
      <Link to="/concept">Concept</Link>
    </div>
    <div>
      <Link to="/menu">Menu</Link>
    </div>
    <div>
      <Link to="/info">Info</Link>
    </div>
    <div>
      <Link to="/contact">Contact</Link>
    </div>
  </header>
)

export default Header
