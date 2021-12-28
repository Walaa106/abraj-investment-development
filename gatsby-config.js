require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Abraj House",
    description: "Starter for Reflexjs.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [`gatsby-plugin-reflexjs`, `gatsby-theme-material-ui`],
}
