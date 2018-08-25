import React from 'react'
import styled from 'styled-components'
import { compose, withState } from 'recompose'

import Logo from '../../assets/img/logo.png'
import NavbarToggleButton from './NavbarToggleButton'
import Link from 'gatsby-link'

const StyledNavbarSide = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  height: 80px;
  justify-content: center;
  @media screen and (min-width: 800) {
    justify-content: flex-start;
  }
`

const NavbarBrand = styled.img`
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  right: 0;
  margin-top: auto;
  margin-bottom: auto;
`
const NavbarMain = styled.div``

const NavbarSide = ({ isNavbarOpen, setIsNavbarOpen }) => {
  const NavLinkWithCloseAction = props => (
    <li
      onClick={() => {
        setIsNavbarOpen(false)
      }}
    >
      <Link {...props} />
    </li>
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
