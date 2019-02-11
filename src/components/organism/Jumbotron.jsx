import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'

import RowFull from '../atom/RowFull'
import * as media from '../../utils/media'

const StyledCarousel = styled(Carousel)`
  position: relative;
`

const CarouselItemImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  display: block;
  margin: 0;
`

const CarouselLogoImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  width: 200px;
  ${media.min.tablet`
    width: 300px;
  `}
`

const Jumbotron = ({ urls, logo }) => {
  return (
    <StyledCarousel
      autoplay
      swipe
      speed={5000}
      transitionMode="fade"
      pauseOnHover={false}
      autoplayInterval={5000}
      wrapAround
      withoutControls
    >
      {urls.map(url => (
        <div key={url}>
          <CarouselItemImage src={url} />
          <CarouselLogoImage src={logo} />
        </div>
      ))}
    </StyledCarousel>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        slides: allContentfulAsset(
          sort: { fields: title }
          filter: { title: { in: ["slide1", "slide2", "slide3"] } }
        ) {
          edges {
            node {
              file {
                url
              }
            }
          }
        }
        logo: contentfulAsset(title: { eq: "top logo" }) {
          title
          file {
            url
          }
        }
      }
    `}
    render={({ slides, logo }) => (
      <RowFull>
        <Jumbotron
          urls={slides.edges.map(slide => slide.node.file.url)}
          logo={logo.file.url}
          {...props}
        />
      </RowFull>
    )}
  />
)
