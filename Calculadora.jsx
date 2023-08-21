function suma(a,b){
        return new Promise ((resolve, reject)=>{
            if (a === 0 || b === 0){
                reject("No se puede la operación")
        } else if (a + b < 0) {
            reject("La calculadora no esta habilitada para negativos")            
        } else{
            resolve(a + b)
        }
        })
}


function resta(minuendo, sustraendo){
    return new Promise ((resolve, reject)=>{
        if (minuendo === 0 || sustraendo === 0){
            reject("operación invalida")
    } else if (minuendo - sustraendo < 0) {
        reject("La calculadora no esta habilitada para negativos")            
    } else{
        resolve(minuendo - sustraendo)
    }
    })
}


function multiplicacion(multiplicando, multiplicador){
     return new Promise ((resolve, reject)=>{
        if (multiplicador === 0){
            reject("No se puede multiplicar por 0")
    }   
    else{
        resolve(multiplicando * multiplicador)
    }
    })
}

function division(dividendo, divisor){
    return new Promise ((resolve, reject)=>{
        if (divisor === 0){
            reject("No se puede dividir por 0")
    }   
    else{
        resolve(dividendo / divisor)
    }
    })
}

async function calculos (){
    try{
        const resultadoSuma = await suma (6, 8);
        const resultadoResta = await resta (10 , 8);
        const resultadoMulti = await multiplicacion (6 , 8);
        const resultadoDiv = await division (4, 8);

        console.log("Suma: ", resultadoSuma);
        console.log("Resta: ", resultadoResta);
        console.log("Multiplicación: ", resultadoMulti);
        console.log("División: ", resultadoDiv);
    } catch (error) {
        console.log("Error", error);
    }
}

calculos();