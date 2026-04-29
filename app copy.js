//funcion que suma 

function sum(num1,num2) {
    let result = num1 + num2
    return result
}

//console.log(sum(5, 2))

function subtract(num1,num2) {
    let result = num1 - num2 
    return result
}

//console.log(subtract(5,2))

function multiply(num1,num2) {
    let result= num1 * num2
    return result
}

//console.log(multiply(7,3))

function division( num1, num2) {

    if (num2 === 0) {
        return 'Error: Division por cero'
    }
    let result= num1 / num2
    return result
}

console.log(division(10,0))

module.exports = {
    sum,
    subtract,
    multiply,
    division

}