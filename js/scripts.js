var counterVal = 0;
const productos = [
    {"id": 1, "tipo_producto":"piedras", "producto":"metalizada"},
    {"id": 2, "tipo_producto":"collares", "producto":"jupiter"},
    {"id": 3, "tipo_producto":"cristales", "producto":"brillante"},
    {"id": 4, "tipo_producto":"anillos", "producto":"disney"}
];

class Producto {
    constructor (id, tipo, producto, cantidad) {
    this.id = id;
    this.tipo = tipo;
    this.producto = producto;
    this.cantidad = cantidad;
    }
}

function findProduct(id) {
    productos.forEach(object =>{
        if(object.id === id){
            console.log("tipo: " + object.tipo);
        }
    });
}

function incrementClick(id_producto) {
    updateDisplay(++counterVal);
    console.log(counterVal);
    findProduct(id_producto);

    const prodobj = new Producto(2, "piedra", "cuarzo", counterVal);
    console.log("prodobj: " + prodobj.cantidad);

    productos.push(prodobj);
    console.log("carrito: " + JSON.stringify(productos));
}

function decrementClick() {
    if (!counterVal == 0) {
        updateDisplay(--counterVal);
        console.log(counterVal);
    }
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("number1").value = val;
}
