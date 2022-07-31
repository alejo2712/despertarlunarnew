$(document).ready(function () {
    listarProductos();
})

function listarProductos() {
    jQuery.ajax({
        url: '../database/productos.json',
        type: "GET",
        data: JSON.stringify({}),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $("#catalogo-productos").html("");
            $("#catalogo-productos").LoadingOverlay("hide");

            if (data.productos != null) {
                $.each(data.productos, function (i, item) {
                    //catalogo-productos
                    $("<div>").addClass("col mb-5").append(
                        $("<div>").addClass("card h-100").append(
                            $("<img>").addClass("card-img-top").attr({
                                "src": item.imagen
                            }),
                            //Product details
                            $("<div>").addClass("card-body p-4").append(
                                $("<div>").addClass("text-center").append(
                                    $("<h5>").addClass("fw-bolder").text(item.nombre),
                                    "$" + item.precio
                                )
                            ),
                            //Product actions
                            $("<div>").addClass("card-footer p-4 pt-0 border-top-0 bg-transparent").append(
                                $("<div>").addClass("d-grid d-md-grid gap-2 d-md-block align-items-center text-center").append(
                                    $("<button>").addClass("btn btn-secondary btn-detalle w-100 text-center me-3").text("Ver Detalle").attr({
                                        "data-elemento": JSON.stringify(item)
                                    }),
                                    $("<button>").addClass("btn btn-primary btn-agregar-carrito w-100 text-center me-3").data("id", item.id).text("Agregar al carrito")
                                )
                            )
                        )

                    ).appendTo("#catalogo-productos");
                });
            }
        },
        error: function (error) {
            console.log("ocurrio un error: " + error);
        },
        beforeSend: function () {
            $("#catalogo-productos").LoadingOverlay("show");
        },
    });
}