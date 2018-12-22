import React from 'react'
import styled from 'styled-components'
import { compose, withState } from 'recompose'

import Logo from '../../assets/img/logo.png'
import NavbarToggleButton from './NavbarToggleButton'
import Link from '../atom/Link'

const StyledNavbarSide = styled.div`
  width: 100%;
  height: 80px;
  @media screen and (min-width: ${props => props.theme.threshold}) {
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
    z-index: 100;
  }
`

const NavbarBrand = styled.img`
  margin-left: 10px;
  display: block;
  @media screen and (max-width: ${props => props.theme.threshold}) {
    padding-top: 14px;
    padding-bottom: 14px;
  }
`
const NavbarMain = styled.ul`
  list-style: none;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${props => props.theme.threshold}) {
    animation: fadein 0.5s;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 150;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: 0;
    background-color: white;
  }
`
const NavItem = styled.li`
  position: relative;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: ${props => props.theme.threshold}) {
    margin-left: 0;
  }
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
      <Link to="/" hasUnderline={false}>
        <NavbarBrand src={Logo} />
      </Link>
      <NavbarMain isOpen={isNavbarOpen}>
        <NavLinkWithCloseAction to="/concept">Concept</NavLinkWithCloseAction>
        <NavLinkWithCloseAction to="/info#stylists">
          Stylists
        </NavLinkWithCloseAction>
        <NavLinkWithCloseAction to="/info#access">
          Access
        </NavLinkWithCloseAction>
        <NavLinkWithCloseAction to="/menu">Menu</NavLinkWithCloseAction>
        <NavLinkWithCloseAction to="/news">News</NavLinkWithCloseAction>
      </NavbarMain>
    </StyledNavbarSide>
  )
}

export default compose(withState('isNavbarOpen', 'setIsNavbarOpen', false))(
  NavbarSide
)
