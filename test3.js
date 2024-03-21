let a=223
let b=String(a)
console.log(b)
console.log(typeof b)
// *********Comparison*********

// console.log (2>1)
// console.log (2<1)
// console.log (2<=1)
// console.log (2==1)
// console.log (2!=1)

// console.log (null>0)
// console.log(null>2)
// console.log(null>=0)
// console.log(null<2)

console.log("2" === 2)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Momory (Primitive) , Heap Memory (Non-Primitive)

let UserOne="irfan@gmail.com"
let UserTwo=UserOne
UserTwo="Maitla@gmail.com"
console.log(UserOne)
console.log(UserTwo);

let ProfileOne= {
    Email: "Chaman@gmail.com"
    // IdOne = "myemail@gmail.com"
}
let ProfileTwo= ProfileOne
ProfileTwo.Email="223@gmail.com"
console.log(ProfileOne.Email)
console.log(ProfileTwo.Email)