// jquery fecth


const productos = document.getElementById('contenedor');
fetch('/js/productos.json')
.then((response) => response.json())
.then((data) => {
    data.forEach(producto => {
        const li = document.createElement('div');
        li.innerHTML = `
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
        `
        productos.append(li);
       
    });
});

