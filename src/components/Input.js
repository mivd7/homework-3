import * as React from 'react'
import {connect} from 'react-redux'
import {makeGuess} from '../actions/game.js'


class Input extends React.PureComponent {
  state = {}

  handleSubmit = (submitLetter) => {
    //submitLetter.preventDefault()
    //if (this.state.letter.length === 1) {
      //this.handleSubmit(this.state.letter.toLowerCase())
    this.setState({ letter: submitLetter })
    //}
  }

  handleChange = (submitLetter) => {
    this.setState({ [submitLetter.target.name]: submitLetter.target.value })
  }

render() {
    return (<div className="letterButtons" >
      <button className="guesses" onClick={this.handleSubmit('a')}>A</button>
      <button className="guesses" onClick={this.handleSubmit('b')}>B</button>
      <button className="guesses" onClick={this.handleSubmit('c')}>C</button>
      <button className="guesses" onClick={this.handleSubmit('d')}>D</button>
      <button className="guesses" onClick={this.handleSubmit('e')}>E</button>
      <button className="guesses" onClick={this.handleSubmit('f')}>F</button>
      <button className="guesses" onClick={this.handleSubmit('g')}>G</button>
      <button className="guesses" onClick={this.handleSubmit('h')}>H</button>
      <button className="guesses" onClick={this.handleSubmit('i')}>I</button>
      <button className="guesses" onClick={this.handleSubmit('j')}>J</button>
      <button className="guesses" onClick={this.handleSubmit('k')}>K</button>
      <button className="guesses" onClick={this.handleSubmit('l')}>L</button>
      <button className="guesses" onClick={this.handleSubmit('m')}>M</button>
      <button className="guesses" onClick={this.handleSubmit('n')}>N</button>
      <button className="guesses" onClick={this.handleSubmit('o')}>O</button>
      <button className="guesses" onClick={this.handleSubmit('p')}>P</button>
      <button className="guesses" onClick={this.handleSubmit('q')}>Q</button>
      <button className="guesses" onClick={this.handleSubmit('r')}>R</button>
      <button className="guesses" onClick={this.handleSubmit('s')}>S</button>
      <button className="guesses" onClick={this.handleSubmit('t')}>T</button>
      <button className="guesses" onClick={this.handleSubmit('u')}>U</button>
      <button className="guesses" onClick={this.handleSubmit('v')}>V</button>
      <button className="guesses" onClick={this.handleSubmit('w')}>W</button>
      <button className="guesses" onClick={this.handleSubmit('x')}>X</button>
      <button className="guesses" onClick={this.handleSubmit('y')}>Y</button>
      <button className="guesses" onClick={this.handleSubmit('z')}>Z</button>
    </div>)
  }
}

export default connect(null, {makeGuess} )(Input)
