const buttonShow = document.getElementById("show")

function showColor() {
    const inputR = document.getElementById("r")
    const inputG = document.getElementById("g")
    const inputB = document.getElementById("b")
    const divColor = document.getElementById("color")
    const pCSSText = document.getElementById("csstext")

    const rgbStr = "rgb(" + inputR.value + "," + inputG.value +
    "," + inputB.value + ")"
    divColor.style.backgroundColor = rgbStr   
    pCSSText.innerText = rgbStr
}
buttonShow.onclick = showColor
