const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Edward Portfolio`,
    description: `Edward's programming portfolio built with Gatsby.`,
    author: `Edward Perez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `edward-portfolio`,
        short_name: `edward`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/data/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
          options: {
            props: {
              className: 'svg',
            },
          },
        }
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@common": path.resolve(__dirname, "src/components/common"),
          "@utility": path.resolve(__dirname, "src/components/utility"),
          "@section": path.resolve(__dirname, "src/components/section"),
          "@styles": path.resolve(__dirname, "src/styles"),
          "@images": path.resolve(__dirname, "src/data/images"),
        },
        extensions: [
          "js",
        ],
      }
    }
  ],
}
