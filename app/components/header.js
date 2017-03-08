export default function Header (text) {
  const h1 = document.createElement('h1')
  const txt = document.createTextNode(text)
  h1.appendChild(txt)

  return h1
}

