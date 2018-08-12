import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'

import styles from './footer.module.scss'

const Footer = () => (
  <footer className={'container-fluid ' + styles.footer}>
    <div
      className={'row justify-content-center ' + styles.footer__copywriteBar}
    >
      <div className="col-2">Copyright ©hair Luft all rights reserved</div>
    </div>
  </footer>
)

export default Footer
