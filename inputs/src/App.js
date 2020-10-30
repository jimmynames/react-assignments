import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'
import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {stateUsername: 'jimmy'};
  }

  handleUserInput = (event) => {
    console.log('change', event)
    let name = event.target.value
    this.setState({
      stateUsername: name
    })

  }

  render() {
    const { stateUsername } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserInput change={this.handleUserInput} name={stateUsername} />
          <UserOutput username={stateUsername} />
        </header>
      </div>
    );
  }

}

export default App;
