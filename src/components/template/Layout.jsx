import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from '../molecule/Navbar'
import theme from '../../theme'
import '../../assets/index.scss'
import * as media from '../../utils/media'

import favicon16 from '../../assets/favicon16x16.ico'
import favicon32 from '../../assets/favicon32x32.ico'
import favicon48 from '../../assets/favicon48x48.ico'

const Content = styled.div`
  margin: 0px;
  ${media.max.desktop`
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
            link={[
              {
                rel: 'icon',
                type: 'image/x-icon',
                href: favicon16,
                sizes: '16x16',
              },
              {
                rel: 'icon',
                type: 'image/x-icon',
                href: favicon32,
                sizes: '32x32',
              },
              {
                rel: 'icon',
                type: 'image/x-icon',
                href: favicon48,
                sizes: '48x48',
              },
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
