const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(list) {
  let arraySinDuplicados = []

  for (let i = 0; i < list.length; i++) {
    let comida = list[i]

    if (arraySinDuplicados.includes(comida) === false) {
      arraySinDuplicados.push(comida)
    }
  }
  return arraySinDuplicados
}
