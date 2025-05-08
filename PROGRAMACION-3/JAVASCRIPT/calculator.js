
var inputOne = document.getElementById("inputOne")
var inputTwo = document.getElementById("inputTwo")

var btnSuma = document.getElementById("btnSuma")
var btnResta = document.getElementById("btnResta")
var btnMultiplicacion = document.getElementById("btnMultiplicacion")
var btnDivision = document.getElementById("btnDivision")


btnSuma.addEventListener("click", function () {
var result = parseInt(inputOne) + parseInt(inputTwo)
    console.log(result)
    document.getElementById("resultado").value = result
})



function suma() {
    var result = parseInt(inputOne.value) + parseInt(inputTwo.value)
    console.log(result)
    document.getElementById("resultado").value = result
}