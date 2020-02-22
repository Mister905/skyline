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
            description
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
      <div className="container mt-50">
        <div className="row">
          <div className="col m12">
            {data.allContentfulBlogPost.edges.map((edge, i) => {
              return (
                <div className="row" key={i}>
                  <div className="col m10 offset-m2 card">
                    <div className="row">
                      <div className="col m3">
                        <Link to={`/${edge.node.slug}`}>
                          <img
                            src={edge.node.thumbnail.resize.src}
                            className="responsive-img"
                            alt={edge.node.thumbnail.title}
                          />
                        </Link>
                      </div>
                      <div className="col m6">
                        <Link to={`/${edge.node.slug}`}>
                          <div className="blog-index-title">
                            {edge.node.title}
                          </div>
                        </Link>
                        <div className="blog-index-created">
                          {edge.node.created_at}
                        </div>
                        <div className="blog-index-description">
                          {edge.node.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
