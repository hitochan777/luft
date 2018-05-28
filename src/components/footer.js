import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  footer: {
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
  },
}

const Footer = ({ classes }) => (
  <footer className={classes.footer}>©Luft</footer>
)

export default injectSheet(styles)(Footer)
