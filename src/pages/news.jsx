import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from '@rebass/grid'

import Content from '../components/template/SubPage'
import Layout from '../components/template/Layout'
import NewsItem from '../components/molecule/NewsItem'

export default ({ data }) => {
  const blogs = data.allContentfulBlogPost.edges.map(edge => edge.node)
  return (
    <Layout>
      <Content title="News">
        <Flex flexWrap="wrap" justifyContent="space-between">
          {blogs.map(blog => (
            <Box width={[1, 4 / 9, 3 / 10]} mb="20px" key={blog.id}>
              <NewsItem
                blogId={blog.id}
                title={blog.title}
                excerpt={blog.body.childMarkdownRemark.excerpt}
                publishDate={blog.publishDate}
                imagePath={blog.thumbnail.resize.src}
              />
            </Box>
          ))}
        </Flex>
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
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          title
          thumbnail {
            resize(width: 200, height: 150) {
              src
              width
              height
              aspectRatio
            }
          }
        }
      }
    }
  }
`
