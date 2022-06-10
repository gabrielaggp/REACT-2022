import { useState } from "react";
import { Button, Icon, Grid, Placeholder, Segment } from "semantic-ui-react";

const ItemCount = ({ stock, initial, producto }) => {
  const [counter, setCounter] = useState(parseInt(initial));

  const add = () => {
    if (stock <= 0) {
      alert(
        "Lo lamentamos mucho, momentaneamente no contamos con stock de este producto"
      );
    } else if (counter < stock) {
      setCounter(counter + 1);
    } else if (counter >= stock) {
      alert("Llegaste al limite del stock disponible.");
    }
  };

  const remove = () => {
    counter > 1 && setCounter(counter - 1)
  };

  return (
    <>
      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <h3>{producto}</h3>

              <div>
                <Button onClick={remove} icon labelPosition="left" color="red">
                  <Icon name="remove" />
                  Eliminar
                </Button>

                <span>
                  <h3>{counter}</h3>
                </span>

                <Button onClick={add} icon labelPosition="left" color="green">
                  <Icon name="add" />
                  Agregar
                </Button>
              </div>

              <Button animated="vertical">
                <Button.Content hidden>Shop</Button.Content>
                <Button.Content visible>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
              
            </Placeholder>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default ItemCount;