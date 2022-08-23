require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: '豊岡市・但馬の美容院 | hair Luft【ヘアールフト】',
    description:
      '『何か今の髪型は違う』『カッコよく、キレイにしてほしい』『新しい美容院を探している』そんな方はhair Luftへ。',
    copyright: 'Copyright &copy; hair Luft. All rights reserved.',
    keywords:
      '豊岡,美容院,美容室,ヘアーサロン,豊岡駅,豊岡市,兵庫県,但馬,ヘアルフト,ヘアールフト,hair Luft,カット,カラー,パーマ,ストレート,縮毛矯正,エクステ,季節,ヘアスタイル,予約,眉カット,鼻毛',
    tel: '0796-23-2123',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `efgt630rxdsk`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-12301181-2',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'ja',
      },
    },
    'gatsby-plugin-typescript',
  ],
}
