import * as React from "react"

import Layout from "../components/layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { FaExternalLinkAlt } from 'react-icons/fa'

const ProjectContainer = styled.div`
  display: flex;
  margin: 2em;
  justify-content:space-around;

  @media (max-width: 900px) {
    flex-direction:column;
  }
`

const InfoContainer = styled.div`
  margin:auto;
  text-align:center;
  max-width: 700px;
`

const Link = styled.a`
padding: 1em;
color:#154485;
  &:hover {
    text-decoration:underline;
  }
`

const projects = () => {
  return (
    <Layout active="projects">
      <h2>Portfolio</h2>
      <ProjectContainer>
        <InfoContainer>
          <h3>WhereDoWeEat</h3>
          <p><Link href='https://fast-shelf-07613.herokuapp.com' target='_blank' rel='noopener noreferrer'>Live on Heroku <FaExternalLinkAlt /></Link></p>
          <p><Link href='https://github.com/MynameisKylan/WhereDoWeEat' target='_blank' rel='noopener noreferrer'>GitHub Repo <FaExternalLinkAlt /></Link></p>
          <p>An app that allows users to rate restaurants, create parties, and recieve personalized recommendations based the party's preferences.</p>
          <h4>Highlights:</h4>
          <ul>
            <li>Search by location, price and type of restaurant</li>
            <li>Responsive single page application</li>
            <li>Authentication with JWT and Devise</li>
          </ul>
          <h4>Tech Stack:</h4>
          <ul>
            <li>React</li>
            <li>Rails</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </InfoContainer>
        <StaticImage
          src={"../images/WhereDoWeEat2.png"}
          alt={`A screenshot showing a page from WhereDoWeEat`}
          className='project-image'
        ></StaticImage>
      </ProjectContainer>
      <ProjectContainer className='reverse'>
        <InfoContainer>
          <h3>OdinFacebook</h3>
          <p><Link href='https://gentle-oasis-15615.herokuapp.com' target='_blank' rel='noopener noreferrer'>Live on Heroku <FaExternalLinkAlt /></Link></p>
          <p><Link href='https://github.com/MynameisKylan/odin-facebook' target='_blank' rel='noopener noreferrer'>GitHub Repo <FaExternalLinkAlt /></Link></p>
          <p>A Facebook clone application where users can add friends and create, comment on, and like posts.</p>
          <h4>Highlights:</h4>
          <ul>
            <li>Facebook login</li>
            <li>Profile picture upload</li>
            <li>Responsive design</li>
            <li>Authentication with Devise</li>
          </ul>
          <h4>Tech Stack:</h4>
          <ul>
            <li>Ruby on Rails</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </InfoContainer>
        <StaticImage
          src={"../images/OdinFacebook.png"}
          alt={`A screenshot showing a page from OdinFacebook`}
          className='project-image'
        ></StaticImage>
      </ProjectContainer>
    </Layout>
  )
}

export default projects
