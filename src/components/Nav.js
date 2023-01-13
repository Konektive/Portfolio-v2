import React from "react";
import navLogo from "../assets/logo.jpg";
import styles from "./Nav.module.css";

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
          <button class={styles.button}>
            <span class={styles.button_lg}>
              <span class={styles.button_sl}></span>
              <span class={styles.button_text}>Download CV!</span>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
