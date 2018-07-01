import React from 'react'
import Link from './NavLink'
import FontAwesome from 'react-fontawesome'

import styles from './footer.module.scss'

const Footer = () => (
  <footer className={'container-fluid ' + styles.footer}>
    <div className={'row justify-content-center py-5'}>
      <div className={'col-12 col-md-2'}>
        <span>
          <strong>Luft</strong>
        </span>
        <br />
        <span>〒xxx-yyy 兵庫県豊岡市若松町7-4</span>
        <br />
        <span>
          <FontAwesome name="phone" />
          <a href="tel:xxx-yyy-zzzz">xxx-yyy-zzzz</a>
        </span>
      </div>
      <div className={'col-12 col-md-2'}>
        <nav className="row justify-content-center">
          <ul className={styles.footer__nav}>
            <li className={styles.nav__item}>
              <Link to="/concept">Concept</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/stylist">Stylist</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/menu">Menu</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/info">Shop Information</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div
      className={'row justify-content-center ' + styles.footer__copywriteBar}
    >
      <div className="col-1">©Luft</div>
    </div>
  </footer>
)

export default Footer
