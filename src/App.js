import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Index from './components/Index'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Index />
        <Footer />
      </div>
    );
  }
}

export default App;
