import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  render() {


    let url = 'https://api.covid19india.org/data.json';

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this full data ! ', out);
})
.catch(err => { throw err });


axios.get('https://api.covid19india.org/state_district_wise.json')
  .then(function (response) {
    console.log('checkout district wise data',response);
  })
  .catch(function (error) {
    console.log(error);
  });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
