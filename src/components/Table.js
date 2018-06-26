import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  table: {
    borderSpacing: 0,
    width: '100%',
  },
  table__cell: {
    borderBottom: '.1rem solid black',
    padding: '1.5rem',
    textAlign: 'left',
  },
}

const Table = ({ classes, list }) => (
  <table className={classes.table}>
    <tbody>
      {list.map((item, index) => (
        <tr key={index}>
          <td className={classes.table__cell}>{item.key}</td>
          <td className={classes.table__cell}>{item.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default injectSheet(styles)(Table)
