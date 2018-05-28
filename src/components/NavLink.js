import React from 'react'
import GatsbyLink from 'gatsby-link'
import injectSheet from 'react-jss'

const styles = {
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      borderBottom: '2px solid black',
    },
    '&:focus, &:visited, &:link, &:active': {
      textDecoration: 'none',
    },
  },
}

const Link = ({ classes, ...props }) => (
  <GatsbyLink className={classes.link} {...props} />
)

export default injectSheet(styles)(Link)
