class ProductManager{
    constructor(){
    this.producto=[]
    }


   getProducto(){
    return this.producto
   }
   addProduct(title, descripcion, price, thumbnail, code, stock) {
    
    const checkCode = this.producto.find((producto) => producto.code === code);

    if (!checkCode){
    const producto_id = this.producto.length + 1
    const producto ={
        id: producto_id,
        title,
        descripcion,
        price,
        thumbnail,
        code,
        stock
  };
  this.producto.push(producto)
  return console.log("Producto agregado correctamente")
 }else{
    console.log("Código repetido");
    }
  
}



getProductById(producto_id){
    const productoEncontrado = this.producto.find((producto)=> producto.id === producto_id)
    if (!productoEncontrado) {
        console.log("Not found")
        return null
    }
    console.log(`El Id: ${producto_id} corresponde a ${productoEncontrado.title}`)
    return productoEncontrado;
    }
}  
const productManager = new ProductManager();

productManager.addProduct("cámara","producto fotografico, eos 60d", 600000, "camara.jpg", 2510, 10)
productManager.addProduct("cámara","producto fotografico, eos 70d", 700000, "camara.jpg", 2512, 10)
productManager.addProduct("cámara","producto fotografico, eos 60d", 600000, "camara.jpg", 2510, 10)

productManager.getProductById(1)