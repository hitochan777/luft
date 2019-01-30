import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from '../molecule/Navbar'
import theme from '../../theme'
import '../../assets/index.scss'
import * as media from '../../utils/media'

const Content = styled.div`
  margin: 0px;
  ${media.max.tablet`
    margin: 0 10px;
  `}
  padding: 0;
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            tel
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
          <Navbar
            siteTitle={data.site.siteMetadata.title}
            tel={data.site.siteMetadata.tel}
          />
          <Content>{children}</Content>
        </>
      </ThemeProvider>
    )}
  />
)

export default Layout
