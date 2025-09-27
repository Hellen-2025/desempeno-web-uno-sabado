let nombreProducto = prompt("Ingresa el nombre del producto:");
let stockProducto = 50;
let ventasTotales = 0;

console.log("Producto:", nombreProducto);
console.log("Stock inicial:", stockProducto);
console.log("Ventas totales:", ventasTotales);

// --- Función declarativa ---
function mostrarInventario() {
    console.log(`📊 Producto: ${nombreProducto}, Stock: ${stockProducto} unidades, Ventas: ${ventasTotales} unidades.`);
}

// --- Función de expresión ---
const registrarVenta = function(cantidadVendida) {
    if (cantidadVendida <= stockProducto) {
        stockProducto -= cantidadVendida;      // Restar del stock
        ventasTotales += cantidadVendida;      // Sumar a ventas
        console.log(`✅ Venta realizada: ${cantidadVendida} unidades de ${nombreProducto}.`);
    } else {
        console.log("⚠️ Stock insuficiente para esta venta.");
    }
    mostrarInventario(); // 
};

// --- Función flecha ---
const reponerStock = (cantidadRepuesta) => {
    stockProducto += cantidadRepuesta;        // Sumar al stock
    console.log(`📦 Se añadieron ${cantidadRepuesta} unidades. Nuevo stock: ${stockProducto}.`);
    mostrarInventario(); // 
};

// --- Pruebas ---
console.log("=== Estado inicial ===");
mostrarInventario();

console.log("=== Registrar ventas ===");
registrarVenta(20);   // Venta válida
registrarVenta(40);   // Stock insuficiente

console.log("=== Reponer stock ===");
reponerStock(30);     // Añadir stock