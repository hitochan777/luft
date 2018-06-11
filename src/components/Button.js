import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  button: {
    backgroundColor: 'white',
    color: 'black',
    textDecoration: 'none',
    textAlign: 'center',
    border: 'none',
    width: '100%',
    transition: '0.8s',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
}

const Button = ({ classes, children }) => (
  <button className={classes.button}>{children}</button>
)

export default injectSheet(styles)(Button)
