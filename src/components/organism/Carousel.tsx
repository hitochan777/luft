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
  currentStyle?: string
  isCurrent: boolean
}

const CarouselItem = ({
  children,
  isCurrent,
  currentStyle,
  ...props
}: CarouselItemProps) => {
  const List = styled.li`
    ${isCurrent ? currentStyle : ''}
  `
  return (
    <List aria-hidden={!isCurrent} {...props}>
      {children}
    </List>
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
  autoplayInterval?: number
  children: ReactNode[]
  currentStyle?: string
}

export const Carousel = ({
  autoplayInterval = 3000,
  currentStyle = '',
  children,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % children.length)
      console.log('change')
    }, autoplayInterval)
    return () => clearTimeout(timeout)
  })

  return (
    <StyledItemWrapper>
      {children.map((child, index) => (
        <StyledCarouselItem
          key={index}
          isCurrent={index === currentIndex}
          currentStyle={currentStyle}
        >
          {child}
        </StyledCarouselItem>
      ))}
    </StyledItemWrapper>
  )
}
