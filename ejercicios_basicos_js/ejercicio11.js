const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]

function averageWord(list) {
  let suma = 0

  for (let i = 0; i < list.length; i++) {
    let elemento = list[i]

    if (typeof elemento === 'number') {
      suma = suma + elemento
    } else {
      let cantidadDeLetras = elemento.length
      suma = suma + cantidadDeLetras
    }
  }

  let cantidadTotal = list.length
  let promedioFinal = suma / cantidadTotal

  return promedioFinal
}
