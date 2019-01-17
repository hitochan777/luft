import React from 'react'
import styled from 'styled-components'

import * as media from '../../utils/media'

const Title = styled.h1`
  margin: 0 auto 30px;
  padding-top: 80px;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  width: 30%;
  ${media.max.tablet`
    width: 100%;
  `}
`

const SubContent = styled.div`
  margin-left: calc(
    ${props => props.theme.sideNavbarWidth} +
      (100vw - ${props => props.theme.sideNavbarWidth}) * (1 - 0.8) / 2
  );
  width: calc((100vw - ${props => props.theme.sideNavbarWidth}) * 0.8);
  ${media.max.tablet`
    width: 100%;
  `}
`

const Content = ({ id, title, children, className }) => (
  <>
    <SubContent id={id}>
      <Title>{title}</Title>
      {children}
    </SubContent>
  </>
)

export default Content
