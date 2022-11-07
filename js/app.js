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
  pintarCarrito()
}


const pintarCarrito = () =>{
  items.innerHTML = ` `;
  Object.values(carrito).forEach(producto => {
    templateCarrito.querySelector("th").textContent = producto.id
    templateCarrito.querySelector(".ti").textContent = producto.nombre
    templateCarrito.querySelector(".can").textContent = producto.cantidad
    templateCarrito.querySelector(".btn-info").dataset.id = producto.id
    templateCarrito.querySelector(".btn-danger").dataset.id = producto.id
    templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio

    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)
  })
  items.appendChild(fragment)
  
  pintarFotter()
}
const pintarFotter = () =>{
  footer.innerHTML = ''
  if(Object.keys(carrito).length === 0){
    footer.innerHTML = `<th scope="row" colspan="5">Carrito vacio - comience a comprar! </th>`
  } else {
    footer.innerHTML = `<th scope="row" colspan="2">Total Productos</th>`
  }
}