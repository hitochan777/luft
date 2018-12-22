import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from '@rebass/grid'

import Content from '../components/SubPage'
import Layout from '../components/Layout'
import NewsItem from '../components/molecule/NewsItem'

export default ({ data }) => {
  const blogs = data.allContentfulBlogPost.edges.map(edge => edge.node)
  return (
    <Layout>
      <Content title="News">
        <Flex flexWrap="wrap" justifyContent="space-evenly">
          {blogs.map(blog => (
            <Box width={[1, 3 / 10]}>
              <NewsItem
                key={blog.id}
                blogId={blog.id}
                title={blog.title}
                description={blog.description.description}
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
          description {
            description
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
