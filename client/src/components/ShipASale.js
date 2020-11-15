import React from "react";
import axios from "axios";
import { Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import  "../utils/Datepicker";
import { Datepick } from "../utils/Datepicker";
import { NumberPicker } from "../utils/NumberPicker";

let endpoint = "http://localhost:8080";

class ShipASale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = () => {
    this.getTask();
  };

  getTask = () => {
    axios.get(endpoint + "/api/sales").then(res => {
      console.log(res);
      if (res.data) {
        this.setState({
          items: res.data.map(item => {
            return (
              <Card>
                <Card.Content>
                  {item.customername}
                </Card.Content>
              </Card>
            );
          })
        });
      } else {
        this.setState({
          items: []
        });
      }
    });
  };

  render() {
    return (
      <Card>
        <Card.Content 
          header="Ship a Sale" 
          meta="Fill up this form if you are packing an order that's going to be shipped out"
        />
        <Card.Content>
          <Card.Description>
            <Form onSubmit={this.onSubmit}>
              <Form.Field>
                <label>Date of Order</label>
                <Datepick></Datepick>
              </Form.Field>
              
              <Form.Field>
                <label>Customer Name</label>
                <input placeholder='Customer Name' />
              </Form.Field>

              <Form.Field>
                <label>Number of Packets</label>
                <NumberPicker></NumberPicker>
              </Form.Field>

              <Form.Field>
                <label>Number of Brochures</label>
                <NumberPicker></NumberPicker>
              </Form.Field>

              <Form.Group grouped>
                <label>Platform</label>
                <Form.Field
                  label='Shopify Website'
                  control='input'
                  type='radio'
                  name='htmlRadios'
                />
                <Form.Field
                  label='Cash on Delivery Form'
                  control='input'
                  type='radio'
                  name='htmlRadios'
                />

                <Form.Field
                  label='Direct Message/PayNow'
                  control='input'
                  type='radio'
                  name='htmlRadios'
                />
                <Form.Field
                  label='Lazada'
                  control='input'
                  type='radio'
                  name='htmlRadios'
                />

                <Form.Field
                  label='Bulbs'
                  control='input'
                  type='radio'
                  name='htmlRadios'
                />
                <Form.Field
                  label='Naiise'
                  control='input'
                  type='radio'
                  name='htmlRadios'
                />
              </Form.Group>
              
              <Button type='submit'>Submit</Button>
            </Form>
          </Card.Description>

          {this.state.items}
        </Card.Content>
      </Card>
      
    );
  }
}

export default ShipASale;