module.exports = {
  plugins: [
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/projects.json`,
      },
    },
    `gatsby-transformer-json`,
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
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        variables: true,
        ignore: ['/custom.css'],
        whitelist: ['gatsby-image-wrapper']
      }
    },
  ],
  siteMetadata: {
    title: `Edward Portfolio`,
    description: `Edward's programming portfolio built with Gatsby.`,
    author: `Edward Perez`,
  },
}
