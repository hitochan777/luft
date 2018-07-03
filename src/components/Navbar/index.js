import React from 'react'
import classNames from 'classnames'
import { compose, withState } from 'recompose'

import styles from './index.module.scss'

const withIsNavbarOpen = withState('isNavbarOpen', 'setIsNavbarOpen', false)

const Navbar = ({ isNavbarOpen, setIsNavbarOpen }) => (
  <div className={styles.navbar}>
    <button
      className={styles.navbar__toggle}
      onClick={() => {
        setIsNavbarOpen(!isNavbarOpen)
        console.log(isNavbarOpen)
      }}
    >
      <span>x</span>
    </button>
    <div className={styles.navbar__brand}>LOGO</div>
    <ul
      className={classNames(styles.navbar__nav, {
        [styles.navbar__nav___show]: isNavbarOpen,
      })}
    >
      <li className={styles.navbar__item}>
        <a className={styles.navbar__link} href="/">
          Home
        </a>
      </li>
      <li className={styles.navbar__item}>
        <a className={styles.navbar__link} href="/">
          News
        </a>
      </li>
      <li className={styles.navbar__item}>
        <a className={styles.navbar__link} href="/">
          Contact
        </a>
      </li>
      <li className={styles.navbar__item}>
        <a className={styles.navbar__link} href="/">
          About
        </a>
      </li>
    </ul>
  </div>
)

export default compose(withIsNavbarOpen)(Navbar)
