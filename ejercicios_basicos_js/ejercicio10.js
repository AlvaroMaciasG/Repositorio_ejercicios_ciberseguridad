const numbers = [12, 21, 38, 5, 45, 37, 6]

function average(numberList) {
  let suma = 0

  for (let i = 0; i < numberList.length; i++) {
    let numeroActual = numberList[i]
    suma = suma + numeroActual
  }
  let promedio = suma / numberList.length
  return promedio
}
