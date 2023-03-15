import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, Outlet } from "react-router-dom";
import classes from './NavBar.module.css'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to={'/'} className={classes.logo}> 
          Logo
          </Link>
          <Nav className={classes.me_auto}>
            <NavLink to={'/'} className={classes.item}>Home</NavLink>
            <NavLink to={'/activities'} className={classes.item}>Activities</NavLink>
            <NavLink to={'/about'} className={classes.item}>About us</NavLink>
            <NavLink to={'/team'} className={classes.item}>Our Team</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
}

export default NavBar;
