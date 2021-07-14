import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import Form from "../components/Form/form"
import CallToAction from "../components/cta"
const IndexPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  })

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  }


  return (
    <Layout>
      <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <input
          id="name"
          type="text"
          onChange={handleChange}
          defaultValue={formState.name}
          placeholder="Enter Your Name"
        />
        <input
          id="email"
          type="text"
          onChange={handleChange}
          defaultValue={formState.email}
          placeholder="Enter Your Email"
        />
        <button type="submit">Submit</button>
      </form>
      <SEO></SEO>
      <CallToAction></CallToAction>
    </Layout>
  )
}

export default IndexPage