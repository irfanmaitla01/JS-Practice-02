const Myarray = [5, 4, 9, 7, 3, 2]
const Myarray2 = ["irfan", "Imran", "Ali"]
const Myarray3 = new Array (12, 13, 15, 19, 23, 35)
console.log(Myarray[0])
console.log(Myarray2[2])
console.log(Myarray3[5])

// Myarray.push(10)   //it include new array vslue
console.log(Myarray)

console.log(Myarray.includes(99))
console.log(Myarray.includes(7))
console.log(Myarray.indexOf(99))
console.log(Myarray.indexOf(7))

console.log("A", Myarray)
const Myn1 = Myarray.slice(1,4)
console.log(Myn1)
console.log("B", Myarray)
const Myn2 = Myarray.splice(1,4)  //it subtract mention values from original array
console.log(Myn2)
console.log("C", Myarray)

