import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { InfoBox, InfoContainer } from "../components/Info"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/gurps-quickstart/">GURPS Quickstart</Link>
  </Layout>
)

export default IndexPage
