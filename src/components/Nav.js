/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import navLogo from "../assets/logo.jpg";
import styles from "./Nav.module.css";
import CV from "../assets/Krystian_Sporysz.pdf";

const Nav = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logoDiv}>
          <div className={styles.navImg}>
            <img src={navLogo} alt="" />
          </div>
          <h1>Krystian Sporysz</h1>
        </div>
        <div className={styles.controls}>
          <a href="">Home</a>
          <a href="">Projects</a>
          <a href="">Info</a>
          <a href="">Contact Me!</a>
          <a className={styles.cv} href={CV} download>
            <button className={styles.button}>
              <span className={styles.button_lg}>
                <span className={styles.button_sl}></span>
                <span className={styles.button_text}>Download CV!</span>
              </span>
            </button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
