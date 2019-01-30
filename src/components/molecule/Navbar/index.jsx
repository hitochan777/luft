import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import NavbarToggleButton from './NavbarToggleButton'
import Link from '../../atom/Link'
import Button from '../../atom/Button'
import * as media from '../../../utils/media'

const NavbarBrand = styled.img`
  margin: 0 auto;
  display: block;
  ${media.min.tablet`
    padding-top: 14px;
    padding-bottom: 14px;
  `}
`
const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
  padding-top: 15vh;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 150;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${media.min.tablet`
    width: ${props => props.theme.sideNavbarWidth};
    min-width: ${props => props.theme.sideNavbarWidth};
  `}

  ${media.max.tablet`
    animation: fadein 0.5s;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    width: 215px;
    bottom: 0;
    right: 0;
    margin: 0;
  `}
`
const NavItem = styled.li`
  margin: 0;
  line-height: 2rem;
  color: ${props => props.theme.greyColor};
  position: relative;
  text-transform: uppercase;
  &:hover {
    background-color: white;
  }
`

const Header = styled.div``

const Main = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 20px;
`

const Footer = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 30px;
`

const StyledLink = styled(({ isFirst, ...props }) => <Link {...props} />)`
  border-top: ${props => (props.isFirst ? 'none' : '1px solid #e2e2e2')};
  margin: 0 35px;
  display: flex;
  box-align: center;
`

const StyledNavCloseCover = styled.span`
  ${media.max.tablet`
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    top: 0;
    left: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;
    z-index: 125;
    animation: fadein 0.5s;
  `}
`
const NavCloseCover = ({ setIsNavbarOpen }) => (
  <StyledNavCloseCover onClick={() => setIsNavbarOpen(false)} />
)

const NavbarSide = ({ tel }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const NavLink = ({ isFirst = false, ...props }) => (
    <NavItem
      onClick={() => {
        setIsNavbarOpen(false)
      }}
    >
      <StyledLink isFirst={isFirst} {...props} />
    </NavItem>
  )

  return (
    <>
      <NavbarToggleButton
        onClick={() => {
          setIsNavbarOpen(!isNavbarOpen)
        }}
        isCollapsed={!isNavbarOpen}
      />
      {isNavbarOpen && <NavCloseCover setIsNavbarOpen={setIsNavbarOpen} />}
      <Navbar isOpen={isNavbarOpen}>
        <Header>
          <Link to="/" hasUnderline={false}>
            <StaticQuery
              query={graphql`
                query {
                  logo: contentfulAsset(title: { eq: "logo" }) {
                    title
                    file {
                      url
                    }
                  }
                }
              `}
              render={data => <NavbarBrand src={data.logo.file.url} />}
            />
          </Link>
        </Header>
        <Main>
          <NavLink isFirst to="/concept">
            Concept
          </NavLink>
          <NavLink to="/stylist">Stylists</NavLink>
          <NavLink to="/access">Access</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/news">News</NavLink>
        </Main>
        <Button
          href={`tel:${tel}`}
          style={{ width: '75%', margin: '20px auto 0px' }}
        >
          Tel
        </Button>
        <Footer>©hair Luft</Footer>
      </Navbar>
    </>
  )
}

export default NavbarSide
