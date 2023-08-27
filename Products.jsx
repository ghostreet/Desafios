const { error } = require("console");
const { json } = require("react-router-dom");

const fs = require("fs").promises;
class ProductManager{
    constructor(){
    this.producto=[];
    }

    async loadProduct(){
        try{
            const data =await fs.readFile( "productos.json", "utf-8")
            this.producto = JSON.parse(data)
        } catch (error) {
            console.error("error al cargar los productos", error)
        }
    }

    async saveProduct() {
        try {
            await fs.writeFile( "productos.json", JSON.stringify(this.producto, null, 2),"utf-8");
        } catch (error){
            console.error("error al guardar los productos", error);
        } 
    }

    async updateProduct(producto_id, update) {
        const productoIndex = this.producto.findIndex((producto)=> producto.id === producto_id);

        if (productoIndex === -1) {
            console.log("producto no encontrado")
            return;
        }

        this.producto[productoIndex] = {
            ...this.producto[productoIndex],
            ...update,
            id: producto_id,
        };
        console.log("producto actualizado correctamente");
        await this.saveProduct();
    }
   getProducto(){
    return this.producto;
   }
   addProduct(title, descripcion, price, thumbnail, code, stock) {
    
    const checkCode = this.producto.find((producto) => producto.code === code);

    if (!checkCode){
    const producto_id = this.producto.length + 1
    const newProducto ={
        id: producto_id,
        title,
        descripcion,
        price,
        thumbnail,
        code,
        stock
  };
  this.producto.push(newProducto);
  return console.log("Producto agregado correctamente");
 }else{
    console.log("Código repetido");
    }
  
}

getProductById(producto_id){
    const productoEncontrado = this.producto.find((producto)=> producto.id === producto_id);
    if (!productoEncontrado) {
        console.log("Not found");
        return null;
    }
    console.log(`El Id: ${producto_id} corresponde a ${productoEncontrado.title}`);
    return productoEncontrado;
    }
    async deleteProduct(producto_id) {
        const productoIndex = this.producto.findIndex((producto)=> producto.id === producto_id);
    
        if (productoIndex === -1) {
            console.log("producto no encontrado")
            return;
        }
        this.producto.splice(productoIndex, 1);
        console.log("producto eliminado correctamente");
    
        await this.saveProduct();
    }
}  




const productManager = new ProductManager();

(async ()=> {

   await productManager.loadProduct("productos.json");

    productManager.addProduct("cámara","producto fotografico, eos 60d", 600000, "camara.jpg", 2510, 10);
    productManager.addProduct("cámara","producto fotografico, eos 70d", 700000, "camara.jpg", 2512, 10);

    productManager.getProductById(1);
    console.log(productManager.getProducto());

    productManager.updateProduct(1,{
     title: "Cam actualizada",
     price: 750000,

    });

    productManager.deleteProduct(2)

    console.log(productManager.getProducto());

})();