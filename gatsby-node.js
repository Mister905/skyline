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
        }
      }
    }
  `)

  const posts = res.data.allContentfulBlogPost.edges

  res.data.allContentfulBlogPost.edges.forEach((edge, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      component: blog_template,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        previous,
        next,
      },
    })
  })

  // Create blog posts pages.
  //   const posts = res.data.allContentfulBlogPost.edges;

  //   posts.forEach((post, index) => {
  //     const previous = index === posts.length - 1 ? null : posts[index + 1].node
  //     const next = index === 0 ? null : posts[index - 1].node

  //     createPage({
  //       path: post.node.fields.slug,
  //       component: blog_template,
  //       context: {
  //         slug: post.node.fields.slug,
  //         previous,
  //         next,
  //       },
  //     })
  //   })
}
