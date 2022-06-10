import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="BooksContainer">
      <Card>
        <div>
          <Image className="img" src={item.pictureUrl} wrapped ui={true} />
        </div>
        <Card.Content>
          <Card.Header>
            <div className="titulo">{item.title}</div>
          </Card.Header>
          <Card.Description>{item.category}</Card.Description>
        </Card.Content>
        <button>Ver detalles</button>
      </Card>
    </div>
  );
};

export default Item;