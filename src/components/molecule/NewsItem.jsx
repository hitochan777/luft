import React from 'react'
import styled from 'styled-components'

import Link from '../atom/Link'
import Image from '../atom/Image'

const Thumbnail = styled(Image)`
  border-radius: 10px;
`

const StyledNewsItem = styled.article`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  @media screen and (min-width: ${props => props.theme.threshold}) {
    min-height: 400px;
    height: 400px;
  }
  position: relative;
  @media screen and (max-width: ${props => props.theme.threshold}) {
    margin-top: 30px;
  }
`

const Title = styled.h2`
  margin-top: 10px;
`

const Description = styled.p``

const ReadMoreButton = styled.button`
  background-color: ${props => props.theme.luftColor};
  color: white;
  border: 2px solid ${props => props.theme.luftColor};
  height: 40px;
  width: 100%;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: white;
    color: ${props => props.theme.luftColor};
  }
`

const ButtonLink = styled(Link)`
  @media screen and (min-width: ${props => props.theme.threshold}) {
    position: absolute;
    bottom: 0;
  }
  width: 100%;
`

const NewsItem = ({ blogId, imagePath, title, description, publishDate }) => (
  <StyledNewsItem>
    <Thumbnail src={imagePath} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ButtonLink to={`/blog/${blogId}`} hasUnderline={false}>
      <ReadMoreButton>もっと読む</ReadMoreButton>
    </ButtonLink>
  </StyledNewsItem>
)

export default NewsItem
