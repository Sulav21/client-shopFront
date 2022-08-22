import React from "react";
import { Navbar,NavDropdown, Container, Nav, Row, Col } from "react-bootstrap";
import logo from "../../images/logo-1.jpg";
import "./header.css";
export const Header = () => {
  return (
    <Container className="">
      <Row>
        <Col>
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="/">
                {/* <img src={logo} alt='CoolAutomation_Logo' width='230px'></img> */}
                <h3 style={{color:'#0a1930'}}>Sulav's Cricket Store</h3>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-dark">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="Bats" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Kid's Bat
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Adult's Bat
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Accessories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Gloves
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Helmets
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Shoes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Balls
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">Checkout</Nav.Link>
                  <NavDropdown title="My Account" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Register
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className="search-all mt-4">
            <div>
              <input
                type="text"
                placeholder=" Search Products..."
                className="search"
              />
            </div>
            <div className="orders">
              {/* <div className="price">
                <span>$0.00</span>
                <span>0 items</span>
              </div> */}
              <div className="cart">
              {/* <i class="fa-solid fa-cart-shopping-fast"></i> */}
              <i class="fa-solid fa-cart-shopping"></i>
              <div className="cart-icon">10</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
