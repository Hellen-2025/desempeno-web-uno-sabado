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

// Fase 3: Lógica de Simulación y Diagnóstico//

// --- 1. Simular día de ventas ---
const simularDiaDeVentas = () => {
    console.log("=== Simulación de un día de ventas ===");
    for (let i = 1; i <= 5; i++) {
        console.log(` Cliente ${i}:`);
        registrarVenta(8); // cada cliente compra 8 unidades
    }
};

// --- 2. Diagnóstico del inventario ---
function diagnosticoInventario() {
    console.log("=== Diagnóstico del Inventario ===");

    // --- Condicional múltiple (estado del stock) ---
    if (stockProducto > 40) {
        console.log("Nivel de stock óptimo.");
    } else if (stockProducto > 20) {
        console.log(" Stock moderado, considera reponer pronto.");
    } else {
        console.log(" ¡Alerta! Bajo stock, reposición urgente.");
    }

    // --- Switch (ventas totales) ---
    switch (true) {
        case (ventasTotales > 40):
            console.log(" Producto estrella, alta demanda.");
            break;
        case (ventasTotales > 20):
            console.log(" Ventas moderadas.");
            break;
        default:
            console.log(" Baja rotación del producto.");
    }
}

// --- Pruebas ---
console.log("=== Estado inicial ===");
mostrarInventario();

simularDiaDeVentas();   // Simula 5 clientes comprando
diagnosticoInventario(); // Verifica salud del inventario

// Fase 4

// --- 1. Función principal con menú ---
function iniciarGestion() {
    while (true) {
        let opcion = prompt(
`Menú de Inventario:
1 - Registrar Venta
2 - Reponer Stock
3 - Simular Día de Ventas
4 - Ver Diagnóstico de Inventario
5 - Mostrar Inventario Actual
6 - Cerrar programa`
        );

        switch (opcion) {
            case "1":
                let cantidadVenta = parseInt(prompt("Ingrese la cantidad a vender:"));
                registrarVenta(cantidadVenta);
                break;

            case "2":
                let cantidadReponer = parseInt(prompt("Ingrese la cantidad a reponer:"));
                reponerStock(cantidadReponer);
                break;

            case "3":
                simularDiaDeVentas();
                break;

            case "4":
                diagnosticoInventario();
                break;

            case "5":
                mostrarInventario();
                break;

            case "6":
                console.log("👋 Programa cerrado.");
                return; // rompe el ciclo y finaliza la función

            default:
                console.log("⚠️ Opción inválida. Intente nuevamente.");
        }
    }
}

// --- Iniciar el programa ---
iniciarGestion();