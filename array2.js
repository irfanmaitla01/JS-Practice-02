const arrayOne = [5,6,7,8,9]
const arrayTwo = [110,111,112,113,114,115]

const arrayThree = arrayOne.concat(arrayTwo)
console.log(arrayThree)

const arrayFour = [...arrayOne, ...arrayTwo]
console.log(arrayFour)

const arrayFive = [2,6,9,4,[2,5,0], 5,3,[22,99,[44,[1111,2222,3333],556677],55,[99],77],10,11]
const arraySix = arrayFive.flat(Infinity)
console.log(arraySix)

console.log(Array.isArray("irfaMaitla"))
console.log(Array.from("irfaMaitla"))
