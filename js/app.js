const cards = document.getElementById("cards");
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const templateCard = document.getElementById("template-card").content
const templateFooter = document.getElementById("template-footer").content
const templateCarrito = document.getElementById("template-carrito").content
const fragment = document.createDocumentFragment()
let carrito = []

document.addEventListener('DOMContentLoaded', () => {
  fetchData()
})
cards.addEventListener("click", e =>{
  addCarrito(e)
})

const fetchData = async() => {
  try {
    const res = await fetch('./js/api.json')
    const data =  await res.json()
    pintCard(data)
  } catch (error) {
    console.log(error)
  }
}

const pintCard = data =>{ 
  data.forEach(producto => {
      templateCard.querySelector('h5').textContent = producto.nombre;
      templateCard.querySelector('.descripcion').textContent = producto.descripcion;
      templateCard.querySelector('.precio').textContent = producto.precio;
      templateCard.querySelector('img').setAttribute("src", producto.imagen);
      templateCard.querySelector(".btn-dark").dataset.id = producto.id;
      const clone = templateCard.cloneNode(true)
      fragment.appendChild(clone)
  })
  cards.appendChild(fragment)
}

const addCarrito = e => {
  // console.log(e.target)
  // console.log(e.target.classList.contains("btn-dark"))
  if(e.target.classList.contains("btn-dark")){
   setCarrito(e.target.parentElement)
  }
  e.stopPropagation()
}

const setCarrito = objeto =>{
  console.log(objeto)
  const producto = {
    id: objeto.querySelector('.btn-dark').dataset.id,
    nombre: objeto.querySelector('h5').textContent,
    precio: objeto.querySelector('.precio').textContent,
    cantidad: 1
  }

  if(carrito.hasOwnProperty(producto.id)){
    producto.cantidad = carrito[producto.id].cantidad + 1
  }
  carrito[producto.id] = {...producto}
  console.log(producto)
}












































// const btn = document.getElementById("Buton");

//       btn.addEventListener("click", function ProductosExtemis() {
//   class Productos {
//     constructor(id, nombre, descrpicion, precio) {
//       this.id = id;
//       this.nombre = nombre;
//       this.descrpicion = descrpicion;
//       this.precio = precio;
//     }
//   }

//   const productos0 = new Productos(
//     0,
//     "Yerba Playadito",
//     "Suave con palo 1 kg",
//     774
//   );
//   const productos1 = new Productos(
//     1,
//     "Mate",
//     " De calabaza y con una bombilla",
//      824
//   );
//   const productos2 = new Productos(
//     2,
//     "Hileret Stevia Forte",
//     "Zinc 100 Sobrecitos",
//     421
//   );
//   const productos3 = new Productos(
//     3,
//     "Juego Latas Yerbera y Azucarera",
//     "a ",
//     1200
//   );

//   const productosMi = [productos0, productos1, productos2, productos3];


//   let screenText = "Productos disponibles, seleccione el numero que desea: \n";
//   for (productos of productosMi) {
//     screenText += `${productos.id} - ${productos.nombre} ${productos.descrpicion}  a un precio de  ${productos.precio} \n`;
//   }
//   let opcionUser = parseInt(prompt(screenText));

//   const Productoselegidos = productosMi.find(
//     (notebook) => notebook.id === opcionUser
//   );

//   if ((opcionUser = Productoselegidos)) {
//     const iva = Productoselegidos.precio * 0.21
//     const precios = iva + Productoselegidos.precio
//     Math.trunc(precios)
//     let contenedor = document.createElement("div");
//     contenedor.classList.add("container")
 
//     contenedor.innerHTML =
//       `<p class = "MensajeDeCompra">El producto ${Productoselegidos.nombre} de la descripcion  ${Productoselegidos.descrpicion} y un precio de $ ${precios} fue agregada al carrito exitosamente!</p>`
//     ;
//     document.body.appendChild(contenedor) 
//     console.log(contenedor)
  
// 1  } else {
//     alert(
//       "   Lamentamos las molestias, pero el dato ingresado no corresponde a un id de los productos anteriores"
//     );
//   }
// }
//       )

// console.log(btn)


// const productos1 = { id:2, productos: "Arroz"};
// const ejson = JSON.stringify(productos1);
// const parse = JSON.parse(ejson)
// console.log(ejson);
// console.log(typeof productos1);
// console.log(typeof ejson);
// console.log(typeof parse)
// console.log(productos1.id)

// localStorage.setItem("producto1", ejson)

// const productos2 = JSON.parse(localStorage.getItem("producto1"))
// console.log(productos2.id)
// // localStorage.setItem('hola', productos1)