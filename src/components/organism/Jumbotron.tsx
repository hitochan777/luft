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

const Jumbotron = ({ urls }: { urls: string[] }) => {
  return (
    <StyledCarousel
      autoplay
      swiping
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

export default (props: any) => (
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
      }
    `}
    render={({ slides }) => (
      <RowFull>
        <Jumbotron
          urls={slides.edges.map(
            (slide: { node: { file: { url: string } } }) => slide.node.file.url
          )}
          {...props}
        />
      </RowFull>
    )}
  />
)
