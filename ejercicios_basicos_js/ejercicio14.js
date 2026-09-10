const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]

function repeatCounter(list) {
  let contador = {}

  for (let i = 0; i < list.length; i++) {
    let palabra = list[i]

    if (contador[palabra] === undefined) {
      contador[palabra] = 1
    } else {
      contador[palabra] = contador[palabra] + 1
    }
  }

  return contador
}

let resultadoFinal = repeatCounter(words)
console.log(resultadoFinal)
