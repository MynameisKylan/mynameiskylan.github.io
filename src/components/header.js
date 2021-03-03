import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const Banner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  font-family: "Roboto Slab", sans-serif;

  @media (max-width: 670px) {
    flex-direction:column;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin:0 1em;
  padding:0.5em;
`

const NavLink = styled(Link)`
  padding: 1em;
  transition: 0.2s ease;
  height:53px;
  border-bottom: ${props => props.active === 'true' ? '5px solid lightgrey' : 'none'};

  &:active {
    border-bottom: 5px solid white;
  }
  &:hover {
    border-bottom: 5px solid white;
  }
`

const Header = ({ active, siteTitle }) => (
  <Banner>
    <h1>
      <NavLink style={{padding: 0.6 + 'em'}} to="/">{siteTitle}</NavLink>
    </h1>
    <Nav>
      <NavLink active={active === 'projects' ? 'true' : 'false'} to="/projects">
        Projects
      </NavLink>
      <NavLink active={active === 'resume' ? 'true' : 'false'} to="/resume">
        Resume
      </NavLink>
      <NavLink active={active === 'contact' ? 'true' : 'false'} to="/contact">
        Contact
      </NavLink>
    </Nav>
  </Banner>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
