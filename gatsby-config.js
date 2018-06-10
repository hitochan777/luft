module.exports = {
  siteMetadata: {
    title: 'Luft',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      },
    },
  ],
}
