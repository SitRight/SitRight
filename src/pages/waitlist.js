import React, { useState } from "react"
import TextField from '@material-ui/core/TextField'; 
//import Layout from "../components/layout"
//import SEO from "../components/seo"
import Button from "../components/button"
//import CallToAction from "../components/cta"


const IndexPage = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
  })

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  }


  return (
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
          position: "absolute",
          top: 0,
          zIndex: -5,
          height: "100vh",
          width: "100vw",
          opacity: 0.5,
        }}
      />
      <h1 style={{ textAlign: "center" }}>Join the Waitlist</h1>
      <p style={{ textAlign: "center", maxWidth: 440 }}>
        We will keep you up do date yada yada yada...
      </p>
        <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div style={{display: "flex", fleXDirection: "row", justifyContent: "center", alignItems: "center"}}>  
            <TextField
              id="outlined-basic" 
              label="Name" 
              variant="outlined"
              type="text"
              name="name"
              onChange={handleChange}
              value={state.name}
              placeholder="Enter Your Name"
            />
            <div style= {{width: "10px"}}></div>
            <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            type="text"
            name="email"
            onChange={handleChange}
            value={state.email}
            placeholder="Enter Your Email"
            />
            <div style= {{width: "10px"}}></div>
            <Button type="submit" > Submit </Button>
          </div>   
        </form>
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
}

export default IndexPage