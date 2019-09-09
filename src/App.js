import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './components/demo/Demo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Demo Component</h4>
        <Demo firstVal="3" secondVal="5"/>
      </header>
    </div>
  );
}

export default App;
