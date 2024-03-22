//   Object Literals

const mySmbl = Symbol("Key1")

const irfanser = {
name: "irfan",
[mySmbl]: "NewKey2",
Gmail: "irfan@gmail.com",
Address: "Chak No 223/p",
"Class": "BS Computer Sciencs"
}
console.log(irfanser.Gmail)
console.log(irfanser["Gmail"])  // This method is best because Some Function like ("gmail": "irfan@gmail.com")
console.log(irfanser["Class"])
console.log(irfanser[mySmbl])

irfanser.Gmail="irfan@maitla.com"    // change value of object ==> Gmail
// Object.freeze(irfanser)   // after use it, we can't change values of object
irfanser.Gmail="irfan@223.com"
console.log(irfanser)

irfanser.greeting = function(){
    console.log("Hello User M.irfan");
}
irfanser.greetingTwo = function(){
    console.log(`Hello ${this.Address} , this is address of User M.irfan`);
}
console.log(irfanser.greeting());
console.log(irfanser.greetingTwo());


//       object SingleTon

const regularUser= {
    UserName: {
            OriginalUserName: {
                FirstName: "irfan",
                lastName: "Maitla"
            }
    }
}
console.log(regularUser.UserName.OriginalUserName.lastName)

const obj1={1:"ab", 2:"cd", 3:"ef"}
const obj2={4:"gh", 5:"ij", 6:"kl"}
// const obj3={obj1, obj2}
// const obj3= Object.assign(obj1, obj2)  // or we can use ({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

console.log(obj3)

console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))

console.log(obj1.hasOwnProperty('1'))
console.log(obj1.hasOwnProperty('135'))

//++++++++++++++++++ Destructer ++++++++++++++++++++
console.log(" Its about Destructer of any object or arry")

const Shop = {
    shopame: "Sufyan Traders",
    shopAddress: "Chak No 223/p"
}

const {shopAddress} = Shop
console.log(shopAddress) //instead of writting console.log(shop.shopAddress)
