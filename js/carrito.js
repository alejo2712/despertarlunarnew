$(document).ready(function () {
    obtenerCantidad();
})

$(document).on('click', '.btn-agregar-carrito', function (event) {
            var actual = parseInt($(".contador-carrito").text());
            
                actual = actual + 1;
                $(".contador-carrito").text(actual);
            
});