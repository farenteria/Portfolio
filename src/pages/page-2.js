import React from "react"
// import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    {/* <Link to="/">Go back to the homepage</Link> */}
    <AniLink paintDrip to="/">
      View Resume
    </AniLink>
  </Layout>
)

export default SecondPage
