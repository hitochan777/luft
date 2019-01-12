import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  margin: 0 auto 30px;
  padding-top: 80px;
  text-align: center;
  text-decoration: underline;
  @media screen and (min-width: ${props => props.theme.tablet_width}) {
    width: 30%;
  }
  text-transform: uppercase;
`

const SubContent = styled.div`
  @media screen and (min-width: ${props => props.theme.tablet_width}) {
    margin-left: calc(
      ${props => props.theme.sideNavbarWidth} +
        (100vw - ${props => props.theme.sideNavbarWidth}) * (1 - 0.8) / 2
    );
    width: calc((100vw - ${props => props.theme.sideNavbarWidth}) * 0.8);
  }
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
