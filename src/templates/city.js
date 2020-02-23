import React from "react"
import Layout from "../components/layout/Layout"
import Head from "../components/layout/Head"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($city: String!) {
    allContentfulBlogPost(filter: { city: { eq: $city } }) {
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
`

const City = props => {
  return (
    <Layout>
      <Head title="Skyline" />
      <div className="container mt-50">
        <div className="row">
          <div className="col m12">
            {props.data.allContentfulBlogPost.edges.map((edge, i) => {
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

export default City
