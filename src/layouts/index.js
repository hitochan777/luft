import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import theme from '../theme'
import '../assets/index.scss'
import 'animate.css/animate.min.css'

const Content = styled.div`
  margin: 0;
  padding: 0;
  @media screen and (min-width: ${props => props.theme.threshold}) {
    position: absolute;
    top: 0;
    left: ${props => props.theme.sideNavbarWidth};
    width: calc(100% - ${props => props.theme.sideNavbarWidth});
    min-width: calc(100% - ${props => props.theme.sideNavbarWidth});
    height: calc(100vh - ${props => props.theme.footerHeight});
  }
`

const Main = styled.div`
  min-height: 100vh;
  position: relative;
`

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Main>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <Content>{children()}</Content>
        <Footer />
      </Main>
    </div>
  </ThemeProvider>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
