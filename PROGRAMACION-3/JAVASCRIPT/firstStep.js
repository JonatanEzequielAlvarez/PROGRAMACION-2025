var myVariableInt = 10
var myVariableFloat = 10.5
var myVariableString = "Hello World"
var myVariableBoolean = true

var one = "1"
var two = "2"

var result = one + two
console.log(result) // "12"

var one = 1
var two = 2

var result = one + two
console.log(result) // 3


function variable(){
    let myVariable = 10
    //console.log(myVariable)
    console.log(one) // 1

    if(true){
       console.log(myVariable) // 10
       console.log(one) // 1
    }
}
console.log(one) 

variable()
//console.log(myVariable) // ReferenceError: myVariable is not defined

const MY_VARIABLE = 10


//console.log(myConstant) // 10


var valOne = 1
var valTwo = 5

var resultSuma = valOne + valTwo
var resultResta = valOne - valTwo
var resultMultiplicacion = valOne * valTwo
var resultDivision = valOne / valTwo

function operation(){
    var inputOne = document.getElementById("inputOne").value
    var inputTwo = document.getElementById("inputTwo").value
    var type = document.getElementById("operation").value

    if(type == "suma"){
        return inputOne + inputTwo
    }else if(type == "resta"){
        return inputOne - inputTwo
    }else if(type == "multiplicacion"){
        return inputOne * inputTwo
    }else if(type == "division"){
        return inputOne / inputTwo
    }
    else{
        return "Error: Operacion no valida"
    }
}

//operation() // 6

//var inputOne = document.getElementById("inputOne").value
//var inputTwo = document.getElementById("inputTwo").value

////operation() // 3

for(i = 0; i < 10; i++){
    console.log(i)
}

var array = [1, 2, 3, 4, 5]


array.forEach(element => {
    console.log(element)
});

var i = 0
while(i < 10){
    console.log("number " + i)
    i++
}


var json = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

console.log(json.age) // John


