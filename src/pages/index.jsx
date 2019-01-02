import React from 'react'
import styled from 'styled-components'

import Jumbotron from '../components/organism/Jumbotron'
import Layout from '../components/template/Layout'
import BaseLink from '../components/atom/Link'

const NavForSmallDevice = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: ${props => props.theme.tablet_width}) {
    display: none;
  }
`

const Link = styled(BaseLink)`
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <NavForSmallDevice>
      <Link to="/concept">Concept</Link>
      <Link to="/info">Stylists</Link>
      <Link to="/info">Access</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/news">News</Link>
    </NavForSmallDevice>
  </Layout>
)

export default IndexPage
