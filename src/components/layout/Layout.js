import React from "react";
import { Fragment } from "react";
import Nav from "../header/Nav";
import Footer from "../footer/Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <header>
        <Nav />
      </header>
      <main className={classes.main}>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;
