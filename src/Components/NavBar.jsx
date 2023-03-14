import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
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
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
