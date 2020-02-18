import React from "react"
import { Link } from "gatsby"
import Head from "../components/layout/head"
import Layout from "../components/layout/layout"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page Not Found</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
