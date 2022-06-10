import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.length
        ? items.map((items) => <Item item={items} key={items.id} />)
        : "Cargando libros..."}
    </>
  );
};

export default ItemList;