const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const post_template = path.resolve("./src/templates/post.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
          next {
            title
            slug
          }
          previous {
            title
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach((edge, index) => {
    const previous = edge.previous ? edge.previous : null
    const next = edge.next ? edge.next : null

    createPage({
      component: post_template,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        previous,
        next,
      },
    })
  })
}

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const city_template = path.resolve("./src/templates/city.js")
//   const res = await graphql(`
//     query {
//       allContentfulBlogPost(sort: { fields: city, order: ASC }) {
//         distinct(field: city)
//       }
//     }
//   `)

//   res.data.allContentfulBlogPost.distinct.forEach((city, index) => {
//     createPage({
//       component: city_template,
//       path: `/${city.toLowerCase().replace(/ /g, "-")}`,
//       context: {
//         city
//       },
//     })
//   })
// }
