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
        return `Item:${this._idProducto} 
        Descripción: ${this._nombre} 
        Precio: $${this.precio}`;
    }
}

let producto1 = new Producto('Pantalón', 200);
let producto2 = new Producto('Camisa', 100);

console.log(producto1.toString());
console.log(producto2.toString());
