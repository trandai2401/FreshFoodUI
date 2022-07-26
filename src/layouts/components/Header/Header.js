import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "../../../assets/images";
import { Dropdown } from "bootstrap";
import Item from "./Item";
import ItemDropDown from "./ItemDropdown";
import { ROUTE_HEADRS } from "../../../routes";
const cx = classNames.bind(styles);
function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" className={cx("wrapper")}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={images.logo} alt="FreshFood" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {ROUTE_HEADRS.map((route, index) => {
                if ("list" in route) {
                  return <ItemDropDown key={index} {...route} />;
                }
                return <Item key={index} {...route} />;
              })}
              {/* <ItemDropDown /> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <NavDropdown
              title={
                <div
                  style={{
                    overflow: "hidden",
                    width: "35px",
                    height: "35px",
                    display: "inline-block",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    width="35px"
                    src={
                      "https://i.pinimg.com/736x/19/03/32/1903320eeaa9f272d019e60c1c7d48c8.jpg"
                    }
                    alt="avatar"
                  />
                </div>
              }
              align="end"
              id="navbarScrollingDropdown"
            >
              <div>fasdfa</div>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
