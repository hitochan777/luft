import React from 'react'
import GatsbyLink from 'gatsby-link'

import styles from './NavLink.module.scss'

const Link = ({ ...props }) => <GatsbyLink className={styles.link} {...props} />

export default Link
