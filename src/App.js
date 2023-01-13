import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Main />
    </div>
  );
}

export default App;
