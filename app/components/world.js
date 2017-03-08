import world from '../images/world.png'

export default function World () {
  const img = document.createElement('img')
  img.src = world
  img.alt = 'World'

  return img
}

