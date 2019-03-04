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
              { name: 'description', content: '豊岡にあるヘアサロン' },
              {
                name: 'keywords',
                content:
                  'hair luft,ルフト,ヘアサロン,ヘア,サロン,理容室,豊岡,とよおか,兵庫',
              },
              {
                name: 'robots',
                content: 'index,follow',
              },
              {
                name: 'copyright',
                content: 'Copyright &copy; hair Luft. All rights reserved.',
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
