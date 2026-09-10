const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function nameFinder(nameList, nombreABuscar) {
  for (let i = 0; i < nameList.length; i++) {
    let nombreActual = nameList[i]

    if (nombreActual === nombreABuscar) {
      return [true, i]
    }
  }
  return false
}

let busqueda1 = nameFinder(names, 'Logan')
console.log('Encuentra a Logan:', busqueda1)

let busqueda2 = nameFinder(names, 'Batman')
console.log('Como se llama el mejor superheroe', busqueda2)
