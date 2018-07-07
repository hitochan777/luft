import React from 'react'
import classNames from 'classnames'

import styles from './NavbarToggleButton.module.scss'

const IconBar = ({ isOpened }) => (
  <span
    className={classNames(styles.toggleButton__iconBar, {
      [styles.toggleButton__iconBar_opened]: isOpened,
      [styles.toggleButton__iconBar_closed]: !isOpened,
    })}
  />
)

const NavbarToggleButton = ({ isCollapsed, onClick }) => (
  <button className={styles.toggleButton} onClick={onClick}>
    <IconBar isOpened={!isCollapsed} />
    <IconBar isOpened={!isCollapsed} />
    <IconBar isOpened={!isCollapsed} />
  </button>
)

export default NavbarToggleButton
