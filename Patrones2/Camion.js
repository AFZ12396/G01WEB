class Camion{

    constructor(id, conductor){
        this.placa = id;
        this.conductor= conductor;
    }

    transportar(lugar){
        console.log("El Camion🚚["+this.placa+"]esta transportando el pedido a:"+lugar);
        
    }
}
export default Camion;