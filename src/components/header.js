import React from 'react'

import Navbar from './Navbar'
import Link from './NavLink'
import styles from './header.module.scss'
import Logo from '../assets/img/logo.png'

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
        <Navbar />
      </div>
    )
  }
}

// <Navbar
//   color="white"
//   light
//   expand="md"
//   className="py-0"
//   style={{ height: '60px' }}
// >
//   <NavbarBrand tag={Link} to="/">
//     <img src={Logo} />
//   </NavbarBrand>
//   <NavbarToggler onClick={this.toggle} />
//   <Collapse isOpen={this.state.isOpen} navbar>
//     <Nav className="ml-auto" navbar>
//       <NavItem>
//         <NavLink tag={Link} to="/concept/">
//           Concept
//         </NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink tag={Link} to="/stylist">
//           Stylist
//         </NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink tag={Link} to="/menu">
//           Menu
//         </NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink tag={Link} to="/info">
//           Shop Information
//         </NavLink>
//       </NavItem>
//     </Nav>
//   </Collapse>
// </Navbar>
//
