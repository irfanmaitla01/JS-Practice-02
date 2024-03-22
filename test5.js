let irfan="Maitla"
let ClassBS="CS"

console.log(`Hi, My cast is ${irfan}, and i'm Student of ${ClassBS} in IUB RYK Campus`)
console.log(irfan[0])
console.log(irfan[3])
console.log(irfan[5])
console.log(irfan.length)
console.log(irfan.toUpperCase())
console.log(irfan.endsWith())
console.log(irfan.charAt(3))
console.log(irfan.indexOf("t"))

const irfan5=irfan.substring(0,4)  // it include 0,1,2,3 characters(Mait). character 4 is not include
console.log(irfan5)

const irfan6=irfan.slice(-6,2)
console.log(irfan6)

const irfanSeven="      Maitla    "
console.log(irfanSeven)                      //trim, remove spaces
console.log(irfanSeven.trim())

const url="www.irfan%20Maitla%20RYK"
console.log(url.replace('%20','-'))

console.log(url.includes('Maitla'))
console.log(url.includes('Chaman'))

console.log(url.split('%20'))

console.log(`There are many variables like ${url} and other one is ${irfan6} and other is ${ClassBS}`)
