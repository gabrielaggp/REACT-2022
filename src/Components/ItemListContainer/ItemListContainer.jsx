import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
    fetch('./Productos.json')
      .then(resp => resp.json())
      .then((result) => setItems(result))
      .catch((err) => console.log(err));
    }, 2000)
  }, []);

  return (
    <>
      <h2 className="masVendidos">Libros más vendidos del mes</h2>
      <ItemList items={items} />
    </>
  );
};
export default ItemListContainer;