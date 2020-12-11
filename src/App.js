import React, { useState, useEffect } from 'react';

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';


function App() {
  const [people, setPeople] = useState({
    loading: false,
    people: [],
  });

  const [loading, setLoading] = useState(true);

  
    async function fetchPeople() {
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

  useEffect(() => {
    fetchPeople();

  }, []);
  return (
    <>
      <Router>
        <Navbar />
          <Container>
            {loading ? (
              <Dimmer>
            <Loader inverted>loading</Loader>
              </Dimmer>
              ) : (
                <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/people'>
                <People data={people}/>
              </Route>
             
                </Switch>
            )}
          </Container>
      </Router>
    </>
  );
}


export default App;