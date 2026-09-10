const cartoons = [
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
]

let oldestName = cartoons[0].name
let oldestYear = cartoons[0].debut

for (let i = 1; i < cartoons.length; i++) {
  if (cartoons[i].debut < oldestYear) {
    oldestYear = cartoons[i].debut
    oldestName = cartoons[i].name
  }
}

console.log(oldestName)
