$(document).ready(function () {
  // constructor
  class cart {
    constructor(nombre, precio, cantidad, orderId) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
      this.orderId = orderId;
    }
  }

  // JSON
  const url =
    "entregaFinal/jsJavierMillanDesafio/js/productos.json";
    let productos = [];
  getUrl();
  function getUrl() {
    $.get(url, function (data) {
      productos = data;
    });
    // console.log(productos);
  }

  // variables globales
  let carrito = [];
  let orderId = 1;

  // levanta si tiene algo el LocalStorage USAR OPERADORES CLASE 12
  let carritoLS = localStorage.getItem("carrito");
  if (carritoLS) {
    carrito = JSON.parse(carritoLS);
  }

  // la funcion addItem() busca el id del array const productos
  let btn1 = $("#product1");
  btn1.click(function () {
    addItem(1);
  });

  let btn2 = $("#product2");
  btn2.click(function () {
    addItem(2);
  });

  let btn3 = $("#product3");
  btn3.on("click", function () {
    addItem(3);
  });

  let btn4 = $("#product4");
  btn4.on("click", function () {
    addItem(4);
  });

//Busca el producto por ID, imprime alert, guarda en el local storage , escribe total y asigna order ID
  function addItem(productoID) {
    let producto = productos.find((p) => p.productId === productoID);
    carrito.push(new cart(producto.nombre, producto.precio, 1, orderId));
    swal(producto.nombre, "se ha añadido al carrito.", "success");
    saveCarrito();
    mostrarCarrito();
    orderId++;
    console.log(carrito);
  }
//  salva el carrito en el local storage
  function saveCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
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

  console.log("El DOM shop.js esta listo");
  // console.log(carrito);
});
