import Header from "./components/Header";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <NavBar></NavBar>
      <Header></Header>
      <Main />
    </div>
  );
}

export default App;
