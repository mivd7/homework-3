import { IS_WINNER } from '../actions/game'

export default (state = false, action = {}) => {
  switch (action.type) {
  case :
    return action.payload
  default: return state
  }
}
