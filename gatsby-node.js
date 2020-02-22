const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  
  const { createPage } = actions

  const blog_template = path.resolve("./src/templates/blog.js")
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

  const posts = res.data.allContentfulBlogPost.edges

  res.data.allContentfulBlogPost.edges.forEach((edge, index) => {
    const previous = edge.previous ? edge.previous : null
    const next = edge.next ? edge.next : null

    createPage({
      component: blog_template,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        previous,
        next,
      },
    })
  });



// *********************************************

  // const city_template = path.resolve("./src/templates/city.js")
  // const res = await graphql(`
  //   query {
  //     allContentfulBlogPost {
  //       edges {
  //         node {
  //           slug
  //         }
  //         next {
  //           title
  //           slug
  //         }
  //         previous {
  //           title
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `)

  // const posts = res.data.allContentfulBlogPost.edges

  // res.data.allContentfulBlogPost.edges.forEach((edge, index) => {
  //   const previous = edge.previous ? edge.previous : null
  //   const next = edge.next ? edge.next : null

  //   createPage({
  //     component: blog_template,
  //     path: `/${edge.node.slug}`,
  //     context: {
  //       slug: edge.node.slug,
  //       previous,
  //       next,
  //     },
  //   })
  // });

}
