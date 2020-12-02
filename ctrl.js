const btnEmpezar = document.getElementById("btnEmpezar")

class SDGame
{
    constructor(){
        this.inicializar()
        this.generarSecuencia()
    }
    inicializar(){
        btnEmpezar.classList.add('hide')
    }

    generarSecuencia(){

    }
}

function start(){
    var game= new SDGame()
}