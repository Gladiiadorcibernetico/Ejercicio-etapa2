let nombrePlanetas = Array('Tierra','Marte','Jupiter','Neptuno');
let distancia = [6,3,7];
const tamaño = [];

for (let index = 0; index < nombrePlanetas.length; index++){
    console.log(nombrePlanetas[index]);
}

for (const key in nombrePlanetas){
    if (Object.hasOwnProperty.call(nombrePlanetas, key)){
        const element = nombrePlanetas[key];
    }
}


console.log('In')



nombrePlanetas.forEach((value,index,array) =>{
    console.log('planeta',index,value)
} );

let resultadoMap = nombrePlanetas.map((planetas,index) => {
    return( `El planeta ${planetas} tiene tamaño de: ${tamaño[index]}`)
    
})
console.log(resultadoMap)
