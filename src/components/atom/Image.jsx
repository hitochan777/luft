import React from 'react'
import styled from 'styled-components'

import * as media from '../../utils/media'

const Image = ({ src, alt, ...props }) => <img src={src} alt={alt} {...props} />

export const CoverImage = styled(Image)`
  @keyframes cover-image {
    from {
      opacity: 0;
      transform: scale(1.05);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  animation-name: cover-image;
  animation-duration: 5s;
  object-fit: cover;
  height: 400px;
  ${media.max.tablet`
    height: 300px;
  `}
  ${media.max.phone`
    height: 200px;
  `}
  width: 100%;
`

export default Image
