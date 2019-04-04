import React from 'react'
import { graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import { Carousel } from '../components/organism/Carousel'
import Layout from '../components/template/Layout'
import RowFull from '../components/atom/RowFull'

interface SlideNode {
  node: {
    file: {
      url: string
    }
  }
}

interface QueryResponse {
  data: {
    slides: {
      edges: SlideNode[]
    }
  }
}

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

const currentStyle = `
  @keyframes slider-animation{
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
  } 

  animation: slider-animation 10s;
`

export default ({ data: { slides } }: QueryResponse) => {
  return (
    <Layout>
      <RowFull>
        <StyledCarousel
          autoplayInterval={10 * 1000}
          currentStyle={currentStyle}
        >
          {slides.edges.map((slide: SlideNode, index) => (
            <CarouselItemImage
              key={index}
              src={slide.node.file.url}
              alt={`${index}-th image`}
            />
          ))}
        </StyledCarousel>
      </RowFull>
    </Layout>
  )
}

export const query = graphql`
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
`
