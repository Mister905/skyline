import React from "react"
import Layout from "../components/layout/layout"
import Head from "../components/layout/head"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      created_at(formatString: "MMMM Do, YYYY")
      content {
        json
      }
    }
  }
`

const Blog = props => {
  const { pageContext } = props

  const { previous, next } = pageContext

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className="responsive-img" />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <div className="container mt-50">
        <div className="row">
          <div className="col m12">
            <div className="row">
              <div className="col m12">
                <div className="post-heading">
                  {props.data.contentfulBlogPost.title}
                </div>
                <div className="blog-index-created fw-600">
                  {props.data.contentfulBlogPost.created_at}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                {documentToReactComponents(
                  props.data.contentfulBlogPost.content.json,
                  options
                )}
              </div>
            </div>

            <div className="row">
              <div className="col m6">
                {previous && (
                  <Link
                    to={previous.slug}
                    className="left fw-600 post-nav-link"
                    rel="prev"
                  >
                    ← Previous
                  </Link>
                )}
              </div>
              <div className="col m6">
                {next && (
                  <Link
                    to={next.slug}
                    className="right fw-600 post-nav-link"
                    rel="next"
                  >
                    Next →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
