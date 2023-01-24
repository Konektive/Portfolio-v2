import styles from "./Main.module.css";
import reactIcon from "../assets/react.png";
import jsIcon from "../assets/javascript.jpg";
import typeIcon from "../assets/typescript.png";
import dockerIcon from "../assets/docker.png";
import responiveIcon from "../assets/responsive.jpg.png";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const { ref: stackRef, inView: stackIsVisible } = useInView();

  return (
    <div className={`${styles.main}`}>
      <h1>Technologies I work With!</h1>

      <div ref={stackRef} className={styles.stack}>
        <div className={`${styles.logo} ${stackIsVisible ? styles.show : ""}`}>
          <img src={reactIcon} alt="" />
          <h2>React</h2>
        </div>
        <div className={`${stackIsVisible ? styles.show : ""}`}>
          <img src={jsIcon} alt="" />
          <h2>JavaScript</h2>
        </div>
        <div className={`${stackIsVisible ? styles.show : ""}`}>
          <img src={typeIcon} alt="" />
          <h2>TypeScript</h2>
        </div>
        <div className={`${stackIsVisible ? styles.show : ""}`}>
          <img src={dockerIcon} alt="" />
          <h2>Docker</h2>
        </div>
        <div className={`${stackIsVisible ? styles.show : ""}`}>
          <img src={responiveIcon} alt="" />
          <h2>RWD</h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
