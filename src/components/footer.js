import React from 'react'
import Link from './NavLink'
import FontAwesome from 'react-fontawesome'

import styles from './footer.module.scss'

const Footer = () => (
  <footer className={'container-fluid ' + styles.footer}>
    <div className={'row justify-content-center py-5'}>
      <div className={'col-2'}>
        <span>
          <strong>Luft</strong>
        </span>
        <br />
        <span>〒xxx-yyy　xx県yy市</span>
        <br />
        <span>
          <FontAwesome name="phone" /> xxx-yyy-zzzz
        </span>
      </div>
      <div className={'col-2'}>
        <nav>
          <ul className={styles.footer__nav}>
            <li className={styles.nav__item}>
              <Link to="/concept"> > Concept</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/menu"> > Menu</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/info"> > Info</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/contact"> > Contact</Link>
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
