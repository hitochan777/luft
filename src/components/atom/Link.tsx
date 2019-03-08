import React, { ReactNode } from 'react'
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'

const BaseLink = styled(GatsbyLink)`
  text-decoration: none;
  color: ${props => props.theme.luftColor};
  position: relative;

  &:hover {
    color: ${props => props.theme.luftColor};
    text-decoration: none;
    &::after {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`

const UnderlineLink = styled(BaseLink)`
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.luftColor};
    visibility: hidden;
    transform: scaleX(0);
    transform-origin: left center 0;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    background-color: ${props => props.theme.luftColor};
  }
`

export default ({
  hasUnderline,
  to,
  children,
  ...props
}: {
  hasUnderline: boolean
  to: string
  children: ReactNode
}) => {
  if (hasUnderline) {
    return (
      <UnderlineLink to={to} {...props}>
        {children}
      </UnderlineLink>
    )
  }
  return (
    <BaseLink to={to} {...props}>
      {children}
    </BaseLink>
  )
}
