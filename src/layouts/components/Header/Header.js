import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "../../../assets/images";
// For dropdown navigation but use bootstrap html
import { Dropdown } from "bootstrap";
import Item from "./Item";
import ItemDropDown from "./ItemDropdown";
import { ROUTE_HEADRS } from "../../../routes";
import Avatar from "../../../components/Avatar/Avatar";
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
                  return (
                    <ItemDropDown key={index} {...route}>
                      {route.title}
                    </ItemDropDown>
                  );
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

            <ItemDropDown align="end" location="dropdown-menu-end">
              <i className={cx("fa-solid fa-cart-shopping")} />
            </ItemDropDown>

            <ItemDropDown align="end" location="dropdown-menu-end">
              <Avatar
                avatarDropdown
                size={35}
                src="https://i.pinimg.com/736x/19/03/32/1903320eeaa9f272d019e60c1c7d48c8.jpg"
              />
            </ItemDropDown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
