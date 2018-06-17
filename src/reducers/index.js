import { combineReducers } from 'redux'
import guessedLetters from './guessedLetters'
import wordGuess from './wordGuess'

export default combineReducers({
  guessedLetters,
  wordGuess
})
