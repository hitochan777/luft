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
  width: 100%;
  text-align: center;
  @media screen and (max-width: ${props => props.theme.threshold}) {
    font-size: 10px;
  }
`

const Footer = () => (
  <StyledFooter>Copyright ©hair Luft all rights reserved</StyledFooter>
)

export default Footer
