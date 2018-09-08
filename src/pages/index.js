import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Jumbotron from '../components/Jumbotron'

const NavForSmallDevice = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -20px;
  @media screen and (min-width: ${props => props.theme.threshold}) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.luftColor};
`

const IndexPage = () => (
  <div>
    <Jumbotron />
    <NavForSmallDevice>
      <StyledLink to="/concept">Concept</StyledLink>
      <StyledLink to="/stylist">Stylists</StyledLink>
      <StyledLink to="/info">Shop Information</StyledLink>
      <StyledLink to="/menu">Menu</StyledLink>
      <StyledLink to="/news">News</StyledLink>
    </NavForSmallDevice>
  </div>
)

export default IndexPage
