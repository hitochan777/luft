import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Jumbotron from '../components/Jumbotron'

const NavForSmallDevice = styled.div`
  @media screen and (min-width: ${props => props.theme.threshold}) {
    display: none;
  }
`

const IndexPage = () => (
  <div>
    <Jumbotron />
    <NavForSmallDevice>
      <Link to="/concept">Concept</Link>
      <Link to="/stylist">Stylists</Link>
      <Link to="/info">Shop Information</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/news">News</Link>
    </NavForSmallDevice>
  </div>
)

export default IndexPage
