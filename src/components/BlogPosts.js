import React from 'react'
import { compose, lifecycle, withState } from 'recompose'
import axios from 'axios'

const withBlogs = withState('blogs', 'setBlogs', [])

const extractInnerText = htmlString => htmlString.replace(/<(?:.|\n)*?>/gm, '')
const trimText = (str, maxLen = 300) =>
  str.length > maxLen ? str.slice(0, maxLen) + '...' : str

const withLifecycle = lifecycle({
  componentDidMount() {
    // TODO: replace the endpoint with a real one
    axios
      .get('https://demo.wp-api.org/wp-json/wp/v2/posts')
      .then(posts => {
        this.props.setBlogs(posts.data.slice(0, 5))
        console.log(posts)
      })
      .catch(err => {
        console.log('Failed to fetch blog data for some reason')
        console.log(err)
      })
  },
})

const BlogUpdates = ({ blogs }) => (
  <section>
    {blogs.map(blog => (
      <article key={blog.id}>
        <a href={blog.link}>
          <h1>{extractInnerText(blog.title.rendered)}</h1>
        </a>
        <span>{blog.modified}</span>
        <p>
          {trimText(extractInnerText(blog.content.rendered).slice(0, 300))}...
        </p>
      </article>
    ))}
  </section>
)

export default compose(withBlogs, withLifecycle)(BlogUpdates)
