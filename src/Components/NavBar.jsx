import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import Footer from "./Footer";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to={"/"} className={classes.logo}>
            <img src={Logo} alt="" className={classes.logoImg} />{" Support Umbrella Nepal "}
          </Link>
          <Nav className={classes.me_auto}>
            <NavLink to={"/"} className={classes.item}>
              Home
            </NavLink>
            <NavLink to={"/activities"} className={classes.item}>
              Activities
            </NavLink>
            <NavLink to={"/about"} className={classes.item}>
              About us
            </NavLink>
            <NavLink to={"/team"} className={classes.item}>
              Our Team
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
      <Footer/>
    </>
  );
}

export default NavBar;
