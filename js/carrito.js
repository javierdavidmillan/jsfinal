$(document).ready(function () {
  // levanta si tiene algo el LocalStorage USAR OPERADORES CLASE 12
  let carrito = [];
  let carritoLS = localStorage.getItem("carrito");
  if (carritoLS) {
    carrito = JSON.parse(carritoLS);
    mostrarTitulo();
  }
  else {
    mostrarCarritoVacio();}
  

  // carrito = JSON.parse(carritoLS);
  let precioTotal = 0;
  let htmlString;
  let contenedor = $("#carrito");
  htmlString = `<div class="row">`;
  for (const producto of carrito) {
    htmlString += `
  <div class=col-3>${producto.nombre}</div> 
  <div class=col-3> $${producto.precio}</div>
  <div class="col-3">espacio vacio</div>
  <button class="col-3 button" id=${producto.orderId} ><i class="fas fa-trash col-3"></i>Eliminar del carrito</button>
  `;
    precioTotal += parseInt(producto.precio);
  }
  htmlString += "</div>";
  contenedor.html(`${htmlString}`);

// ERRASE PRODUCT
  let btnEliminar = $(".button");
  btnEliminar.on("click", function () {
    let id = $(this).attr("id");
    let productoEliminar = carrito.find((p) => p.orderId === id);
    let index = carrito.indexOf(productoEliminar);
    carrito.splice(index, 1);
    saveCarrito();
    mostrarCarrito();
    console.log(carrito);
  });


  // Escribe el titulo del carrito en el html solo cuando se agrega el primer producto
  function mostrarTitulo() {
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = `
  <div class="col-3">Producto</div><div class="col-3">Precio</div>
  <div class="col-6"></div>
  
  `;
  }
  // muestra el precio total del carrito en el icono
  mostrarCarrito();
  function mostrarCarrito() {
    let contenedor = $("#totalCarrito");
    contenedor.html(``);
    precioTotal = 0;
    for (const producto of carrito) {
      precioTotal += parseInt(producto.precio);
    }
    if (precioTotal > 0) {
      let contenedorPrecios = $("#totalCarrito");
      contenedorPrecios.html(`$${precioTotal}`);
    }
  }
// funcion salva carrito en el localStorage
  function saveCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  // muestra carrito vacio
 function mostrarCarritoVacio() {
  let contenedor = $("#carrito");
  contenedor.html(`<div class="col-3">Carrito vacio</div>
  `);
}

  console.log("El DOM carrito.js esta listo");
  console.log(carrito);
  // console.log(mostrarCarritoVacio());
});
