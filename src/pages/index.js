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
      <div className="container">
        <div className="row">
          <div className="col m12">
            <h1>Skyline</h1>
            <ul>
              {data.allContentfulBlogPost.edges.map(edge => {
                return (
                  <li>
                    <Link to={`/${edge.node.slug}`}>
                      <div className="blog-index-title">{edge.node.title}</div>
                    </Link>
                    <p>{edge.node.created_at}</p>
                    <Link to={`/${edge.node.slug}`}>
                      <img
                        src={edge.node.thumbnail.resize.src}
                        alt={edge.node.thumbnail.title}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
