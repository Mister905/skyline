import React from "react"
import Layout from "../components/layout/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/layout/head"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: created_at, order: DESC }) {
        edges {
          node {
            title
            slug
            created_at(formatString: "MMMM Do YYYY")
            thumbnail {
              resize(width: 500, height: 500) {
                src
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Skyline" />
      <h1>Skyline</h1>
      <ol>
        {data.allContentfulBlogPost.edges.map(edge => {
          console.log(edge)
          return (
            <li>
              <Link to={`/${edge.node.slug}`}>
                <img
                  src={edge.node.thumbnail.resize.src}
                  alt={edge.node.thumbnail.title}
                />
                <h2>{edge.node.title}</h2>
                <p>{edge.node.createdAt}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default IndexPage
