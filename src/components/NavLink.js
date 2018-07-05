import React from 'react'
import GatsbyLink from 'gatsby-link'
import classNames from 'classnames'

import styles from './NavLink.module.scss'

const Link = ({ className, ...props }) => (
  <GatsbyLink className={classNames(styles.link, className)} {...props} />
)

export default Link
