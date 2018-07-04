import React from 'react'
import classNames from 'classnames'

import styles from './NavbarToggleButton.module.scss'

const NavbarToggleButton = ({ isCollapsed, onClick }) => (
  <button className={styles.toggleButton} onClick={onClick}>
    <span
      className={classNames(styles.toggleButton__iconBar, {
        [styles.toggleButton__iconBar___toggled]: !isCollapsed,
        [styles.toggleButton__iconBar___collapsed]: isCollapsed,
      })}
    />
    <span
      className={classNames(styles.toggleButton__iconBar, {
        [styles.toggleButton__iconBar___toggled]: !isCollapsed,
        [styles.toggleButton__iconBar___collapsed]: isCollapsed,
      })}
    />
    <span
      className={classNames(styles.toggleButton__iconBar, {
        [styles.toggleButton__iconBar___toggled]: !isCollapsed,
        [styles.toggleButton__iconBar___collapsed]: isCollapsed,
      })}
    />
  </button>
)

export default NavbarToggleButton
