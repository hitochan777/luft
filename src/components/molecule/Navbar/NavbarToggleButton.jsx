import React from 'react'
import styled from 'styled-components'

const IconBar = styled.span`
  width: 22px;
  display: block;
  height: 2px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  transition: all 0.8s;
  background-color: ${props =>
    props.isOpened ? 'white' : props.theme.grayColor};
  &:nth-of-type(2) {
    transform: rotate(${({ isOpened }) => (isOpened ? '45' : '0')}deg);
    ${({ isOpened }) => isOpened && 'transform-origin: 10% 10%'};
  }

  &:nth-of-type(3) {
    margin-top: 4px;
    opacity: ${({ isOpened }) => (isOpened ? '0' : '1')};
    filter: alpha(opacity= ${({ isOpened }) => (isOpened ? '0' : '100')});
  }

  &:nth-of-type(4) {
    margin-top: 4px;
    filter: ${({ isOpened }) => !isOpened && 'alpha(opacity=100)'};
    transform: rotate(${({ isOpened }) => (isOpened ? '-45' : '0')}deg);
    ${({ isOpened }) => isOpened && 'transform-origin: 10% 90%'};
  }
`

const StyledNavbarToggleButton = styled.button`
  position: fixed;
  top: 14px;
  right: 10px;
  background-color: transparent;
  z-index: 200;
  padding: 0;
  margin: 0;
  color: ${props => (props.isOpened ? 'white' : props.theme.grayColor)};
  border: none;
  text-align: center;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: ${props => props.theme.tablet_width}) {
    display: none;
  }
`

const MenuText = styled.span`
  font-size: 0.8rem;
`

const NavbarToggleButton = ({ isCollapsed, onClick }) => {
  const isOpened = !isCollapsed
  return (
    <StyledNavbarToggleButton onClick={onClick} isOpened={isOpened}>
      <MenuText>{isOpened ? 'CLOSE' : 'MENU'}</MenuText>
      <IconBar isOpened={isOpened} />
      <IconBar isOpened={isOpened} />
      <IconBar isOpened={isOpened} />
    </StyledNavbarToggleButton>
  )
}

export default NavbarToggleButton
