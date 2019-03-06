import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'

import RowFull from '../atom/RowFull'

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
      {urls.map((url, index) => (
        <div key={url}>
          <CarouselItemImage src={url} alt={`${index}-th slide`} />
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
