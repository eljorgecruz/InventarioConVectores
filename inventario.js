export default class Inventario{
    constructor(){
        this.lista = new Array;
    }

    getLista(){
        return this.lista;
    }

    agregar(nuevo){
        this.lista.push(nuevo);
        console.log(this.lista);
    }

    eliminar(codigo){
        this.lista.pop(codigo-1, 1);
        console.log(this.lista);
    }

    listado(){

        let inventarioTotal = ''; 
        
        //if(this.lista.length > 0){
        this.lista.forEach((producto) => {inventarioTotal += producto.getInfo()});
        // } else {
        //     alert ("No hay productos para mostrar")
        //     return string = "";
        // }



        //intento de hacer el listado sin el ciclo forEach
        // for(let i = 0; i <= this.lista.length - 1; i++){
        //     inventarioTotal += this.lista[i];
        // }

        return inventarioTotal; 
    }

    listadoInverso(){
        //let listaInvertida = ''; 

        // for(let i = this.lista.length-1; i >= 0; i--){
        //     listaInvertida += this.lista[i].info(); 
        // }

        let inventarioTotal = ''; 
        this.lista.reverse();
        
        //if(this.lista.length > 0){
        this.lista.forEach((producto) => {inventarioTotal += producto.getInfo()});
        // } else {
        //     alert ("No hay productos para mostrar")
        //     return string = "";
        // }


        return inventarioTotal; 
    }

    busqueda(codigo){
        for (let i = 0; i < this.lista.length; i++){
            if(codigo === this.lista[i].getCodigo()){
                return this.lista[i];  
            } 
        }
        return null; 
    }
}