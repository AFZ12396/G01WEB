import Avion from "./Avion.js";

class ServicioAereo{
    idServicio = 0;

    constructor(){
        this.generarId();
    }
    generarId(){
        this.idServicio= Math.random().toString(36).slice(2);

    }
    obtenerTransporte(){
        return new Avion(this.idServicio)

    }    

    
}
export default ServicioAereo;