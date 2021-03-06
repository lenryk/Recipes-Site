/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Da Best Recipes",
    description: "The best recipes 2021",
    author: "@samcarr",
    person: { name: "sam", age: 32 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "sam", age: 32 },
      { name: "susan", age: 21 },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
