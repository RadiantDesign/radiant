const buttonkonverzija = document.getElementById("konverzija")

function konverzija() {
const inputValuta = document.getElementById("vrednost")
const inputvalutaIz = document.getElementById("vrednostIz")
const inputvalutaU = document.getElementById("vrednostU")

const v = Number(inputValuta.value)
const vIz = inputvalutaIz.value
const vU = inputvalutaU.value

const valuta = {
    "eur" : 117 ,
    "rsd" : 1 
}

const k = v * valuta[vIz] / valuta[vU] 
window.alert( vIz.toUpperCase() + " u " + vU.toUpperCase() +
                    ": " + k )

}

buttonkonverzija.onclick = konverzija