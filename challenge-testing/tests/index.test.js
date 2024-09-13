const CarritoCompra = require("../index.js");

// 1 - constructor(): Inicializa el carrito como un array vacío.

// 2 - agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// 3 - calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// 4 - aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

describe ("Clase carrito de compras", () => {
  it("La clase carrito de compras debe ser una clase", () => {
    expect(typeof CarritoCompra).toBe("function");
  });
});

describe ("Constructor y metodos", () => {
  it("La clase debe tener los siguientes metodos", () => {
    expect(CarritoCompra.prototype.agregarProducto).toBeDefined();
    expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
    expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();
  });
});

describe ("Constructor", () => {
  it("Inicializa el carrito como un array vacío", () => {
    const nuevoCarrito = new CarritoCompra();
    expect(nuevoCarrito.carrito).toEqual([]);
  });
});

describe ("Agregar producto", () => {
  it("Recibe un objeto representando un producto y lo agrega al carrito", () => {
    const nuevoCarrito = new CarritoCompra();
    const producto = {
      marca: "Volksvagen",
      modelo: "Scirocco",
      precio: 20000
    };
    nuevoCarrito.agregarProducto(producto);
    expect(nuevoCarrito.carrito).toEqual([producto]);
  });
});

describe ("Calcular total", () => {
  it('Calcular total sin productos', () => {
    const nuevoCarrito = new CarritoCompra();
    expect(nuevoCarrito.calcularTotal()).toBe(0);
  });

  it('Calcular total con productos en el carrito', () => {
    const nuevoCarrito = new CarritoCompra();
    const producto1 = { nombre: 'Producto 1', precio: 100 };
    const producto2 = { nombre: 'Producto 2', precio: 200 };
    nuevoCarrito.agregarProducto(producto1);
    nuevoCarrito.agregarProducto(producto2);
    expect(nuevoCarrito.calcularTotal()).toBe(300);
  });
});

describe ("Aplicar descuento", () => {
  it('Aplicar descuento al total de la compra', () => {
    const nuevoCarrito = new CarritoCompra();
    const producto1 = { nombre: 'Producto 1', precio: 100 };
    const producto2 = { nombre: 'Producto 2', precio: 200 };
    nuevoCarrito.agregarProducto(producto1);
    nuevoCarrito.agregarProducto(producto2);
    const totalConDescuento = nuevoCarrito.aplicarDescuento(10); // 10% de descuento
  expect(totalConDescuento).toBe(270);
  });

  it('Aplicar descuento cuando el carrito está vacío', () => {
    const nuevoCarrito = new CarritoCompra();
    const totalConDescuento = nuevoCarrito.aplicarDescuento(10); // 10% de descuento
    expect(totalConDescuento).toBe(0);
  });
});

