export default function Button (text, onClick) {
  const button = document.createElement('button')
  const label = document.createTextNode(text)
  button.onclick = onClick
  button.appendChild(label)

  return button
}

