import React from 'react';
import logo from './logo.svg';
import Demo from './components/demo/Demo';
import InputField from './components/InputField/InputField';
import Counter from './components/counter/Counter';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Demo Component</h4>
        <Demo firstVal="3" secondVal="5"/>
        <h4>Input Field Test Component</h4>
        <InputField 
          type="text" 
          name="username" 
          className="form-controls" 
          placeholder="Enter your username" 
          val="raman" 
        />
        <h4>Counter Component</h4>
        <Counter />
      </header>
    </div>
  );
}

export default HomePage;
