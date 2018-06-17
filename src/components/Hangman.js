import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import Input from './Input'

export default class Hangman extends PureComponent {
      render() {
        return(
          <div>
          <Link to="/"><button className="btn">Return</button></Link>
          </div>
        )
      }
}
