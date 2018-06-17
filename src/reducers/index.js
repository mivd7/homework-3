import { combineReducers } from 'redux'
import word from './word'
import guesses from './guesses'
import isWinner from './isWinner'

export default combineReducers({
  activeWord,
  wrongGuessCount,
  isWinner,
  wrongGuessLimit,
  gameFinished
})
