const fs = require("fs").promises
      
const leerPackage ()=> {

    try {
        const data = fs.readFileSync("package.json", "utf-8")
        return data
        
    } catch (error) {
        throw new Error("el archivo no ha sido leido")
        
    }
    
}
    
const guardarJson = () => {
    const data = leerPackage
}