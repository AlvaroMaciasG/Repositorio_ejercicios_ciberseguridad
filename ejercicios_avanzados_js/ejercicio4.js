const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1
}

console.log(findArrayIndex(mainCharacters, 'Han Solo'))
console.log(findArrayIndex(mainCharacters, 'Anakin'))

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1
}
// Segunda parte

function removeItem(array, text) {
  let index = findArrayIndex(array, text)

  if (index !== -1) {
    array.splice(index, 1)
  }

  return array
}

let mainCharacters2 = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

console.log(removeItem(mainCharacters2, 'Han Solo'))
console.log(removeItem(mainCharacters2, 'Anakin'))
console.log(removeItem(mainCharacters2, 'Yoda'))
