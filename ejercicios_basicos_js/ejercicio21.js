const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

for (let i = 0; i < users.length; i++) {
  let usuario = users[i]

  if (usuario.years < 18) {
    console.log('Usuarios menores de edad: ' + usuario.name)
  }

  if (usuario.years >= 18) {
    console.log('Usuarios mayores de edad: ' + usuario.name)
  }
}
