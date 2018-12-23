import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from '../molecule/Navbar'
import Footer from '../atom/Footer'
import theme from '../../theme'
import '../../assets/index.scss'

const Content = styled.div`
  margin: 0px;
  @media screen and (max-width: ${props => props.theme.threshold}) {
    margin: 0 10px;
  }
  padding: 0;
  min-height: calc(100vh - ${props => props.theme.footerHeight});
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
          <Content>{children}</Content>
          <Footer />
        </>
      </ThemeProvider>
    )}
  />
)

export default Layout
