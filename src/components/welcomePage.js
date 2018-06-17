import React from 'react'
import NewGameButton from './newGameButton'

const WelcomePage = (props) => {
  return (
    <div>
      <NewGameButton />
      <footer>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/sPkEYHlJ7gw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </footer>
    </div>
  )
}

export default WelcomePage
