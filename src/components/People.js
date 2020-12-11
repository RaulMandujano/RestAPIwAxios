import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => 
        <Card>
        <li>
          <Card.Header>Nombre: {person.name}<br /></Card.Header>
          <Card.Description>
          Email: {person.email}<br />
          Usuario: {person.username}<br />
          Phone: {person.phone}<br />
          Website: {person.website}<br /><br />
          <b>Address: {person.address.street}<br />
                    {person.address.suite}<br />
                    {person.address.city}<br />
                    {person.address.zipcode}<br /><br /> </b>
          <b>Company: {person.company.name}<br />
                    {person.company.catchPhrase}<br /> </b>
          </Card.Description>
          </li>
          </Card>
          )}
      </ul>

    )
  }
}