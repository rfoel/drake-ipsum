module.exports = {
  siteMetadata: {
    title: `Drake Ipsum`,
    description: `Generate Drake lyrics placeholder text`,
    author: `@rfoel`,
  },
  plugins: [
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `drake-ipsum`,
        short_name: `drake`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Playfair+Display:wght@400;900`],
        display: "swap",
      },
    },
  ],
}
