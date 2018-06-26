import React from 'react'

import styles from './Table.module.scss'

const Table = ({ list }) => (
  <table className={styles.table}>
    <tbody>
      {list.map((item, index) => (
        <tr key={index}>
          <td className={styles.table__cell}>{item.key}</td>
          <td className={styles.table__cell}>{item.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default Table
