import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import GitHubIcon from "@material-ui/icons/GitHub";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SideDrawer from "./SideDrawer";
import { Fragment } from "react";
import Backdrop from "../layout/Backdrop";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
function Nav() {
  const [show, handleShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const ctx = useContext(ThemeContext);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const showDrawerHandler = () => {
    setShowMenu(true);
  };
  const closeDrawerHandler = () => {
    setShowMenu(false);
  };

  return (
    <Fragment>
      {showMenu && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer onClick={closeDrawerHandler} show={showMenu} />
      <nav className={`${classes.nav} ${show && classes.nav__black}`}>
        <div className={classes.left}>
          <span className={classes.hamburger} onClick={showDrawerHandler}>
            <MenuIcon />
          </span>
          <Link to="/">
            <p className={classes.nav__name}>H M</p>
          </Link>
        </div>
        <ul className={classes.nav__ul}>
          <li>
            <NavLink to="/" activeClassName={classes.selected} exact>
              <HomeIcon />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={classes.selected}>
              <InfoIcon />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName={classes.selected}>
              <AssignmentIcon />
              Projects
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.github.com/harshmalviya"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
              Github
            </a>
          </li>
          <li>
            <p onClick={ctx.toggleThemeHandler} className={classes.toggle}>
              {ctx.darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </p>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Nav;
