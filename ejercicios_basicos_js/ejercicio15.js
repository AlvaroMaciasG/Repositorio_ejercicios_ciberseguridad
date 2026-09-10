const products = [
  'Camiseta de Metallica',
  'Pantalón vaquero',
  'Gorra de beisbol',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]

for (let i = 0; i < products.length; i++) {
  let producto = products[i]

  if (producto.includes('Camiseta')) {
    console.log(producto)
  }
}
