import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import Link from './NavLink'
import styles from './header.module.scss'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">
            {this.props.siteTitle}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/concept/">
                  Concept
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/stylist">
                  Stylist
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/menu">
                  Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/info">
                  Shop Information
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
