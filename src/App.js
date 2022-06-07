import { Component } from "react";
import "./App.css";

//Components
import NavBar from "./Components/Header/NavBar";
import ItemCount from "./Components/ItemListContainer/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting="Bienvenido a Librería Claraboya" />
        <ItemCount stock="5" initial="1" producto="Harry Potter" />
      </div>
    );
  }
}

export default App;
