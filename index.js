import validator from './validator.js';

// conectar el dom con la funcionalida logica

const boton = document.getElementById("boton");
//const creditCard = document.getElementById('numeroTarjeta').value;

//Es para que funcione el boton al dar click y crea la variable para traer el valor que ponga el usario
boton.addEventListener('click',function(e){
   e.preventDefault();
   const creditCard = document.getElementById('numeroTarjeta').value;
   // (creditCard);
   if (validator.isValid (creditCard) === true) {
    alert("Tarjeta válida")
  }
    else { 
      alert("Tarjeta invalida")
    }

document.getElementById("numeroTarjeta").value = validator.maskify(creditCard);

})


//creditCard.value= validator.maskify(creditCard.value);

//console.log(validator);