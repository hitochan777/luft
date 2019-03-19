import React, { ReactNode, useState, useEffect } from 'react'
import styled from 'styled-components'

interface ItemWrapperProps {
  children: ReactNode
}

const ItemWrapper = ({ children, ...props }: ItemWrapperProps) => (
  <ul {...props}>{children}</ul>
)

const StyledItemWrapper = styled(ItemWrapper)`
  list-style-type: none;
  position: relative;
  margin: 0;
  padding: 0;
`

interface CarouselItemProps {
  children: ReactNode
  isCurrent: boolean
  fadeInterval?: number
}

const CarouselItem = ({
  children,
  isCurrent,
  fadeInterval = 3000,
  ...props
}: CarouselItemProps) => {
  return (
    <li aria-hidden={!isCurrent} className="slide" {...props}>
      {children}
    </li>
  )
}

const StyledCarouselItem = styled(CarouselItem)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;

  &[aria-hidden='true'] {
    opacity: 0;
    z-index: -1;
  }
`

interface CarouselProps {
  autoplay?: boolean
  autoplayInterval?: number
  fadeInterval?: number
  children: ReactNode[]
}

export const Carousel = ({
  autoplayInterval = 3000,
  fadeInterval,
  children,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % children.length)
    }, autoplayInterval)
    return () => clearTimeout(timeout)
  })

  if (!fadeInterval) {
    fadeInterval = autoplayInterval
  }

  return (
    <StyledItemWrapper>
      {children.map((child, index) => (
        <StyledCarouselItem
          key={index}
          isCurrent={index === currentIndex}
          fadeInterval={fadeInterval}
        >
          {child}
        </StyledCarouselItem>
      ))}
    </StyledItemWrapper>
  )
}
