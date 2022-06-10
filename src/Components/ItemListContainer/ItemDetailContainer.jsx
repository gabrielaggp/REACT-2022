import { useState, useEffect } from "react";
import ItemDetail from "../ItemListContainer/ItemDetail";

const ItemDetailContainer = () => {
  const [libro, setLibro] = useState([]);
  
  useEffect(() => {
    setTimeout(() => {
      fetch('./Productos.json')
          .then(response => response.json())
          .then((result) => setLibro(result[0]))
          .catch((err) => console.log(err));
    }, 2000)
  }, [])
  
  return <ItemDetail item={libro} />;
};

export default ItemDetailContainer;
