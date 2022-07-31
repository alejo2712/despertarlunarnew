

function obtenerCantidad() {
    $(document).on('click', '.btn-agregar-carrito', function (event) {

        var actual = parseInt($(".contador-carrito").text());
        let cantidad_carritoEnLS = JSON.stringify(localStorage.getItem('cantidadCarrito'));

        if (cantidad_carritoEnLS) {
            actual = cantidad_carritoEnLS
            actual = actual + 1;
        } else {
            actual = actual + 1;
            localStorage.setItem("cantidadCarrito", actual);
        }

        let carrito_final = localStorage.getItem('cantidadCarrito');
        $(".contador-carrito").text(actual);

    });
}

function existeProducto(id) {
    return JSON.stringify(localStorage.getItem(id)); 
}

if (existeProducto(1)) 
    console.log("existe") 
else 
    console.log("no existe");
