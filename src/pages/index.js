import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}

    {/* HEADER SECTION*/}
    <div>
      {/* Hero Image */}
      <Image />
      {/* Page Title */}
      <h1>My Portfolio</h1>
      {/* About Blurb */}
      <p>This will contain some information about me.</p>
    </div>

    {/* EXPERIENCE SECTION */}
    <div>
      {/* Experience Title */}
      <h2>Experience</h2>
      <div className="split-column">
        <div className="left">
        {/* Image column */}
        <Image></Image>
        </div>
        <div className="right">
          {/* Name of experience */}
          <h3>Name of experience</h3>
          {/* Details column */}
          <p>Some details about the experience</p>
        </div>
      </div>
    </div>

    {/* EDUCATION SECTION */}
    <div>
      {/* Education Title */}
      <h2>Education</h2>
      <div className="split-column">
        <div className="left">
        {/* Image column */}
        <Image></Image>
        </div>
        <div className="right">
          {/* Name of education */}
          <h3>Name of education</h3>
          {/* Details column */}
          <p>Some details about the education</p>
        </div>
      </div>
    </div>

    {/* CONTACT SECTION */}
    <div>
      {/* Contact Title */}
      {/* Email Form */}
      <form>
        <label for="email">Email</label>
        <input id="email" type="email" required></input>
        <input type="submit" value="Submit"></input>
      </form>
      {/* Resume Link */}
      {/* <Link to="/page-2/">View Resume</Link> */}
      <AniLink paintDrip to="/page-2/">
        View Resume
      </AniLink>
    </div>
  </Layout>
)

export default IndexPage
