import React from 'react'
import { compose, lifecycle, withState } from 'recompose'
import axios from 'axios'
import Link from 'gatsby-link'

const withBlogs = withState('blogs', 'setBlogs', [])

const extractInnerText = htmlString => htmlString.replace(/<(?:.|\n)*?>/gm, '')

const withLifecycle = lifecycle({
  componentDidMount() {
    // TODO: replace the endpoint with a real one
    axios
      .get('https://demo.wp-api.org/wp-json/wp/v2/posts')
      .then(posts => {
        this.props.setBlogs(posts.data.slice(0, 5))
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

const BlogPosts = ({ blogs }) => (
  <table>
    <tbody>
      {blogs.map(blog => (
        <tr key={blog.id}>
          <td>
            <span>{getDateString(blog.modified)}</span>
          </td>
          <td>
            <Link to={`/blog/${blog.id}`}>
              <span style={{ color: 'orange' }}>★</span>
              {extractInnerText(blog.title.rendered)}
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default compose(withBlogs, withLifecycle)(BlogPosts)
