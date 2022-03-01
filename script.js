/*
1. Pedir cantidad de ordenes
    1.1 Manteles
    1.2 Sillas
    1.3 Cintas
2. Calcular subtotal del envío
3. Calcular total
4. Guardar total con lugar de envío en array de objetos
*/



const manteles = parseInt(prompt("Ingrese la cantidad de manteles que haya pedido"));
const cubresillas = parseInt(prompt("Ingrese la cantidad de cubresillas que haya pedido"));
const cintas = parseInt(prompt("Ingrese la cantidad de cintas que haya pedido"));


const envio = 140;

const precioManteles = 200;
const precioCubresillas = 150;
const precioCintas = 100;

const subtotal = manteles * precioManteles + cubresillas * precioCubresillas + cintas * precioCintas;
const total = subtotal + envio;

if (manteles <= 0 && cubresillas <= 0 && cintas <= 0) {
    alert("Ingrese un número válido");
    const manteles = parseInt(prompt("Ingrese la cantidad de manteles que haya pedido"));
    const cubresillas = parseInt(prompt("Ingrese la cantidad de cubresillas que haya pedido"));
    const cintas = parseInt(prompt("Ingrese la cantidad de cintas que haya pedido"));
}
else if (manteles > 0 || cubresillas > 0 || cintas > 0){

    alert(`El subtotal es de $${subtotal} pesos`)
    alert(`El total es de $${total} pesos. ¡Muchas gracias!`);
}


//Arrays con objetos

function datos(nombre, pago){
    this.nombre = nombre;
    this.pago = pago;
}

const compra1 = new datos("Fulano", total);


//Desafío complementario

let datosCompra = [];

datosCompra.push(compra1);

console.log(datosCompra);