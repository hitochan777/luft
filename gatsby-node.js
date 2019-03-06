/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allContentfulBlogPost(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    throw result.errors
  }

  // Create Blog pages
  const productTemplate = path.resolve(`./src/components/template/Blog.tsx`)
  // We want to create a detailed page for each
  // product node. We'll just use the Contentful id for the slug.
  for (let edge of result.data.allContentfulBlogPost.edges) {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/blog/${edge.node.id}/`,
      component: slash(productTemplate),
      context: {
        id: edge.node.id,
      },
    })
  }
}
