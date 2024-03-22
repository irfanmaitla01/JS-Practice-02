const score = 300
const balance = new Number (500)
// console.log(score)
// console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 123.87764
console.log(otherNumber.toPrecision(3))
const otherNewNumber = 3123.87764
console.log(otherNewNumber.toPrecision(3))
const otherNewOneNumber = 3123.87764
console.log(otherNewOneNumber.toPrecision(5))

const hundreds=50000000
console.log(hundreds.toLocaleString())

//++++++++++ Maths +++++++++++++++++++++++++++++++++
console.log("Maths practice")

console.log(Math.abs(-4))
console.log(Math.round(5.56))
console.log(Math.round(5.46))
console.log(Math.ceil(8.2))
console.log(Math.floor(3.9))
console.log(Math.sqrt(49))

console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
