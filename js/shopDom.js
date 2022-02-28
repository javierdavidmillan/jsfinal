$(document).ready(function () {

//  get json data from server
  let productos = [];
  let url = 'http://127.0.0.1:5500/entregaFinal/jsJavierMillanDesafio/js/productos.json';
  getUrl();

  function getUrl() {
    $.get(url, function (data) {
       productos = data;
    });
  }
console.log(productos);



/*
// strig html productos 
  let productosHtml = "";
  for (const producto of productos) {
    productosHtml += `
    <div class="col-6">
    <div class="col-12">
        <h3 class="title__H1">${producto.nombre}</h3>
    </div>
  `;
  }
  $("#contenedor").html(productosHtml);




  let producto = productos;
  let htmlString;
  let contenedor = $("#contenedor");
  htmlString = `<div class="row">`;
  for (producto of productos) {
    htmlString += `
    <div class="col-6">
    <div class="col-12">
        <h3 class="title__H1">${producto.titulo}</h3>
    </div>
    <div class="familia">
        <img class="galeria" src="style/images/gallery/shop/${producto.foto}.jpg" alt="${producto.concepto}">
    </div>
    <div>
        <h3 class="title__H1">${producto.descripcion}</h3>
    </div>
    <div>
        <h2 class="title__H1">${producto.precio}</h2>
    </div>
    <button id="${producto.productId}" class="product button">Agregar al carrito</button>
</div>
  `;
  }
  htmlString += "</div>";
  contenedor.html(`${htmlString}`);


  console.log("El DOM shopDom.js esta listo");
  // console.log(htmlString);
  // console.log(productos);

  */
});
