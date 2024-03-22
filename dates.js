const myDates = new Date()
console.log(myDates)
console.log(myDates.toString())
console.log(myDates.toDateString())
console.log(myDates.toISOString())
console.log(myDates.toJSON())
console.log(myDates.toLocaleDateString())
console.log(myDates.toLocaleString())
console.log(myDates.toLocaleTimeString())

console.log(typeof myDates)

const myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toLocaleString())
const myCreatedDateTwo = new Date(2024, 1, 23)
console.log(myCreatedDateTwo.toLocaleString())
const myCreatedDateThree = new Date(2024, 2, 23)
console.log(myCreatedDateThree.toLocaleDateString())

console.log(myCreatedDateThree.getMonth())

let myTimeStamp = Date.now()        // it give Date in MiliSeconds
console.log(myTimeStamp)

console.log(Date.now()/1000)        // it give Date in Seconds
console.log(Math.floor(Date.now()/1000))

console.log(`The Date is ${myCreatedDateThree} and new one is ${myTimeStamp}`)
