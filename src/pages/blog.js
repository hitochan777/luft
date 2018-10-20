import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import BlogPosts from '../components/BlogPosts'
import Blog from '../components/Blog'
import Layout from '../components/Layout'

const withRouter = (BlogComponent, BlogListComponent) => ({ location }) => (
  <Layout>
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6">
          <Route
            location={location}
            key={location.key}
            path="/blog/:postId"
            component={({ match: { params } }) => (
              <BlogComponent postId={params.postId} />
            )}
          />
          <Route
            location={location}
            key={location.key}
            exact
            path="/blog"
            component={({ match: { params } }) => <BlogListComponent />}
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default withRouter(Blog, BlogPosts)
