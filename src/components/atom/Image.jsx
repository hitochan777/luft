import React from 'react'
import styled from 'styled-components'

import * as media from '../../utils/media'

const StyledImage = styled.img`
  max-width: 100vw;
  margin: 0;
  padding: 0;
  padding-bottom: 2rem;
`

const Image = ({ src, alt, ...props }) => (
  <StyledImage src={src} alt={alt} {...props} />
)

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
  width: calc(100vw - ${props => props.theme.sideNavbarWidth});
  position: relative;
  left: 50%;
  margin-left: calc(-1 * (100vw - ${props =>
    props.theme.sideNavbarWidth}) / 2 );
  ${media.max.desktop`
    width: 100vw;
    margin-left: -50vw;
  `}
`

export default Image
