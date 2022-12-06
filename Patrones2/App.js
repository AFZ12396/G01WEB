

import Servicio from "./Servicio.js";
import ServicioAereo from "./ServicioAereo.js";


//nuestra aplicacion de mensajeria
const servicioTerrestre = new Servicio();
const servicioTerrestre2 = new Servicio();
const servicioAereo= new ServicioAereo();
const servicioAereo2 = new ServicioAereo();



// const ford = servicioTerrestre.obtenerTransporte();
// const avion = servicioAereo.obtenerTransporte();

function enviarPaquete(servicio,lugar){

   const transporte = servicio.obtenerTransporte();
   transporte.transportar(lugar);
}
enviarPaquete(servicioAereo, "Bucaramanga")
enviarPaquete(servicioAereo, "Riohacha")
enviarPaquete(servicioAereo, "Bogota")
enviarPaquete(servicioTerrestre, "Cali")
enviarPaquete(servicioTerrestre, "otra ciudad")
enviarPaquete(servicioTerrestre2, "pereira")






// function realizarEnvio(transporte, lugar){
//     transporte.transportar(lugar);
//     console.log(transporte.conductor);
// // }
// realizarEnvio(ford, "Cali");
// realizarEnvio(avion, "Barranquilla");




   
 
