import { Card, Image, Button, Icon } from "semantic-ui-react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="detail">
      <h2>Detalle del libro seleccionado</h2>
      <div class="ui centered card">
        <Card key={item.id}>
          <div>
            <Image className="img" src={item.pictureUrl} wrapped ui={false} />
          </div>
          <Card.Content>
            <Card.Header>
              <div className="titulo">{item.title}</div>
            </Card.Header>
            <Card.Meta>$ {item.price}</Card.Meta>
            <Card.Description>{item.category}</Card.Description>
            <Card.Description>{item.description}</Card.Description>
          </Card.Content>
          <ItemCount stock="5" initial="1" />
          <Button animated="vertical">
            <Button.Content hidden>Shop</Button.Content>
            <Button.Content visible>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;