import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classNames from "classnames/bind";
import { connect } from "react-redux";

import styles from "./Header.module.scss";
import images from "../../../assets/images";
import { Dropdown } from "bootstrap";
import Item from "./Item";
import DropDown from "./Dropdown/Dropdown";
import { ROUTE_HEADRS } from "../../../routes";
import Avatar from "../../../components/Avatar/Avatar";
import { LoggedIn } from "../../../routes/header_routes";
import config from "../../../config";
import { signOut } from "../../../actions";
import history from "../../../history";
const cx = classNames.bind(styles);

const logined = false;

function Header(props) {
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
                    <DropDown key={index} {...route}>
                      {route.title}
                    </DropDown>
                  );
                }
                return (
                  <Item key={index} {...route}>
                    {route.title}
                  </Item>
                );
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
            {props.auth.isSignedIn && (
              <DropDown
                classNameWrapper="cart"
                align="end"
                location="dropdown-menu-end"
                list={LoggedIn}
              >
                <i className="fa-solid fa-cart-shopping" />
              </DropDown>
            )}

            {props.auth.isSignedIn ? (
              <DropDown
                lastItemdropDown={(classWrapper, classTitle) => (
                  <label
                    className={classWrapper}
                    href="#"
                    onClick={() => {
                      props.signOut();
                      history.push(config.routes.login);
                    }}
                  >
                    <div className={classTitle}>Đăng xuất</div>
                  </label>
                )}
                align="end"
                location="dropdown-menu-end"
                list={LoggedIn}
              >
                <Avatar
                  avatarDropdown
                  size={38}
                  src="https://i.pinimg.com/736x/19/03/32/1903320eeaa9f272d019e60c1c7d48c8.jpg"
                />
              </DropDown>
            ) : (
              <Item to={config.routes.login}>
                Đăng nhập <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </Item>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

const mapstateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapstateToProps, { signOut })(Header);
