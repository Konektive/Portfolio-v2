import React from "react";
import styles from "./Main.module.css";
import reactIcon from "../assets/react.png";
import jsIcon from "../assets/javascript.jpg";
import typeIcon from "../assets/typescript.png";
import dockerIcon from "../assets/docker.png";
import responiveIcon from "../assets/responsive.jpg.png";

const Main = () => {
  return (
    <div className={styles.main}>
      <h1>Technologies I work With!</h1>

      <div className={styles.stack}>
        <div>
          <img src={reactIcon} alt="" />
        </div>
        <div>
          <img src={jsIcon} alt="" />
        </div>
        <div>
          <img src={typeIcon} alt="" />
        </div>
        <div>
          <img src={dockerIcon} alt="" />
        </div>
        <div>
          <img src={responiveIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
