JavaScript

function rollDice(faces) {
  let randomNum = Math.random()
  let result = Math.floor(randomNum * faces) + 1
  return result
}

console.log(rollDice(6))
console.log(rollDice(10))
console.log(rollDice(20))
