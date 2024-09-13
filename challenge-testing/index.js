class CarritoCompra {
  constructor() {
    // Inicializa el carrito como un array vacío
    this.carrito = [];
  }

  // Método para agregar un producto al carrito
  agregarProducto(producto) {
    this.carrito.push(producto);
  }

  // Método para calcular el total de la compra
  calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.precio, 0);
  }

  // Método para aplicar un descuento al total de la compra
  aplicarDescuento(porcentaje) {
    const total = this.calcularTotal();
    const descuento = total * (porcentaje / 100);
    return total - descuento;
  }
};

module.exports = CarritoCompra
