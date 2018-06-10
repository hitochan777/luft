import React from 'react'
import Link from './NavLink'
import injectSheet from 'react-jss'
import FontAwesome from 'react-fontawesome'

const styles = {
  footer: {
    left: 0,
    bottom: 0,
  },
  footer__nav: {
    listStyleType: 'none',
  },
  footer__contact: {},
  footer__copywriteBar: {
    backgroundColor: 'black',
    color: 'white',
  },
}

const Footer = ({ classes }) => (
  <footer className={'container-fluid ' + classes.footer}>
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
          <ul className={classes.footer__nav}>
            <li className={classes.nav__item}>
              <Link to="/concept"> > Concept</Link>
            </li>
            <li className={classes.nav__item}>
              <Link to="/menu"> > Menu</Link>
            </li>
            <li className={classes.nav__item}>
              <Link to="/info"> > Info</Link>
            </li>
            <li className={classes.nav__item}>
              <Link to="/contact"> > Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div
      className={'row justify-content-center ' + classes.footer__copywriteBar}
    >
      <div className="col-1">©Luft</div>
    </div>
  </footer>
)

export default injectSheet(styles)(Footer)
