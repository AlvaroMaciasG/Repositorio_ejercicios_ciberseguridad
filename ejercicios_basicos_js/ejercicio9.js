const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumNumbers(numberList) {
  let sumaTotal = 0

  // Bucle para lo del array
  for (let i = 0; i < numberList.length; i++) {
    let numeroActual = numberList[i]
    sumaTotal = sumaTotal + numeroActual
  }
  return sumaTotal
}
