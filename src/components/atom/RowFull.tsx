import styled from 'styled-components'

import * as media from '../../utils/media'

export default styled.div`
  ${media.max.tablet`
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;
  `}
`
