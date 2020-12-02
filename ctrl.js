const btnEmpezar = document.getElementById("btnEmpezar")
const u1 = document.getElementById(u1)
const u2 = document.getElementById(u2)
const u3 = document.getElementById(u3)
const u4 = document.getElementById(u4)
const u5 = document.getElementById(u5)
const u6 = document.getElementById(u6)
const u7 = document.getElementById(u7)
const u8 = document.getElementById(u8)
const u9 = document.getElementById(u9)

const s1 = document.getElementById(s1)
const s2 = document.getElementById(s2)
const s3 = document.getElementById(s3)
const s4 = document.getElementById(s4)
const s5 = document.getElementById(s5)
const s6 = document.getElementById(s6)
const s7 = document.getElementById(s7)
const s8 = document.getElementById(s8)
const s9 = document.getElementById(s9)
class SDGame {
    constructor() {
        this.inicializar()
        // this.generarSecuencia()
        this.secuencia = new Array(5).fill(0);
    }
    inicializar() {
        btnEmpezar.classList.add('hide')
        this.lvl = 1;
        this.userPad = {
            u1, u2, u3, u4, u5, u6, u7, u8, u9
        }
        this.gamePad = {
            s1, s2, s3, s4, s5, s6, s7, s8, s9
        }
    }

    generarSecuencia() {
        //this.secuencia.add()
    }

    agregarLvl() {
        //this.secuencia.add
    }

    generar_numero = () => Math.floor(Math.random() * 9) + 1
}

function start() {
    var game = new SDGame()
    for (let index = 0; index < 5; index++) {
        console.log(game.generar_numero())
    }
}