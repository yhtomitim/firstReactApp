import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Index from './components/Index'
import Footer from './components/Footer'

class App extends Component {
  //can take props, but if it's at the highest level, nothing to pass!
  constructor(props) {
    super(props);
    this.state = {
      welcome: "Hello there,",
      name: "Tim",
      newName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ newName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.newName);
    return this.setState({name: this.newName})
  // fetch req here?;
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Index
          welcome={this.state.welcome}
          name={this.state.name} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">New User:</label>
          <input
            type="text"
            value={this.state.newName}
            onChange={this.handleChange}/>
          <button type="submit">Change User</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default App;
