import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

export default class Hangman extends PureComponent {

  render() {
        return(
          <div>
          <p>Give Em Enough Rope!</p>
          <Link to="/"><button className="btn">Return</button></Link>
          </div>
        )
      }
}
