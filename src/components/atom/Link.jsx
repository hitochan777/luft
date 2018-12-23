import React from 'react'
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'
import { genericHashLink } from 'react-router-hash-link'

const Link = props => genericHashLink(props, GatsbyLink)

const BaseLink = styled(Link)`
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

export default ({ hasUnderline, ...props }) => {
  hasUnderline = hasUnderline === undefined ? true : hasUnderline
  if (hasUnderline) {
    return <UnderlineLink smooth {...props} /> // FIXME: smooth is not working
  }
  return <BaseLink smooth {...props} /> // FIXME: smooth is not working
}
