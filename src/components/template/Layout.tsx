import React, { ReactNode } from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Script } from "gatsby"

import Navbar from '../molecule/Navbar'
import theme from '../../theme'
import '../../assets/index.scss'

import favicon16 from '../../assets/favicon16x16.ico'
import favicon32 from '../../assets/favicon32x32.ico'
import favicon48 from '../../assets/favicon48x48.ico'

const Content = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
`

const Layout = ({ children }: { children: ReactNode }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
            copyright
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
              {
                name: 'description',
                content: data.site.siteMetadata.description,
              },
              {
                name: 'keywords',
                content: data.site.siteMetadata.keywords,
              },
              {
                name: 'robots',
                content: 'index,follow',
              },
              {
                name: 'copyright',
                content: data.site.siteMetadata.copyright,
              },
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
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`} /> 
          <Script id="gtag-config"forward={[`gtag`]}>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GTAG}');
          `}
          </Script>
          <Navbar tel={data.site.siteMetadata.tel} />
          <Content>{children}</Content>
        </>
      </ThemeProvider>
    )}
  />
)

export default Layout
