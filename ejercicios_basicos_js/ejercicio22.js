const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

let contadorFrutas = 0

for (let i = 0; i < foodSchedule.length; i++) {
  let comida = foodSchedule[i]

  if (comida.isVegan === false) {
    comida.name = fruits[contadorFrutas]
    comida.isVegan = true
    contadorFrutas = contadorFrutas + 1
  }
}

console.log(foodSchedule)
