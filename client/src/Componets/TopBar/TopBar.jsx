import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";


function TopBar() {
  
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>BOOKS/JOURNALS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={() => navigate("/")}>ADD</Nav.Link>
              <Nav.Link  onClick={() => navigate("/view")}>VIEW</Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/graph");
                }}
              >
                GRAPH
              </Nav.Link>
            </Nav>

            {/* <Nav.Link onClick={()=>{
              
            }}>Logout</Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBar;
