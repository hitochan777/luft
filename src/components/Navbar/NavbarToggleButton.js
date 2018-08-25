import React from 'react'
import styled from 'styled-components'

const IconBar = styled.span`
  width: 22px;
  display: block;
  height: 2px;
  margin-left: 14px;
  margin-right: 14px;
  padding: 0;
  transition: all 0.8s;
  background-color: ${({ isOpened }) => (isOpened ? 'white' : 'black')};
  &:nth-of-type(1) {
    transform: rotate(${({ isOpened }) => (isOpened ? '45' : '0')}deg);
    ${({ isOpened }) => isOpened && 'transform-origin: 10% 10%'};
  }

  &:nth-of-type(2) {
    margin-top: 4px;
    opacity: ${({ isOpened }) => (isOpened ? '0' : '1')};
    filter: alpha(opacity= ${({ isOpened }) => (isOpened ? '0' : '100')});
  }

  &:nth-of-type(3) {
    margin-top: 4px;
    filter: ${({ isOpened }) => !isOpened && 'alpha(opacity=100)'};
    transform: rotate(${({ isOpened }) => (isOpened ? '-45' : '0')}deg);
    ${({ isOpened }) => isOpened && 'transform-origin: 10% 90%'};
  }
`

const StyledNavbarToggleButton = styled.button`
  position: fixed;
  top: 1px;
  right: 1px;
  height: 80;
  width: 80;
  background-color: transparent;
  border: none;
  z-index: 200; 
  padding: 0;
  color: ${({ isOpened }) => (isOpened ? 'white' : 'black')}
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`
const NavbarToggleButton = ({ isCollapsed, onClick }) => (
  <StyledNavbarToggleButton onClick={onClick} isOpened={!isCollapsed}>
    MENU
    <IconBar isOpened={!isCollapsed} />
    <IconBar isOpened={!isCollapsed} />
    <IconBar isOpened={!isCollapsed} />
  </StyledNavbarToggleButton>
)

export default NavbarToggleButton
