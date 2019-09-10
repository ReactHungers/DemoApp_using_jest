import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import Aux from './components/aux/Aux';

function HomePage() {
  return <Aux>
        <h4>Components tested using Jest Test Runner</h4>
        <ListGroup>
            <ListGroupItem><Link to="/demo">Sum of 3 and 5 is 8</Link></ListGroupItem>
            <ListGroupItem><Link to="/counter">Counter Increment/Decrement</Link></ListGroupItem>
            <ListGroupItem><Link to="/inputfieldtest">Input Field Test</Link></ListGroupItem>
        </ListGroup>
    </Aux>;
}

export default HomePage;
