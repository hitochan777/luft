import React from 'react'
import injectSheet from 'react-jss'

import Link from './NavLink'

const styles = {
  nav: {
    backgroundColor: 'purple',
    color: 'white',
    height: '3%',
  },
  nav__logo: {
    fontSize: '2em',
    margin: 0,
  },
  nav__menu: {
    display: 'flex',
    justifyContent: 'flex-start',
    listStyleType: 'none',
    margin: 0,
  },
  nav__menuItem: {
    alignSelf: 'center',
    padding: '15px',
  },
}

const Header = ({ classes, siteTitle }) => (
  <header>
    <nav className={classes.nav}>
      <ul className={classes.nav__menu}>
        <li className={classes.nav__logo + ' ' + classes.nav__menuItem}>
          <Link to="/">{siteTitle}</Link>
        </li>
        <li className={classes.nav__menuItem}>
          <Link to="/concept">Concept</Link>
        </li>
        <li className={classes.nav__menuItem}>
          <Link to="/menu">Menu</Link>
        </li>
        <li className={classes.nav__menuItem}>
          <Link to="/info">Info</Link>
        </li>
        <li className={classes.nav__menuItem}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default injectSheet(styles)(Header)
