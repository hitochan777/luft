import React, { ReactNode } from 'react'
import styled from 'styled-components'

import * as media from '../../utils/media'

const Title = styled.h1`
  margin: 0 auto 30px;
  padding-top: 35px;
  ${media.min.desktop`
    padding-top: 80px;
  `}
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  width: 30%;
  ${media.max.desktop`
    width: 100%;
  `}
`

const SubContent = styled.div`
  ${media.min.desktop`
    margin-left: calc(
      ${props => props.theme.sideNavbarWidth} +
        (100vw - ${props => props.theme.sideNavbarWidth}) * (1 - 0.8) / 2
    );
    width: calc((100vw - ${props => props.theme.sideNavbarWidth}) * 0.8);
  `}
  ${media.max.desktop`
    padding: 0 10px;
  `}
`

const Content = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => (
  <>
    <SubContent>
      <Title>{title}</Title>
      {children}
    </SubContent>
  </>
)

export default Content
