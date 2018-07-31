import classNames from 'classnames'

import styles from './ShadowedThumbnail.module.scss'

const ShadowedThumbnail = ({ src, position }) => (
  <div>
    <img
      src={src}
      className={classNames(styles.thumbnail, styles.thumbnail__front)}
    />
    <img
      src={src}
      className={classNames(styles.thumbnail, styles.thumbnail__back)}
    />
  </div>
)

export default ShadowedThumbnail
