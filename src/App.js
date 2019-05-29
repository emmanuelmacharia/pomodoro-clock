import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//COMPONENT IMPORTS
import Header from './components/Header'
import Footer from './components/Footer'
import Clock from './components/Clock'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path = '/' component = {Clock} />
        <Route exact path = '/about' component = {About} />
        {/* <Clock /> */}
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
