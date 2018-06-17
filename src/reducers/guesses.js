import { MAKE_GUESS } from '../actions/game'
import { NEW_GAME } from '../actions/game'
import { GAME_OVER } from '../actions/game'
import { IS_WINNER } from '../actions/game'


export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case NEW_GAME :
      return state = []
    case MAKE_GUESS :
      return state.concat(payload)
    case GAME_OVER :
      return state
    case IS_WINNER :
      return state
    default :
      return state
  }
}
