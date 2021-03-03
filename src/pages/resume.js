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
import resumeFile from "../files/Kylan_Wong_Web_Developer.pdf"

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
  margin-left: 0.6em;
`

const Job = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:2em;

  @media (max-width:700px) {
    flex-direction:column;
  }
`

const Title = styled.div`
  width: 40%;

  @media (max-width:700px) {
    width:100%;
  }
`

const Description = styled.div`
  width:55%;

  @media (max-width:700px) {
    width:100%;
  }
`

const resume = () => {
  return (
    <Layout active="resume">
      <div style={{ textAlign: "center", marginTop: 3 + "em" }}>
        <DownloadLink href={resumeFile} download="Kylan_Wong_Web_Developer">
          <FaFileDownload /> Download As PDF
        </DownloadLink>
      </div>
      <Resume>
        <h3>Kylan Wong</h3>
        <ContactInfo>
          <Info>
            <FaMapMarkerAlt /> San Diego, California
          </Info>
          <Info>
            <FaEnvelope />{" "}
            <a href="mailto: wong.kylan@gmail.com">wong.kylan@gmail.com</a>
          </Info>
          <Info>
            <FaMobileAlt /> 650-619-3903
          </Info>
          <Info>
            <FaLinkedin />{" "}
            <a
              href="https://www.linkedin.com/in/kylanwong/"
              target="_blank"
              rel="noopener noreferrer"
            >
              in/kylanwong
            </a>
          </Info>
          <Info>
            <FaCloud />{" "}
            <a
              href="https://mynameiskylan.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              mynameiskylan.github.io/Portfolio/
            </a>
          </Info>
        </ContactInfo>
        <h4><b>SUMMARY</b></h4>
        <p>
          Full-stack web developer with a passion for creating clean and
          functional web apps.{" "}
        </p>
        <h4><b>PROJECTS</b></h4>
        <div>
          <Job>
            <Title>
              <p><b>WhereDoWeEat</b></p>
            </Title>
            <Description>
            <ul>
                <li>A full-stack single-page application where users can rate restaurants, create a party of friends, and receive personalized recommendations based on the party's preferences.</li>
                <li>Responsively designed and powered by Yelp's Fusion API.</li>
                <li>Created with React, Rails, HTML, CSS.</li>
              </ul>
            </Description>
          </Job>
          <Job>
            <Title>
              <p><b>OdinFacebook</b></p>
            </Title>
            <Description>
            <ul>
                <li>A Facebook clone featuring friending, posting, commenting, liking, and profile image upload.</li>
                <li>Responsive design and integrated Facebook login option.</li>
                <li>Created with full-stack Ruby on Rails, HTML, CSS.</li>
              </ul>
            </Description>
          </Job>
          <Job>
            <Title>
              <p><b>Chess</b></p>
            </Title>
            <Description>
            <ul>
                <li>A game of Chess playable on the command line.</li>
                <li>Implements the full Chess ruleset, including en passant, castling, promotion, etc.</li>
                <li>Features saving to/loading from a local .txt save file.</li>
                <li>Written in Ruby, with a full test suite written with RSpec.</li>
              </ul>
            </Description>
          </Job>
        </div>
        <h4><b>EXPERIENCE</b></h4>
        <div>
          <Job>
            <Title>
              <p><b>Research Associate I</b></p>
              <p>June 2019 - August 2020</p>
            </Title>
            <Description>
              <p><b>Omniome</b> | San Diego, California</p>
              <ul>
                <li>Execute experiments in collaboration with scientists.</li>
                <li>Operate and maintain lab instrumentation.</li>
                <li>Collect, analyze, and present monthly sequencing metrics.</li>
                <li>Write and update basic python scripts for data analysis.</li>
              </ul>
            </Description>
          </Job>
          <Job>
            <Title>
              <p><b>Drug Substance Manufacturing Associate</b></p>
              <p>May 2018 - June 2019</p>
            </Title>
            <Description>
              <p><b>Ajinomoto Bio-Pharma Services</b> | San Diego, California</p>
              <ul>
                <li>Maintain strict GMP and GDP compliance – up to date SOP training, precise and efficient execution of process batch records.</li>
                <li>Co-led 45 successful runs of homogenization processes – organized material, equipment, batch record and personnel needs.</li>
                <li>Reduced documentation errors by 55% by implementing end-of-day batch record reviews.</li>
                <li>Awarded Drug Substance employee of the month for GDP compliance, technical expertise, and communication skills.</li>
              </ul>
            </Description>
          </Job>
        </div>
        <h4><b>EDUCATION</b></h4>
        <div>
          <Job>
            <Title><p><b>B.S. Biochemistry and Cell Biology</b></p></Title>
            <Description>
              <p><b>University of California, San Diego</b></p>
              <p>San Diego, CA | 2018</p>
            </Description>
          </Job>
        </div>
        <h4><b>SKILLS</b></h4>
        <div>
          <ul>
            <li>Front-End: Reactjs, Javascript, HTML, CSS, Responsive Design</li>
            <li>Back-End: Ruby, Ruby On Rails</li>
            <li>Version Control: Git</li>
            <li>HTTP/AJAX Requests, Asynchronous Programming</li>
            <li>RESTful APIs, CRUD Operations</li>
          </ul>
        </div>
      </Resume>
    </Layout>
  )
}

export default resume
