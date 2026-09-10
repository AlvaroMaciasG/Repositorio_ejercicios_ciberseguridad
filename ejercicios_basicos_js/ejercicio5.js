const number1 = 10
const number2 = 20
const number3 = 2

// Ejemplo
if (number1 === 10) {
  console.log('number1 es estrictamente igual a 10')
}

// Condición 1: división
if (number2 / number1 === 2) {
  console.log('number2 dividido entre number1 es igual a 2')
}

// Condición 2: estrictamente distinto (!==)
if (number1 !== number2) {
  console.log('number1 es estrictamente distinto a number2')
}

// Condición 3: distinto (!= o !==)
if (number3 !== number1) {
  console.log('number3 es distinto number1')
}
