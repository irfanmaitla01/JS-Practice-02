function irfan(){
    console.log("M")
    // console.log("a")
    // console.log("i")
    // console.log("t")
    // console.log("l")
    // console.log("a")
}
irfan()

function addTwoNum(num1, num2){        // Parameters ==> which add variables string or number etc
    console.log(num1 + num2)
}
addTwoNum(223,135)                //Arguments ==> which values pass from this function like 223,135
addTwoNum(223,"135")
addTwoNum(223,"abc")

function MaitlaUser(username){
    return `${username} just logged in`
}
console.log(MaitlaUser("irfan maitla"))

function MaitlaUser2(username2){
    if(username2 === undefined){
        console.log("Please enter username then login")
        return `Nobody logged in`
    }
    return `${username2} just logged in`
}
console.log(MaitlaUser2())


// function manyCartPrices(num7){       // it return only first price
//     return num7
// }
// console.log(manyCartPrices(200,500,550,700))

function manyCartPrices(...num9){     // it ruturn all prices
    return num9
}
console.log(manyCartPrices(200,500,550,700))

function manyCartPrices3(val1, val2, ...num7){     // it ruturn all prices
    return num7
}
console.log(manyCartPrices3(200,500,550,700,10000,28667))  //200 and 500 save in vol1 & vol2


const User99={
    name7 : "Irfan Iqbal",
    adress : "Chak 223@p"
}
function objectInFunction(anyArray){
    console.log(`User name is ${anyArray.name7} and address is ${anyArray.adress}, secure to log in`)
}
objectInFunction(User99)
