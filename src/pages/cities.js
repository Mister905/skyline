import React from "react"
import Layout from "../components/layout/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/layout/head"

const CitiesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: city, order: ASC }) {
        distinct(field: city)
        edges {
          node {
            city
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Cities" />
      <div className="container mt-50">
        <div className="row">
          <div className="col m12">
            Cities
            {data.allContentfulBlogPost.edges.map((edge, i) => {
              return (
                <div className="row" key={i}>
                  <div className="col m10 offset-m2 card city-card">{edge.node.city}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CitiesPage
