import React from 'react'
import classNames from 'classnames'
import { compose, withState } from 'recompose'

import styles from './index.module.scss'
import NavbarToggleButton from './NavbarToggleButton'
import NavLink from '../NavLink'

const withIsNavbarOpen = withState('isNavbarOpen', 'setIsNavbarOpen', false)

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
      <li className={styles.navbar__item}>
        <NavLink className={styles.navbar__link} to="/concept">
          Concept
        </NavLink>
      </li>
      <li className={styles.navbar__item}>
        <NavLink className={styles.navbar__link} to="/stylist">
          Stylists
        </NavLink>
      </li>
      <li className={styles.navbar__item}>
        <NavLink className={styles.navbar__link} to="/menu">
          Menu
        </NavLink>
      </li>
      <li className={styles.navbar__item}>
        <NavLink className={styles.navbar__link} to="/info">
          Info
        </NavLink>
      </li>
    </ul>
  </div>
)

export default compose(withIsNavbarOpen)(Navbar)
