import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { compose, withState } from 'recompose'

import NavbarToggleButton from './NavbarToggleButton'
import Link from '../../atom/Link'

const NavbarBrand = styled.img`
  margin: 0 auto;
  display: block;
  @media screen and (max-width: ${props => props.theme.tablet_width}) {
    padding-top: 14px;
    padding-bottom: 14px;
  }
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

  @media screen and (min-width: ${props => props.theme.tablet_width}) {
    width: ${props => props.theme.sideNavbarWidth};
    min-width: ${props => props.theme.sideNavbarWidth};
  }

  @media screen and (max-width: ${props => props.theme.tablet_width}) {
    animation: fadein 0.5s;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    width: 215px;
    bottom: 0;
    right: 0;
    margin: 0;
  }
`
const NavItem = styled.li`
  margin: 0;
  color: ${props => props.theme.greyColor};
  padding-bottom: 5px;
  padding-bottom: 5px;
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

const withNavbarOpen = withState('isNavbarOpen', 'setIsNavbarOpen', false)

const StyledLink = styled(({ isFirst, ...props }) => <Link {...props} />)`
  border-top: ${props => (props.isFirst ? 'none' : '1px solid #e2e2e2')};
  margin: 0 35px;
  display: flex;
  box-align: center;
`

const NavLink = withState('isNavbarOpen', 'setIsNavbarOpen', false)(
  ({ isNavbarOpen, setIsNavbarOpen, isFirst = false, ...props }) => (
    <NavItem
      onClick={() => {
        setIsNavbarOpen(false)
      }}
    >
      <StyledLink isFirst={isFirst} {...props} />
    </NavItem>
  )
)

const StyledNavCloseCover = styled.span`
  @media screen and (max-width: ${props => props.theme.tablet_width}) {
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
  }
`
const NavCloseCover = ({ setIsNavbarOpen }) => (
  <StyledNavCloseCover onClick={() => setIsNavbarOpen(false)} />
)

const NavbarSide = ({ isNavbarOpen, setIsNavbarOpen }) => {
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
          <NavLink to="/info#stylists">Stylists</NavLink>
          <NavLink to="/info#access">Access</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/news">News</NavLink>
        </Main>
        <Footer>©hair Luft</Footer>
      </Navbar>
    </>
  )
}

export default compose(withNavbarOpen)(NavbarSide)
