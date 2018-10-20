import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from './Navbar'
import Footer from './Footer'
import theme from '../theme'
import '../assets/index.scss'
import 'animate.css/animate.min.css'

const Content = styled.div`
  margin: 0;
  padding: 0;
`

const Main = styled.div`
  min-height: calc(100vh - ${props => props.theme.footerHeight});
  position: relative;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Navbar siteTitle={data.site.siteMetadata.title} />
          <Main>
            <Content>{children}</Content>
          </Main>
          <Footer />
        </>
      </ThemeProvider>
    )}
  />
)

export default Layout
