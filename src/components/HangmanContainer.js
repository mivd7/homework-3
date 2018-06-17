import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import Hangman from './Hangman'
import {IS_WINNER} from '../actions/game.js' 

class HangmanContainer extends PureComponent {
    gameStatus(props) {
      const { isWinner } = this.props

      if (isWinner === null) return (
        <div className="gameProgress">
          <Hangman />
        </div>
      )

      if (!isWinner) return (
        <div className="gameOver">
          <p>'You got hung!'</p>
        </div>
      )

      if (isWinner) return (
        <div className="winner">
          <p>'EPIC WIN!'</p>
        </div>
      )
    }


    render() {
      return(
        <div

        </div>
      )
    }
  }

  const mapStateToProps = ( { isWinner } ) => {
    return {
      isWinner
    }
  }
  export default connect(mapStateToProps)(HangmanContainer)
