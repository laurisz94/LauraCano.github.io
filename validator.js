const validator = {

isValid : function (creditCard) {//la funcion invertir numero 
//la varibale let  arrayNumber gaurda el arreglo de número, split (nos evuelve un arreglo) prmite separar la cadera y se divide entre cada caracter    
    let arrayNumber = creditCard.split('').reverse().join('');
    let validacionCardNumber = [] 
//console.log(arrayNumber);
//let reverseAarrayNumber = validacionCardNumber
//Guardar los valores en un array ya al areves
for (let i=0; i < creditCard.length; i++) { //se cra un ciclo for que va desde la posicion 0 hasta la 16 
    validacionCardNumber.push(parseInt(arrayNumber[i]));
    } 

//length dice el numero de elementos que tiene 

//Iniciar el algoritmo de LUhm
let reverseAarrayNumber = validacionCardNumber//Es para guardar el valor que da en los array 

//console.log(reverseAarrayNumber)
//let numero = 0
    for (let i = 1; i < reverseAarrayNumber.length; i = i + 2) {//aqui ya tengo las posiciones que van ser pares 
   let multiplicacion = 2 * reverseAarrayNumber[i];  
    //reverseAarrayNumber[i] = multiplicacion
 //numero = numero + reverseAarrayNumber[i]


if (multiplicacion >9){//si el valor de la multiplicacion es mayor 9 se resta. -9 y si no no hace nada
    reverseAarrayNumber [i] = multiplicacion - 9;
}

else {
    reverseAarrayNumber[i]= multiplicacion
}

//console.log(reverseAarrayNumber)
} 

let suma = reverseAarrayNumber.reduce((numero, total)=> numero += total, 0);
//console.log(suma)

if (suma % 10 === 0){
    //console.log("valida");
    return true
}
    else {
        //console.log ("invalida");
        return false
    }

//Si la condicion dice que la posicion par es igual a 0 es par    

},
maskify : function (creditCard){  //- es que emieze a contar del lado contrario

    //let enmascarar=""
     
       //if(!!creditCard && creditCard.length >4) {
         
         //enmascarar="#".repeat(creditCard.length -4) + creditCard.slice(-4)
         //console.log(typeof enmascarar)
         //return  enmascarar
       
      //}

   //el 0 indica donde empieza y el sigueinte donde terima o cuantos numeros deseas dejar 

   let numeroReemplazar = creditCard.slice(0, -4);
    let enmascarar = creditCard.replace(numeroReemplazar, "#".repeat(numeroReemplazar.length));
    //console.log(transformNumber);
    return enmascarar;
}
}
//Obtener los valores de los numeros en las posiciones pares 
// tener toda la logica del algoritmo
export default validator