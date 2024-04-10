let BROJ = 0 ;
const buttonIncrement = document.getElementById("increment")
const buttonDecrement = document.getElementById("decrement")

function increment() {
    BROJ++ 
    const inputBroj = document.getElementById("broj")
    inputBroj.value=BROJ;
}

function decrement() {
    BROJ--
    const inputBroj = document.getElementById("broj")
    inputBroj.value=BROJ;
}

buttonIncrement.onclick = increment
buttonDecrement.onclick = decrement