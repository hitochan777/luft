import React from 'react'
import styled from 'styled-components'
import { compose, withState } from 'recompose'

import Logo from '../../assets/img/logo.png'
import NavbarToggleButton from './NavbarToggleButton'
import Link from 'gatsby-link'

const StyledNavbarSide = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: calc(100vh - ${props => props.theme.footerHeight});
  width: ${props => props.theme.sideNavbarWidth};
  min-width: ${props => props.theme.sideNavbarWidth};
  justify-content: center;
`

const NavbarBrand = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
`
const NavbarMain = styled.ul`
  list-style: none;
`
const NavItem = styled.li`
  margin-left: 20px;
`

const NavbarSide = ({ isNavbarOpen, setIsNavbarOpen }) => {
  const NavLinkWithCloseAction = props => (
    <NavItem
      onClick={() => {
        setIsNavbarOpen(false)
      }}
    >
      <Link {...props} />
    </NavItem>
  )
  return (
    <StyledNavbarSide>
      <NavbarToggleButton
        onClick={() => {
          setIsNavbarOpen(!isNavbarOpen)
        }}
        isCollapsed={!isNavbarOpen}
      />
      <Link to="/">
        <NavbarBrand src={Logo} />
      </Link>
      <NavbarMain>
        <NavLinkWithCloseAction to="/concept">Concept</NavLinkWithCloseAction>
        <NavLinkWithCloseAction to="/stylist">Stylists</NavLinkWithCloseAction>
        <NavLinkWithCloseAction to="/info">Info</NavLinkWithCloseAction>
      </NavbarMain>
    </StyledNavbarSide>
  )
}

export default compose(withState('isNavbarOpen', 'setIsNavbarOpen', false))(
  NavbarSide
)
