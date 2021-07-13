import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/Form/form"
import CallToAction from "../components/cta"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Form />
    <CallToAction />
  </Layout>
)

export default IndexPage