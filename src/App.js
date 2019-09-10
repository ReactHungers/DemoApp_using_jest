import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Demo from './components/demo/Demo';
import InputField from './components/InputField/InputField';
import Counter from './components/counter/Counter';
import HomePage from './HomePage';
import LandingPage from './components/landingpage/LandingPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/Counter" component={Counter} />
      <Route path="/inputfieldtest" component={InputField} />
      <Route path="/demo" component={Demo} />
    </Router>
  );
}

export default App;
