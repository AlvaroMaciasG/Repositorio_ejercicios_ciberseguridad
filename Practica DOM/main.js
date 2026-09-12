// Array
const products = [
  {
    name: 'Zapatillas deportivas',
    price: 45,
    seller: 'Deportes Agila',
    image:
      'https://www.pexels.com/es-es/foto/zapatillas-blancas-sobre-superficie-de-cuero-marron-33629872/'
  },
  {
    name: 'Camiseta algodón',
    price: 15,
    seller: 'Evaristo Garcia',
    image:
      'https://www.pexels.com/es-es/foto/colorido-de-colores-linea-ropa-8146451/'
  },
  {
    name: 'Pantalón vaquero',
    price: 30,
    seller: 'John Wayne',
    image:
      'https://www.pexels.com/es-es/foto/pantalones-vaqueros-acampanados-de-mezclilla-a-la-moda-con-costuras-decorativas-39078904/'
  },
  {
    name: 'Reloj Casio',
    price: 25,
    seller: 'Joyeria japonesa',
    image:
      'https://www.pexels.com/es-es/foto/reloj-digital-clasico-sobre-tela-oscura-34425625/'
  },
  {
    name: 'Gafas de sol',
    price: 20,
    seller: 'Óptica Rompetechos',
    image:
      'https://www.pexels.com/es-es/foto/elegantes-gafas-de-sol-de-aviador-azules-sobre-fondo-blanco-32677238/'
  },
  {
    name: 'Mochila escolar',
    price: 35,
    seller: 'El Corte Frances',
    image:
      'https://www.pexels.com/es-es/foto/nina-tejanos-pantalones-tejanos-adolescente-8004811/'
  },
  {
    name: 'Gorra baseball',
    price: 10,
    seller: 'Deportes USA',
    image:
      'https://www.pexels.com/es-es/foto/patinador-con-sombrero-y-patineta-estilo-grafiti-36319080/'
  },
  {
    name: 'Calcetines (Pack 3)',
    price: 8,
    seller: 'Bazar ',
    image:
      'https://www.pexels.com/es-es/foto/piernas-patas-colorido-de-colores-15195384/'
  },
  {
    name: 'Sudadera con capucha',
    price: 40,
    seller: 'Swag Store',
    image:
      'https://www.pexels.com/es-es/foto/jovenes-adultos-con-elegantes-sudaderas-al-aire-libre-31052880/'
  },
  {
    name: 'Botas de montaña',
    price: 60,
    seller: 'Pico Nevado S.L.',
    image:
      'https://www.pexels.com/es-es/foto/una-persona-con-zapatos-amarillos-y-negros-para-caminar-en-la-cima-de-una-montana-18331821/'
  }
]

const contenedorProductos = document.querySelector('#seccion-productos')

for (let i = 0; i < products.length; i++) {
  let productoActual = products[i]

  let divCarta = document.createElement('div')
  divCarta.className = 'carta'

  let contenidoHTML = `
    <img src="${productoActual.image}" alt="${productoActual.name}">
    <h3>${productoActual.name}</h3>
    <p>Precio: ${productoActual.price} €</p>
    <p>Vendido por: ${productoActual.seller}</p>
  `
  divCarta.innerHTML = contenidoHTML

  contenedorProductos.appendChild(divCarta)
}
