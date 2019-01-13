import React from 'react'
import styled from 'styled-components'
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap'

import SlideImage1 from '../../assets/img/slide1.jpg'
import SlideImage2 from '../../assets/img/slide2.jpg'
import SlideImage3 from '../../assets/img/slide3.jpg'
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
const items = [
  {
    src: SlideImage1,
    altText: 'Luft 1',
  },
  {
    src: SlideImage2,
    altText: 'Luft 2',
  },
  {
    src: SlideImage3,
    altText: 'Luft 3',
  },
]

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
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <CarouselItemImage src={item.src} alt={item.altText} />
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
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
        </StyledCarousel>
      </RowFull>
    )
  }
}

export default Jumbotron
