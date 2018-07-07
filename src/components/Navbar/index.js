import React from 'react'
import classNames from 'classnames'
import { compose, withState } from 'recompose'

import styles from './index.module.scss'
import NavbarToggleButton from './NavbarToggleButton'
import Link from '../NavLink'

const withIsNavbarOpen = withState('isNavbarOpen', 'setIsNavbarOpen', false)

const NavLink = ({ children, to, ...rest }) => (
  <li className={styles.navbar__item}>
    <Link className={styles.navbar__link} to={to} {...rest}>
      {children}
    </Link>
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
    <div className={styles.navbar__brand}>LOGO</div>
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
        to="/menu"
        onClick={() => {
          setIsNavbarOpen(false)
        }}
      >
        Menu
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
