const boton = document.createElement('button')
boton.id = 'btnToClick'
boton.textContent = 'Haz click'
document.body.appendChild(boton)

boton.addEventListener('click', function (evento) {
  console.log(evento)
})

const inputFocus = document.querySelector('.focus')
inputFocus.addEventListener('focus', function (evento) {
  console.log(evento.target.value)
})

const inputValue = document.querySelector('.value')
inputValue.addEventListener('input', function (evento) {
  console.log(evento.target.value)
})

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const listaUl = document.createElement('ul')

for (let i = 0; i < albums.length; i++) {
  const li = document.createElement('li')
  li.textContent = albums[i]
  listaUl.appendChild(li)
}

document.body.appendChild(listaUl)
