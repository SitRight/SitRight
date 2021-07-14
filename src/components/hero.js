import React from "react"
import PropTypes from "prop-types"
import Image from "./image"
import Button from "../components/button"
import headerImage from "../images/header.png"
import { Link } from "gatsby"


const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>Welcome to SitRight</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      SitRight uses Machine Learning to help improve your daily posture habits. Join the waitlist below, or contribute to the project by taking a photo.
    </p>
    <div style={{display: "flex", fleXDirection: "row", justifyContent: "center", alignItems: "center"}}>  
      <Button>
        <Link style={{textDecoration: "none", color: "white"}} to="/waitlist">Join the Waitlist</Link></Button>
      <div style= {{width: "25px"}}></div>
      <Button><Link style={{textDecoration: "none", color: "white"}} to="/webcam">Contribute Images</Link></Button>
    </div>
    <br></br>
    <br></br>
    <Image></Image>
    <div style={{ margin: 60, width: `250px`, position: "relative" }}>
      <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
