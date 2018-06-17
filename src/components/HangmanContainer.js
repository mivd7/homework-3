import * as React from 'react'
import Hangman from './Hangman'
import Input from './Input'
import * as Logic from  '../lib/game'
import {connect} from 'react-redux'
import {newGame} from '../actions/game'


class HangmanContainer extends React.PureComponent {
  state = {
  }

  componentDidMount(){
    this.startNewGame()
  }

  startNewGame =() => {
    const randomword = Logic.randomWord()
    this.props.newGame(randomword)
  }


  render() {
  //const guessedWord = Logic.randomWord()
  const guessedWord = "ASBSHBJF"
  const guessedLetters = []

    if(this.props.word==='') {
      return 'Loading...'
    }else {
      return (<div>
        {Logic.showGuess(guessedWord, guessedLetters)}
        <Input />
        <button onClick = {this.startNewGame}>Start New Game</button>
        <Hangman />
      </div>
    )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    word: state.word,
    guesses: state.guesses
  }
}

export default connect(mapStateToProps, {newGame} )(HangmanContainer)
