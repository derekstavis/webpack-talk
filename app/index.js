import styles from './components/styles.css'
import Button from './components/button'
import Header from './components/header'
import World from './components/world'

function playSong () {
  require.ensure(['./audio/theworld.mp3'], () => {
    const file = require('./audio/theworld.mp3')
    new Audio(file).play()
  })
}

document.body.appendChild(World())
document.body.appendChild(Header('Hello World'))
document.body.appendChild(Button('Play Song', playSong))
