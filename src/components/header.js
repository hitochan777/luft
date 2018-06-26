import React from 'react'

import Link from './NavLink'
import styles from './header.module.scss'

const Header = ({ siteTitle }) => (
  <header>
    <nav className={styles.nav}>
      <ul className={styles.nav__menu}>
        <li className={styles.nav__logo + ' ' + styles.nav__menuItem}>
          <Link to="/">{siteTitle}</Link>
        </li>
        <li className={styles.nav__menuItem}>
          <Link to="/concept">Concept</Link>
        </li>
        <li className={styles.nav__menuItem}>
          <Link to="/menu">Menu</Link>
        </li>
        <li className={styles.nav__menuItem}>
          <Link to="/info">Info</Link>
        </li>
        <li className={styles.nav__menuItem}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
