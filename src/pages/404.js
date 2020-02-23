import React, { Component } from "react"
import Pooh from "../assets/img/pooh.jpg"
import { Link } from "gatsby"
import Layout from "../components/layout/Layout"
import Head from "../components/layout/Head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404 Error" />
      <div className="container mt-50">
        <div className="row">
          <div className="col m12 center-align">
            <div className="error-heading fw-600">Oh bother...</div>
          </div>
        </div>
        <div className="row">
          <div className="col m6 offset-m3">
            <img src={Pooh} alt="Profile Image" className="responsive-img" />
          </div>
        </div>
        <div className="row">
          <div className="col m12 center-align">
            <p className="error-p fw-600">
              We couldn't find what you're looking for.
            </p>
            <p className="error-p fw-600">Sorry about that.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
