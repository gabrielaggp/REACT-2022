import { Component } from "react";
import "./App.css";

//Components
import NavBar from "./Components/Header/NavBar";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';


class App extends Component {
  render(){
  return (
    <div className="App">
      <NavBar />
      <main>
      <ItemListContainer/> 
      </main>  
      <ItemDetailContainer />

   </div>
    
  );}
}

export default App;