import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { compose, lifecycle, withState } from 'recompose'
import axios from 'axios'

const withBlog = withState('blog', 'setBlog', {
  title: '',
  content: '',
  date: '',
  link: '',
})

const withPostId = withState('postId', 'setPostId', 1)

const withLifecycle = lifecycle({
  componentDidMount() {
    // TODO: replace the endpoint with a real one
    axios
      .get(`https://demo.wp-api.org/wp-json/wp/v2/posts/${this.props.postId}`)
      .then(post => {
        const { data } = post
        this.props.setBlog({
          title: data.title.rendered,
          content: data.content.rendered,
          date: data.modified,
          link: data.link,
        })
      })
      .catch(err => {
        console.log('Failed to fetch blog data for some reason')
        console.log(err)
      })
  },
})

const getDateString = timestamp => {
  const date = new Date(timestamp)
  return `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`
}

const Blog = ({ blog }) => (
  <div className="container-fluid">
    <article className="row justify-content-center">
      <div className="col-12 col-lg-6">
        <div className="col-12">
          <h1 href={blog.link}>{blog.title}</h1>
        </div>
        <div className="col-12">
          <span>{getDateString(blog.date)}</span>
        </div>
        <div className="col-12">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </article>
  </div>
)

export default compose(withBlog, withPostId, withLifecycle)(Blog)
