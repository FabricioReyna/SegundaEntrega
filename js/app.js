let body = document.getElementById("body");
let nombre = prompt(
  "Hola bienvenido porfavor introduzca su nombre asi se a quien me dirijo"
);
if (nombre == "") {
  body.innerHTML = ` <div><h1 class="center">Bienvenido Usuario</h1></div>
        <div class="card-padre"><div class="card ey" style="width: 18rem;" id="card">
<img src="https://jumboargentina.vtexassets.com/arquivos/ids/711224/Yerba-Mate-Playadito-Suave-X1kg-1-854539.jpg?v=637938633804770000" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>
<div class="btn">
    <input type="button" value="Comprar" id="Buton" class="btn-edit">
</div>`;
} else {
  body.innerHTML = ` <div><h1 class="center">Bienvenido ${nombre}</h1></div>
<div class="card-padre"><div class="card ey" style="width: 18rem;" id="card">
<img src="https://jumboargentina.vtexassets.com/arquivos/ids/711224/Yerba-Mate-Playadito-Suave-X1kg-1-854539.jpg?v=637938633804770000" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>
<div class="btn">
    <input type="button" value="Comprar" id="Buton" class="btn-edit">
</div>`;
}

let card = document.getElementById("card");

card.innerHTML = `
<div class="card-padre"><div class="card ey" style="width: 18rem;" id="card">
<img src="https://jumboargentina.vtexassets.com/arquivos/ids/711224/Yerba-Mate-Playadito-Suave-X1kg-1-854539.jpg?v=637938633804770000" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Yerba Playadito</h5>
  <p class="card-text">Yerba mate Playadito suave con palo 1 kg</p>
  <p class="card-text">$ 774</p>

  

</div>
</div>
<div class="card ey" style="width: 18rem;" id="card">
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Mate_en_calabaza.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Mate</h5>
  <p class="card-text">Un tradicional mate de calabaza y con una bombilla</p>
  <p class="card-text">$ 824</p>

</div>
</div>
<div class="card ey" style="width: 18rem;" id="card">
<img src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/176/840/products/en-edulcorante-hileret-stevia-forte-con-zinc-100-sobrecitos-001-5a2af6d7098b72776516402617626831-640-0.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Hileret Stevia Forte</h5>
  <p class="card-text">Edulcorante Hileret Stevia Forte con Zinc 100 Sobrecitos</p>
  <p class="card-text">$ 421</p>

  
</div>
</div>
<div class="card ey" style="width: 18rem;" id="card">
<img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/086/894/products/latas_mesa-de-trabajo-1-copia-631-34b39de37986a4853615906067264200-1024-1024.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Juego Latas Yerbera y Azucarera</h5>
  <p class="card-text">$1.200</p>

</div>
</div>
</div>
`;

const btn = document.getElementById("Buton");

      btn.addEventListener("click", function ProductosExtemis() {
  class Productos {
    constructor(id, nombre, descrpicion, precio) {
      this.id = id;
      this.nombre = nombre;
      this.descrpicion = descrpicion;
      this.precio = precio;
    }
  }

  const productos0 = new Productos(
    0,
    "Yerba Playadito",
    "Suave con palo 1 kg",
    774
  );
  const productos1 = new Productos(
    1,
    "Mate",
    " De calabaza y con una bombilla",
     824
  );
  const productos2 = new Productos(
    2,
    "Hileret Stevia Forte",
    "Zinc 100 Sobrecitos",
    421
  );
  const productos3 = new Productos(
    3,
    "Juego Latas Yerbera y Azucarera",
    "a ",
    1200
  );

  const productosMi = [productos0, productos1, productos2, productos3];


  let screenText = "Productos disponibles, seleccione el numero que desea: \n";
  for (productos of productosMi) {
    screenText += `${productos.id} - ${productos.nombre} ${productos.descrpicion}  a un precio de  ${productos.precio} \n`;
  }
  let opcionUser = parseInt(prompt(screenText));

  const Productoselegidos = productosMi.find(
    (notebook) => notebook.id === opcionUser
  );

  if ((opcionUser = Productoselegidos)) {
    const iva = Productoselegidos.precio * 0.21
    const precios = iva + Productoselegidos.precio
    Math.round(precios)
    alert(
      `El producto ${Productoselegidos.nombre} de la descripcion  ${Productoselegidos.descrpicion} y un precio de $ ${precios} fue agregada al carrito exitosamente!`
    );
1  } else {
    alert(
      "   Lamentamos las molestias, pero el dato ingresado no corresponde a un id de los productos anteriores"
    );
  }
}
      )
