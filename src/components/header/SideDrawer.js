import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";
import classes from "./SideDrawer.module.css";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import GitHubIcon from "@material-ui/icons/GitHub";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { CSSTransition } from "react-transition-group";
import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
function SideDrawer(props) {
  const ctx = useContext(ThemeContext);
  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.SideDrawer} onClick={props.onClick}>
        <div className={classes.logo}>
          <Link to="/">
            <p>H M</p>
          </Link>
          <p onClick={ctx.toggleThemeHandler} className={classes.toggle}>
            {ctx.darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </p>
        </div>
        <ul className={classes.list}>
          <li>
            <HomeIcon />
            <NavLink to="/" activeClassName={classes.selected} exact>
              Home
            </NavLink>
          </li>
          <li>
            <InfoIcon />
            <NavLink activeClassName={classes.selected} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <AssignmentIcon />
            <NavLink activeClassName={classes.selected} to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <GitHubIcon />
            <a
              href="https://www.github.com/harshmalviya"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </CSSTransition>,
    document.getElementById("drawer-hook")
  );
}

export default SideDrawer;
