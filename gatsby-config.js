require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
//FIXME: preprocess image https://www.gatsbyjs.org/docs/preprocessing-external-images/

module.exports = {
  siteMetadata: {
    title: "Insido",
    description: "Analytics",
    author: "Muzamir",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "django",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "Django",
        // Url or Django Graphene Endpoint
        url: `${process.env.GRAPHQL_ENDPOINT}`,
      },
    },

    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        // background_color: "grey",
        // theme_color: "#663399",
        display: "minimal-ui",

        icon: "src/images/Apple.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}
