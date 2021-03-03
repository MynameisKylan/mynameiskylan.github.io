import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const Icon = styled.span`
  font-size: 2em;
  margin-right: 0.2em;
`

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  color: #154485;
`

const ListItem = styled.li`
  display: flex;
  justify-content: center;
`

const contact = () => {
  return (
    <Layout active="contact">
      <div className="container" style={{ textAlign: "center" }}>
        <h2>Get In Touch</h2>
        <ul>
          <li><a href='mailto: wong.kylan@gmail.com'>wong.kylan@gmail.com</a></li>
          <ListItem>
            <ContactLink href="https://www.linkedin.com/in/kylan-wong-b0304a125/">
              <Icon>
                <FaLinkedin />
              </Icon>
              LinkedIn
            </ContactLink>
          </ListItem>
          <ListItem>
            <ContactLink href="https://github.com/MynameisKylan">
              <Icon>
                <FaGithub />
              </Icon>
              GitHub
            </ContactLink>
          </ListItem>
        </ul>
      </div>
    </Layout>
  )
}

export default contact
