import React from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Nav></Nav>
      <MobileNav></MobileNav>
    </div>
  );
};

export default NavBar;
