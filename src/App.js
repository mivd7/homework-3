import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import NewGameButton from './components/newGameButton.js'
import { Route } from 'react-router-dom'
import HangmanContainer from './components/HangmanContainer.js'
import WelcomePage from './components/welcomePage.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
          <h1>HungOver Hangman</h1>
          </header>
          <Route exact path="/" component={WelcomePage}/>
          <Route exact path="/hangman" component={HangmanContainer}/>
        </div>
      </Provider>
    );
  }
}

export default App;
