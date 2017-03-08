import styles from './components/styles.css'
import Button from './components/button'
import Header from './components/header'
import World from './components/world'

document.body.appendChild(World())
document.body.appendChild(Header('Hello World'))
document.body.appendChild(Button('Play Song'))
