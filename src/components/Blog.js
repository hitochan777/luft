import React from 'react'
import { graphql } from 'gatsby'

import Content from './SubPage'
import Layout from './Layout'

export default ({ data }) => {
  const blog = data.contentfulBlogPost
  return (
    <Layout>
      <Content title={blog.title}>
        <div className="col-12" style={{ textAlign: 'center' }}>
          <span>{blog.publishDate}</span>
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
      publishDate(formatString: "YYYY月MM月DD日", locale: "ja-JP")
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
