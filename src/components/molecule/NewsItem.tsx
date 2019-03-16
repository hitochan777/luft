import React from 'react'
import styled from 'styled-components'

import Link from '../atom/Link'
import Image from '../atom/Image'
import * as media from '../../utils/media'

const Thumbnail = styled(Image)`
  border-radius: 10px;
  height: 10rem;
`

const StyledNewsItem = styled.article`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  ${media.min.tablet`
    min-height: 30rem;
    height: 30rem;
  `}
  position: relative;
  ${media.max.tablet`
    margin-top: 30px;
  `}
`

const Title = styled.h2`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

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
  ${media.min.tablet`
    position: absolute;
    bottom: 30px;
  `}
  width: 100%;
`

const PublishDate = styled.span`
  text-align: center;
  margin-bottom: 0.5rem;
`

interface Props {
  blogId: string
  imagePath: string
  title: string
  excerpt: string
  publishDate: string
}

const NewsItem = ({
  blogId,
  imagePath,
  title,
  excerpt,
  publishDate,
}: Props) => (
  <StyledNewsItem>
    <Title>{title}</Title>
    <PublishDate>{publishDate}</PublishDate>
    <Thumbnail src={imagePath} alt={title} />
    <p>{excerpt}</p>
    <ButtonLink to={`/blog/${blogId}`} hasUnderline={false}>
      <ReadMoreButton>もっと読む</ReadMoreButton>
    </ButtonLink>
  </StyledNewsItem>
)

export default NewsItem
