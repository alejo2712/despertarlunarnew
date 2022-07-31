$(document).ready(function () {
    obtenerCantidad();
})

function obtenerCantidad() {
    let cantidad_carritoEnLS = localStorage.getItem('cantidadCarrito');
    console.log("cantidad_carritoEnLS: " + cantidad_carritoEnLS);

    if (cantidad_carritoEnLS) {
        $(".contador-carrito").text(cantidad_carritoEnLS);
    }
}

$(document).on('click', '.btn-agregar-carrito', function (event) {
    let idProducto = $(this).data("id");
    actualizarCarrito(idProducto);
    actualizarTotalContadorCarrito();
    obtenerCantidad();
});

$('#carrito').click(function () {
    window.location.href = 'carrito.html';
    return false;
});

function actualizarCarrito(id) {
    if (!localStorage.getItem(id)) {
        console.log("producto no existe en LS: " + id);
        jQuery.ajax({
            url: '../database/productos.json',
            type: "GET",
            data: JSON.stringify({}),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                if (data.productos != null) {
                    $.each(data.productos, function (i, item) {
                        console.log("comparando productos con LS: " + id);
                        if (item.id == id) {
                            console.log("producto no existe en LS y si en JSON, sumo 1 a la cantidad y guardo en LS: " + id);
                            item.cantidad = 1;
                            localStorage.setItem(id, JSON.stringify(item));
                        }
                    });
                }
            },
            error: function (error) {
                console.log("ocurrio un error: " + error);
            }
        });
    } else {
        console.log("producto Existe en LS y sumo 1 a la cantidad y guardo en LS: " + id);
        const prodCarritoAlmacenado = JSON.parse(localStorage.getItem(id));
        prodCarritoAlmacenado.cantidad++;
        localStorage.setItem(id, JSON.stringify(prodCarritoAlmacenado));
    }
}

function actualizarTotalContadorCarrito() {
    let contador = 0;

    jQuery.ajax({
        url: '../database/productos.json',
        type: "GET",
        data: JSON.stringify({}),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (data.productos != null) {
                $.each(data.productos, function (i, item) {
                    if (localStorage.getItem(item.id)) {
                        const prod = JSON.parse(localStorage.getItem(item.id));
                        contador = contador + parseInt(prod.cantidad);
                    }
                });
            }
        },
        error: function (error) {
            console.log("ocurrio un error: " + error);
        }
    });

    localStorage.setItem("cantidadCarrito", contador);
}