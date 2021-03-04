import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Button = styled(Link)`
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1em;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <StaticImage
        src={"../images/kylan(1).jpg"}
        alt={"Me!"}
        id="profile-image"
        style={{ width: 60 + "%", overflow: "visible" }}
        aspectRatio={1}
      />
      <h2>Hi. My name is Kylan, and I'm a full-stack web developer.</h2>
      <p>
        <Button to="/projects">My Portfolio</Button> <br />
      </p>
    </div>
  </Layout>
)

export default IndexPage
