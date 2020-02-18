import React from "react"
import "materialize-css/dist/css/materialize.min.css"
import "../../assets/scss/index.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  return (
    <div className="site">
      <Header />
      <div className="site-content">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
