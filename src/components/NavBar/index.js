import React, { useState } from 'react';

import { Navbar, NavItem, NavLink, NavbarBrand, Collapse, NavbarToggler, Nav, Container } from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="dark" expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Pets Notes</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://severinebianchi.com">
                  Portfolio
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
