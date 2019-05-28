import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//COMPONENT IMPORTS
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
      
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;