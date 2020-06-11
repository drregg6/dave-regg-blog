/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Dave Regg\'s Blog',
    author: 'Dave Regg',
    description: 'A personal blog created, designed, and coded by Dave Regg. The blog is about technology and Dave Regg\'s experience teaching himself how to program.',
    url: 'http://www.daveregg.com',
    twitterUsername: '@DaveRegg',
    keywords: ['developer', 'programmer', 'javascript', 'programming', 'software', 'engineer', 'frontend', 'backend', 'fullstack', 'gatsbyjs', 'nextjs', 'reactjs', 'expressjs', 'mongodb', 'nodejs', 'blog', 'life']
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_API,
        forceFullSync: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicons/favicon.ico`
      }
    }
  ],
}