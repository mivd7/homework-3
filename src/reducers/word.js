import { NEW_GAME } from '../actions/newGame'
import {wordList} from '../lib/game'

export default (state = wordBank, { type, payload } = {}) => {
  switch(type) {
    case NEW_GAME :
      return wordList[Math.floor(Math.random() * wordBank.length)];
    default :
      return state
  }
}
