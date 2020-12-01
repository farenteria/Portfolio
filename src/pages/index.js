import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ItemSection from "../components/item-section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/*
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}

    {/* HERO SECTION*/}
    <div>
      <Image />
      <h1>My Portfolio</h1>
      <p>This will contain some information about me.</p>
    </div>

    {/* EXPERIENCE SECTION */}
    <ItemSection 
      sectionTitle="Experience"/>

    {/* EDUCATION SECTION */}
    <ItemSection 
      sectionTitle="Education"/>

    {/* CONTACT SECTION */}
    <div>
      <h2>Contact</h2>
      <form>
        {/* <label for="email">Email</label> */}
        <input id="email" type="email" required></input>
        <input type="submit" value="Submit"></input>
      </form>
      {/* Resume Link */}
      <AniLink paintDrip to="/page-2/">
        View Resume
      </AniLink>
    </div>
  </Layout>
)

export default IndexPage
