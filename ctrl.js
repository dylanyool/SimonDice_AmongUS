const btnEmpezar = document.getElementById("btnEmpezar")
const u1 = document.getElementById('u1')
const u2 = document.getElementById('u2')
const u3 = document.getElementById('u3')
const u4 = document.getElementById('u4')
const u5 = document.getElementById('u5')
const u6 = document.getElementById('u6')
const u7 = document.getElementById('u7')
const u8 = document.getElementById('u8')
const u9 = document.getElementById('u9')

const s1 = document.getElementById('s1')
const s2 = document.getElementById('s2')
const s3 = document.getElementById('s3')
const s4 = document.getElementById('s4')
const s5 = document.getElementById('s5')
const s6 = document.getElementById('s6')
const s7 = document.getElementById('s7')
const s8 = document.getElementById('s8')
const s9 = document.getElementById('s9')

class SDGame {

    constructor() {
        this.inicializar()
        this.generarSecuencia()
        this.recorrerSecuencia(this.level)
    }
    inicializar() {
        btnEmpezar.classList.add('hide')
        this.seleccionar = this.seleccionar.bind(this)
        this.lvl = 1;
        this.userPad = {
            u1, u2, u3, u4, u5, u6, u7, u8, u9
        }
        this.gamePad = {
            s1, s2, s3, s4, s5, s6, s7, s8, s9
        }
        this.userPad.u1.addEventListener('click', this.seleccionar)
        this.userPad.u2.addEventListener('click', this.seleccionar)
        this.userPad.u3.addEventListener('click', this.seleccionar)
        this.userPad.u4.addEventListener('click', this.seleccionar)
        this.userPad.u5.addEventListener('click', this.seleccionar)
        this.userPad.u6.addEventListener('click', this.seleccionar)
        this.userPad.u7.addEventListener('click', this.seleccionar)
        this.userPad.u8.addEventListener('click', this.seleccionar)
        this.userPad.u9.addEventListener('click', this.seleccionar)

    }

    generarSecuencia() {
        this.secuencia = new Array(5).fill(0).map(a => a += this.generar_numero())
    }

    recorrerSecuencia() {
        for (let i = 0; i < this.lvl; i++) {
            setTimeout(() => this.iluminar(this.gamePad['s' + this.secuencia[i]]), 1000 * i)
        }
    }
    iluminar(pad) {
        pad.classList.add('ligthIt')
        setTimeout(() => this.apagar(pad), 350)
    }
    apagar(pad) {
        pad.classList.remove('ligthIt')
    }
    seleccionar(ev) {
        let pad = ev.target.dataset.id
        this.iluminar(this.userPad['u'+pad])
        if (this.secuencia[this.lvl-1] == pad) {
            this.lvl++;
            this.recorrerSecuencia();
        }else{
            this.lvl=1;
            this.recorrerSecuencia()
        }

    }
    agregarLvl() {
        //this.secuencia.add
    }

    generar_numero = () => Math.floor(Math.random() * 9) + 1
}

function start() {
    window.game = new SDGame()

}