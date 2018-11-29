import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Content from '../components/SubPage'
import Layout from '../components/Layout'

export default ({ data }) => {
  const blogs = data.allContentfulBlogPost.edges.map(edge => edge.node)
  return (
    <Layout>
      <Content title="News">
        {blogs.map(blog => (
          <article key={blog.id}>
            <h2>
              <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
            </h2>
            {blog.publishDate} <br />
            {blog.description.description}
          </article>
        ))}
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          publishDate(formatString: "YYYY月MM月DD日", locale: "ja-JP")
          description {
            description
          }
          title
        }
      }
    }
  }
`
