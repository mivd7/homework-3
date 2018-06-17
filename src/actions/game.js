import {randomWord} from '../lib/game.js'

export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'
export const IS_WINNER = 'SET_WORD'
export const GAME_OVER = 'GAME_OVER'

export function newGame(word, guesses) {
  const random = randomWord().toString()
  return {
    type: NEW_GAME,
    payload: {
      word: random,
      guesses: []
    }
  }
}

export function makeGuess(guesses) {
  return {
    type: MAKE_GUESS,
    payload: guesses
  }
}

export const isWinner = boolean => {
  return {
    type: IS_WINNER,
    payload: boolean
  }
}

export function gameOver() {
  return {
    type: GAME_OVER
  }
}
