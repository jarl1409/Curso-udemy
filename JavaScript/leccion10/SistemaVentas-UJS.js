class Producto{
    static contadorProductos=0;
    
    constructor(nombre,precio){
        this._idProducto= ++Producto.contadorProductos;
        this._nombre= nombre;
        this._precio=precio;
    }

    get idProducto(){
        return this._idProducto;
    }
    
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        return this._nombre=nombre;
    }

    get precio(){
        return this._precio;
    }
    set precio(precio){
        return this._precio=precio;
    }
    toString(){
        return `${this._idProducto} 
        Descripción: ${this._nombre} 
        Precio: $${this.precio}`;
    }
}

class Orden{
    static contadorOrdenes=0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos=[];
        this._contadorProductosAgregados= 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            // this._productos[this._contadorProductosAgregados++]= producto;
        }
        else{
            console.log("No se pueden agregar más productos");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto; off; this._productos){
            totalVenta += producto.precio;//totalVenta = totalVenta + producto.precio
        }
    }

    mostrarOrden(){
        let productoOrden = '';
        for( let producto of this._productos){
            productosOrden += producto.toString()+ ' ';
        }

        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productoOrden}`);
    }
}

let producto1 = new Producto('Pantalón', 200);
let producto2 = new Producto('Camisa', 100);

console.log(producto1.toString());
console.log(producto2.toString());
