const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
}

for (let propiedad in alien) {
  console.log(
    'La propiedad ' + propiedad + ' tiene cómo valor: ' + alien[propiedad]
  )
}
