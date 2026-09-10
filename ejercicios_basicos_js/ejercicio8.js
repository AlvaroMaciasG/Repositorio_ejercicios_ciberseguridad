const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(stringList) {
  let palabraMasLarga = ''

  for (let i = 0; i < stringList.length; i++) {
    let palabraActual = stringList[i]

    if (palabraActual.length > palabraMasLarga.length) {
      palabraMasLarga = palabraActual
    }
  }
  return palabraMasLarga
}
