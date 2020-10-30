import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent'
import CharComponent from './Components/CharComponent'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textLength: 0,
      textValue: ''
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value
    let count = value.split('').length
    let letters = value.split('')
    this.setState({
      textLength: count,
      textValue: value,
      splitLetters: letters
    })

  }

  handleCharClick = (i) => {
    console.log('click', i)
    const letters = [...this.state.splitLetters]
    console.log('letters', letters)
    letters.splice(i, 1)
    this.setState({splitLetters: letters})
  }

  render() {
    const { textLength, textValue, splitLetters } = this.state

    let letters = textValue.split('')


    const renderLetters = () => {
      letters.map((letter, i) => {
        console.log('letter:', letter)
        return (
          <CharComponent className='CharComponent' value={letter} />
        )
      })
    }


    return (
      <div>
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>

      <input type="text" onChange={this.handleInputChange} />
      <ValidationComponent length={textLength} />

      {
      splitLetters ? 
        splitLetters.map((letter, i) => {
          console.log('letter:', letter)
          return (
            <CharComponent className='CharComponent' value={letter} click={() => this.handleCharClick(i)} />
          )
        }) : null
      }

      </div>
    );
  }
}

export default App;
