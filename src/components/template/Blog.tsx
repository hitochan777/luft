import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Content from './SubPage'
import Layout from './Layout'

const Title = styled.h2`
  text-align: center;
`

export default ({
  data,
}: {
  data: {
    contentfulBlogPost: {
      title: string
      updatedAt: string
      body: { childMarkdownRemark: { html: string } }
    }
  }
}) => {
  const blog = data.contentfulBlogPost
  return (
    <Layout>
      <Content title={'news'}>
        <Title>{blog.title}</Title>
        <div className="col-12" style={{ textAlign: 'center' }}>
          <span>{blog.updatedAt}</span>
        </div>
        <div className="col-12">
          <div
            dangerouslySetInnerHTML={{
              __html: blog.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      updatedAt(formatString: "YYYY月MM月DD日", locale: "ja-JP")
      body {
        body
        childMarkdownRemark {
          html
        }
      }
      title
    }
  }
`
