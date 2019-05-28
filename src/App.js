import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//COMPONENT IMPORTS
import Header from './components/Header'
import Footer from './components/Footer'
import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Clock />
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
