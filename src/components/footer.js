import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  height: ${props => props.theme.footerHeight};
  background-color: lightgrey;
  color: ${props => props.theme.luftColor};
  line-height: ${props => props.theme.footerHeight};
  vertical-align: middle;
  width: 100vw;
  text-align: center;
`

const Footer = () => (
  <StyledFooter>Copyright ©hair Luft all rights reserved</StyledFooter>
)

export default Footer
