import React from 'react'
import classNames from 'classnames'
import { compose, withState } from 'recompose'

import Logo from '../../assets/img/logo.png'
import styles from './index.module.scss'
import NavbarToggleButton from './NavbarToggleButton'
import Link from 'gatsby-link'

const withIsNavbarOpen = withState('isNavbarOpen', 'setIsNavbarOpen', false)

const NavLink = props => (
  <li className={styles.navbar__item}>
    <Link className={styles.navbar__link} {...props} />
  </li>
)

const Navbar = ({ isNavbarOpen, setIsNavbarOpen }) => (
  <div className={styles.navbar}>
    <NavbarToggleButton
      onClick={() => {
        setIsNavbarOpen(!isNavbarOpen)
      }}
      isCollapsed={!isNavbarOpen}
    />
    <Link to="/">
      <img src={Logo} className={styles.navbar__brand} />
    </Link>
    <ul
      className={classNames(styles.navbar__nav, {
        [styles.navbar__nav___show]: isNavbarOpen,
      })}
    >
      <NavLink
        to="/concept"
        onClick={() => {
          setIsNavbarOpen(false)
        }}
      >
        Concept
      </NavLink>
      <NavLink
        to="/stylist"
        onClick={() => {
          setIsNavbarOpen(false)
        }}
      >
        Stylist
      </NavLink>
      <NavLink
        to="/info"
        onClick={() => {
          setIsNavbarOpen(false)
        }}
      >
        Info
      </NavLink>
    </ul>
  </div>
)

export default compose(withIsNavbarOpen)(Navbar)
