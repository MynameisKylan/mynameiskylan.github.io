import * as React from "react"

import Layout from "../components/layout"
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaMobileAlt,
  FaLinkedin,
  FaCloud,
  FaFileDownload,
} from "react-icons/fa"
import styled from "styled-components"
import resumeFile from "../files/KylanWongSoftwareEngineer.pdf"

const DownloadLink = styled.a`
  padding: 1em;
  border-radius: 5px;
  color: white;
  background: hsla(0, 0%, 0%, 0.8);

  &:hover,
  &:active {
    opacity: 0.8;
  }
`

const IconWrapper = styled.span`
  margin: 0 0.2em;
  display: flex;
  align-items: center;
`

const Resume = styled.div`
  margin: auto;
  padding: 2em;
  max-width: 1050px;
`

const ContactInfo = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2em;
  line-height: 1.5em;
`

const Info = styled.span`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
`

const Job = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const Title = styled.div`
  width: 40%;

  @media (max-width: 700px) {
    width: 100%;
  }
`

const Description = styled.div`
  width: 55%;

  @media (max-width: 700px) {
    width: 100%;
  }
`

const resume = () => {
  return (
    <Layout active="resume">
      <div style={{ textAlign: "center", marginTop: 3 + "em" }}>
        <DownloadLink href={resumeFile} download="KylanWongSoftwareEngineer">
          <FaFileDownload />
          Download As PDF
        </DownloadLink>
      </div>
      <Resume>
        <h3>Kylan Wong</h3>
        <ContactInfo>
          <Info>
            <IconWrapper>
              <FaMapMarkerAlt />
            </IconWrapper>
            San Diego, California
          </Info>
          <Info>
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <a href="mailto: wong.kylan@gmail.com">wong.kylan@gmail.com</a>
          </Info>
          <Info>
            <IconWrapper>
              <FaMobileAlt />
            </IconWrapper>
            650-619-3903
          </Info>
          <Info>
            <IconWrapper>
              <FaLinkedin />
            </IconWrapper>
            <a
              href="https://www.linkedin.com/in/kylanwong/"
              target="_blank"
              rel="noopener noreferrer"
            >
              in/kylanwong
            </a>
          </Info>
          <Info>
            <IconWrapper>
              <FaCloud />
            </IconWrapper>
            <a
              href="https://mynameiskylan.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              mynameiskylan.github.io
            </a>
          </Info>
        </ContactInfo>
        <h4>
          <b>SUMMARY</b>
        </h4>
        <p>
          Full-stack engineer and lifelong student with a passion for finding elegant solutions to complex challenges.{" "}
        </p>

        <h4>
          <b>EXPERIENCE</b>
        </h4>
        <div>
          <Job>
            <Title>
              <p>
                <b>Software Engineer</b>
              </p>
              <p>May 2021 - Present</p>
            </Title>
            <Description>
              <p>
                <b>Ezoic</b> | Carlsbad, California
              </p>
              <ul>
                <li>
                  Built and maintained internal and customer-facing tools using PHP, Go, JavaScript
                </li>
                <li>
                  Developed and launched new community forums in collaboration with one other developer.
                </li>
                <li>
                  Designed and delivered end-to-end solutions for feature requests, from database design (MySQL) to frontend presentation.
                </li>
                <li>
                  Expanded internal metrics tools to aggregate and display usage data of customer facing services.
                </li>
                <li>
                  Utilized a continuous integration workflow to swiftly deploy robust features.
                </li>
              </ul>
            </Description>
          </Job>
        </div>
        <h4>
          <b>PROJECTS</b>
        </h4>
        <div>
          <Job>
            <Title>
              <p>
                <b>WhereDoWeEat</b>
              </p>
            </Title>
            <Description>
              <ul>
                <li>
                  A full-stack single-page application where users can rate
                  restaurants, create a party of friends, and receive
                  personalized recommendations based on the party's preferences.
                </li>
                <li>Responsively designed and powered by Yelp's Fusion API.</li>
                <li>Created with React, Rails, HTML/JSX, CSS.</li>
              </ul>
            </Description>
          </Job>
          <Job>
            <Title>
              <p>
                <b>OdinFacebook</b>
              </p>
            </Title>
            <Description>
              <ul>
                <li>
                  A Facebook clone featuring friending, posting, commenting,
                  liking, and profile image upload.
                </li>
                <li>Responsive design and integrated Facebook login option.</li>
                <li>Created with full-stack Ruby on Rails, HTML, CSS.</li>
              </ul>
            </Description>
          </Job>
          <Job>
            <Title>
              <p>
                <b>OurChat</b>
              </p>
            </Title>
            <Description>
              <ul>
                <li>
                  A messenger clone where users can create conversations with
                  zero or more other users and instant message.
                </li>
                <li>
                  Websockets implemented with Rails' ActionCable framework.
                </li>
                <li>
                  API Authorization handled with JSON web tokens in HTTP-only
                  cookies.
                </li>
                <li>Created with React, Rails, HTML/JSX, CSS.</li>
              </ul>
            </Description>
          </Job>
          <Job>
            <Title>
              <p>
                <b>Chess</b>
              </p>
            </Title>
            <Description>
              <ul>
                <li>A 2-player game of Chess playable on the command line.</li>
                <li>
                  Implements the full Chess ruleset, including en passant,
                  castling, promotion, etc.
                </li>
                <li>Features saving to/loading from a local .txt save file.</li>
                <li>
                  Written in Ruby, with a full test suite written with RSpec.
                </li>
              </ul>
            </Description>
          </Job>
        </div>
        <h4>
          <b>EDUCATION</b>
        </h4>
        <div>
          <Job>
            <Title>
              <p>
                <b>B.S. Biochemistry and Cell Biology</b>
              </p>
            </Title>
            <Description>
              <p>
                <b>University of California, San Diego</b>
              </p>
              <p>San Diego, CA | 2018</p>
            </Description>
          </Job>
        </div>
        <h4>
          <b>SKILLS</b>
        </h4>
        <div>
          <ul>
            <li>
              Front-End: React, Vue.js, JavaScript, jQuery, HTML, CSS
            </li>
            <li>Back-End: PHP, Laravel, Go, Ruby, Ruby On Rails</li>
            <li>HTTP/AJAX Requests, RESTful APIs, CRUD Operations, Asynchronous Programming</li>
            <li>Version Control: Git</li>
            <li>Object Oriented Design</li>
            <li>MySQL, Relational Databases</li>
          </ul>
        </div>
      </Resume>
    </Layout>
  )
}

export default resume
