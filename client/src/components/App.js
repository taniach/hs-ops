import React from "react";
import "./App.css";

import { Container, Button, Header, Icon, Grid } from "semantic-ui-react";

import ShipASale from "./ShipASale";

function App() {
  return (
    <Container>

      <Grid>
        <Grid.Column textAlign="center">
          <Header as='h2' icon>
            <Icon name='boxes' />
              Welcome to HS Ops
              <Header.Subheader>
                Manage your sales, inventory and logistics all under 1 roof
              </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid>

      <Grid columns={6}>
        <Grid.Row>
          <Grid.Column>
            <Button color='purple'>Ship a Sale</Button>
          </Grid.Column>
          <Grid.Column>
            <Button color='blue'>View Sales</Button>
          </Grid.Column>
          <Grid.Column>
            <Button color='teal'>Mix Packets</Button>
          </Grid.Column>
          <Grid.Column>
            <Button color='olive'>Purchase Stocks</Button>
          </Grid.Column>
          <Grid.Column>
            <Button color='orange'>View Inventory</Button>
          </Grid.Column>
          <Grid.Column>
            <Button color='yellow'>Manual Update</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
      <ShipASale/>
    </Container>
  );
}

export default App;