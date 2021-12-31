//Funciones

function sumar (num) {
 console.log(num);   
}
sumar(10);

//Funciones Flecha

let sumarDos = (num1, num2) => {
   return (num1 + num2);
} 

let resultado = sumarDos(20,30);
console.log(resultado);

let mensaje = () =>{
    return 'hola soy Omar';
}

let mensajeDos = mensaje ();
console.log(mensajeDos);

let mensajeTres = (nombre) =>{
    return 'holas soy ' + nombre
}

let mensajeNombre = mensajeTres ('Pepe');
console.log(mensajeNombre);

let sumaTres = (num) => {
    console.log(num + 3);
}

sumaTres(3);