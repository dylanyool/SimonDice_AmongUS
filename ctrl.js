const btnEmpezar = document.getElementById("btnEmpezar")
const ultimoLvl = 5;
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

const lvl1 = document.getElementById('lvl1')
const lvl2 = document.getElementById('lvl2')
const lvl3 = document.getElementById('lvl3')
const lvl4 = document.getElementById('lvl4')
const lvl5 = document.getElementById('lvl5')

class SDGame {

    constructor() {
        this.inicializar()
        this.generarSecuencia()
        setTimeout(() => {
            this.recorrerSecuencia()
        }, 1000)
    }
    inicializar() {
        btnEmpezar.classList.add('hide')
        this.seleccionar = this.seleccionar.bind(this)
        this.recorrerSecuencia = this.recorrerSecuencia.bind(this)
        this.lvl = 1;
        this.userPad = {
            u1, u2, u3, u4, u5, u6, u7, u8, u9
        }
        this.gamePad = {
            s1, s2, s3, s4, s5, s6, s7, s8, s9
        }
        this.levels = {
            lvl1, lvl2, lvl3, lvl4, lvl5
        }

    }

    generarSecuencia() {
        console.log('generando secuencia')
        this.secuencia = new Array(ultimoLvl).fill(0).map(a => a += this.generar_numero())
    }

    recorrerSecuencia() {
        this.subnivel = 0;
        for (let i = 0; i < this.lvl; i++) {
            setTimeout(() => this.iluminar(this.gamePad['s' + this.secuencia[i]]), 750 * i)
        }
        setTimeout(() => this.agregarEventosClick(), this.lvl * 750)
    }
    iluminar(pad) {
        pad.classList.add('ligthIt')
        setTimeout(() => this.apagar(pad), 250)
    }
    iluminarlvl(lvl) {
        lvl.classList.add('ligthIt')
    }
    apagar(pad) {
        pad.classList.remove('ligthIt')
    }
    seleccionar(ev) {
        var pad = ev.target.dataset.id
        console.log(pad + '=' + this.secuencia[this.subnivel])
        this.iluminar(this.userPad['u' + pad])
        if (this.secuencia[this.subnivel] == pad) {
            this.subnivel++;
            if (this.subnivel === this.lvl) {
                this.agregarLvl()
            }
        } else {
            this.GameOver()
        }
    }

    agregarLvl() {
        this.eliminarEventosClick();
        if (this.lvl === ultimoLvl) {
            for (let i = ultimoLvl; i > 0; i--) {
                this.apagar(this.levels['lvl' + i])
            }
            console.log('ganaste we')
        } else {
            this.iluminarlvl(this.levels['lvl' + this.lvl])
            setTimeout(this.recorrerSecuencia, 1000)
        }
        this.lvl++;
    }

    GameOver() {
        this.lvl = 1;
        this.eliminarEventosClick()
        console.log('perdiste we')
        this.indicarError()
        setTimeout(() => {
            for (let i = ultimoLvl; i > 0; i--) {
                this.levels['lvl' + i].classList.remove('ligthIt')
                this.levels['lvl' + i].classList.remove('wrong')
            }
            btnEmpezar.classList.remove('hide')
        }, 500)
    }

    indicarError() {
        for (let i = ultimoLvl; i > 0; i--) {
            this.levels['lvl' + i].classList.add('wrong');
        }
    }

    agregarEventosClick() {
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

    eliminarEventosClick() {
        this.userPad.u1.removeEventListener('click', this.seleccionar)
        this.userPad.u2.removeEventListener('click', this.seleccionar)
        this.userPad.u3.removeEventListener('click', this.seleccionar)
        this.userPad.u4.removeEventListener('click', this.seleccionar)
        this.userPad.u5.removeEventListener('click', this.seleccionar)
        this.userPad.u6.removeEventListener('click', this.seleccionar)
        this.userPad.u7.removeEventListener('click', this.seleccionar)
        this.userPad.u8.removeEventListener('click', this.seleccionar)
        this.userPad.u9.removeEventListener('click', this.seleccionar)
    }

    generar_numero = () => Math.floor(Math.random() * 9) + 1
}

function start() {
    window.game = new SDGame()

}