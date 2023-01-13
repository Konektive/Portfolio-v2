import React from "react";
import background from "../assets/dev.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.img}>
        <img src={background} alt="Dev" />
      </div>
    </>
  );
};

export default Header;
