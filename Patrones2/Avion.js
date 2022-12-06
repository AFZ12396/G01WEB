export default class Avion{

    constructor(id){
        this.placa = id;
}

    transportar(lugar){
        console.log("El Avion🛫["+this.placa+"]esta transportando el pedido a:"+lugar+",por medio aereo.");
    
    }
}
