import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap'

import Logo from '../../assets/img/top_logo.png'
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

const CarouselLogoImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  width: 200px;
  @media screen and (min-width: ${props => props.theme.tablet_width}) {
    width: 300px;
  }
`

class Jumbotron extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === this.slides.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? this.slides.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    console.log(this.props)
    this.slides = Object.values(this.props.data).map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <CarouselItemImage src={item.file.url} alt={item.title} />
          <CarouselLogoImage src={Logo} />
        </CarouselItem>
      )
    })

    return (
      <RowFull>
        <StyledCarousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval={3000}
          pause={false}
          ride="carousel"
        >
          <CarouselIndicators
            items={this.slides}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {this.slides}
        </StyledCarousel>
      </RowFull>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        slide1: contentfulAsset(title: { eq: "slide1" }) {
          title
          file {
            url
          }
        }
        slide2: contentfulAsset(title: { eq: "slide2" }) {
          title
          file {
            url
          }
        }
        slide3: contentfulAsset(title: { eq: "slide3" }) {
          title
          file {
            url
          }
        }
      }
    `}
    render={data => <Jumbotron data={data} {...props} />}
  />
)
