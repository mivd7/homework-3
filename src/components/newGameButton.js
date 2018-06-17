import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {newGame} from '../actions/game'
import { Link } from 'react-router-dom';

class NewGameButton extends PureComponent {

  reset() {
    this.props.newGame()
  }


  render() {
    return(
      <button key={newGame}>
              <Link to={ `/hangman` }>Start playing!</Link>
      </button>
    )
  }
}


export default connect(null, { newGame })(NewGameButton)
