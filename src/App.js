import React from 'react';
import './App.css';
//components
import Intro from "./components/Intro";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userText: ""
    }
    this.updateUserText = this.updateUserText.bind(this);
  }

  updateUserText(value) {
    this.setState({userText: value});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi My Name Is {this.state.userText}</h1>
        <Intro updateUserText={this.updateUserText}/>
      </div>
    );
  }
}

export default App;
