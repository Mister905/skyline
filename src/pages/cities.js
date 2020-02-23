import React from "react"
import Layout from "../components/layout/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/layout/Head"

const htmlDecode = input => {
  var e = document.createElement("div")
  e.innerHTML = input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue
}

const Cities = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: city, order: ASC }) {
        distinct(field: city)
      }
    }
  `)

  const second_half = data.allContentfulBlogPost.distinct.map(city => city)

  var first_half = second_half.splice(0, Math.ceil(second_half.length / 2))

  return (
    <Layout>
      <Head title="Cities" />
      <div className="container mt-50">
        <div className="row">
          <div className="col m12">
            <div className="row">
              <div className="col m12 center-align">
                <div className="cities-heading">Cities</div>
              </div>
            </div>
            <div className="row">
              <div className="col m4 offset-m2">
                <div className="collection">
                  {first_half.map((city, i) => {
                    return (
                      <Link
                        to={city.toLowerCase().replace(/ /g, "-")}
                        className="collection-item center-align"
                        key={i}
                      >
                        {city}
                      </Link>
                    )
                  })}
                </div>
              </div>
              <div className="col m4">
                <div className="collection">
                  {second_half.map((city, i) => {
                    return (
                      <Link
                        to={city.toLowerCase().replace(/ /g, "-")}
                        className="collection-item center-align"
                        key={i}
                      >
                        {city}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cities
