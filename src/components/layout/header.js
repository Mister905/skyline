import React from "react"
import { Link } from "gatsby"
import Logo from "../../assets/img/skyline_logo.png"

const header = () => {
  return (
    <div>
      <nav className="custom-nav">
        <div className="nav-wrapper container flex">
          <Link to={"/"} className="brand-logo center">
            <img src={Logo} alt="" />
          </Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down flex">
            <li className="custom-navlink">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="custom-navlink">
            <Link to={"/cities"}>Cities</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default header
