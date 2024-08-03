//CommonJS 1-usul
// const add = (a, b) => {
//     return a + b;
// }

// const subtract = (a, b) => {
//     return a - b;
// }

// module.exports = { addFn: add, subtract }

//BOSHQA FILE'DA CHAQIRIB ISHLATISH
// const { subtract, addFn } = require('./functions')
// console.log(subtract(45, 6))
// console.log(addFn(23, 56))


//CommonJS 2-usul
module.exports.add = (a, b) => {
    return a + b;
}

module.exports.subtract = (a, b) => {
    return a - b;
}

//BOSHQA FILE'DA CHAQIRIB ISHLATISH
// const { subtract, add } = require('./functions')
// console.log(subtract(23, 54))
// console.log(add(34, 5))


//=================================================================================================================================================

//ESModule 1-usul
// const add = (a, b) => {
//     return a + b;
// }

// const subtract = (a, b) => {
//     return a - b;
// }

// export default { add, subtract }

//BOSHQA FILE'DA CHAQIRIB ISHLATISH
// import functions from "./functions.js"
// console.log(functions.add(34,65))
// console.log(functions.subtract(45,7))


//ESModule 2-usul
// export const add = (a, b) => {
//     return a + b;
// }

// export const subtract = (a, b) => {
//     return a - b;
// }

//BOSHQA FILE'DA CHAQIRIB ISHLATISH
// import { add, subtract } from "./functions.js";
// console.log(add(34, 5))
// console.log(subtract(45, 2))
