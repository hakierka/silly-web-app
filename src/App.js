import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      value: '',
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  onInputChange = ({target}) => {
    const { value } = target;
    this.setState({value});
  };

  onKeyPress = ({charCode}) => {
    this.setState({ lastKeyPress: String.fromCharCode(charCode)});
    // test - preview last pressed keys in the console
    // console.log(String.fromCharCode(charCode));
  }

  render() {
    return (
      <div className="App">
        <input
          placeholder='Start typing'
          value={this.state.value}
          onChange={this.onInputChange}
          onKeyPress={this.onKeyPress}
          />
        <div>
          <p>Last key pressed was: {this.state.lastKeyPress}</p>
        </div>
      </div>
    );
  }
}

export default App;
