let nombreProducto = prompt ("ingresa el nombre del producto:");
let stockProducto = 50;
let ventasTotales = 0;

console.log ("producto:", nombreProducto);
console.log ("Stock inicial:", stockProducto);
console.log ("Ventas totales:", ventasTotales);

function mostrarInventario() {
    console.log(`Producto: ${nombreProducto}, Stock: ${stockProducto} unidades, Ventas: ${ventasTotales} unidades.`);
}

mostrarInventario();