import { Component } from "react";
import "./App.css";

//Components
import NavBar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting="Bienvenido a Librería Claraboya" />
      </div>
    );
  }
}

export default App;
