import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'
import classNames from 'classnames'

import styles from './footer.module.scss'

const Footer = () => (
  <footer className={classNames('container-fluid', styles.footer)}>
    <div
      className={classNames(
        'row',
        'justify-content-center',
        styles.footer__copywriteBar
      )}
    >
      <div className={classNames('col-12', 'text-center', styles.footer__text)}>
        Copyright ©hair Luft all rights reserved
      </div>
    </div>
  </footer>
)

export default Footer
