import React from "react";
import axios from "axios";
import { Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import  "../utils/Datepicker";
import { Datepick } from "../utils/Datepicker";
import { NumberPicker } from "../utils/NumberPicker";

let endpoint = "http://localhost:8080";

class ShipASale extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content 
          header="Ship a Sale" 
          meta="Fill up this form if you are packing an order that's going to be shipped out"
        />
        <Card.Content>
          <Card.Description>
            <Form>
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
        </Card.Content>
      </Card>
    );
  }
}

export default ShipASale;