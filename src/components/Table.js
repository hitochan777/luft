import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  table: {
    borderSpacing: 0,
    width: '100%',
    flex: '0 0 25%',
  },
  table__cell: {
    borderBottom: '.1rem solid black',
    padding: '1.2rem 1.5rem',
    textAlign: 'left',
  },
}

const Table = ({ classes, list }) => (
  <table className={classes.table}>
    {list.map(item => (
      <tr>
        <td className={classes.table__cell}>{item.key}</td>
        <td className={classes.table__cell}>{item.value}</td>
      </tr>
    ))}
  </table>
)

export default injectSheet(styles)(Table)
