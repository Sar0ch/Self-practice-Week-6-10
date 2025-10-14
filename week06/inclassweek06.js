const greet = (name, formatter) => formatter(name)
const shout = text => text.toUpperCase() + '!!!'
const hi =  text => "Hello " + text
const star = text => text + '✨'
console.log(greet('Alice' , star))

//เปลีย่น formatd
//higher order function - ฟังก์ชันที่ทำงานกับฟังก์ชันอื่นได้ โดยมี 2 เงื่อนไขหลัก ๆ:
// รับฟังก์ชันเป็น parameter ได้
// return ฟังก์ชันออกมาได้

function calculate(nums, compute) {
  return compute(nums)
}

function sum(elements) {
  return elements.reduce((total, current) => total + current)
}

function max(elements) {
  return Math.max(...elements)
}

function min(elements) {
  return Math.min(...elements)
}

function sort(elements) {
  return elements.sort((a, b) => a - b)
}

console.log(calculate([1, 3, 5, 7], sum))
console.log(calculate([100, 3, 5, 7], max))
console.log(calculate([10, 2, 0, 7], min))
console.log(calculate([10, 2, 0, 7], sort))

//-----------------------------------------------------------------------

// const idGen = idGenerator()
// function idGenerator () {
//     let count = 0
//     return function(){
//         count += 1
//             return count
//     }
// }
// console.log(idGen())
// console.log(idGen())
// console.log(idGen())

// function outerFunction(a) {
//   function innerFunction(b) {
//     return a + b
//   }
//   return innerFunction
// }


// const addFive = outerFunction(5)
// console.log(addFive(3))  // 8

// const addTen = outerFunction(10)
// console.log(addTen(2))   // 12

// function doSomething(x){
//   function echo(){
//     return `hello`,$[x]
//   }
// return echo
// }
// console.log(doSomething())

//-----------------------------------------------------------------------
//!Closure Funtion 

function makeAdder(x,y){ //5
  function add(y) { //y=3
      //closure function
    return x + y 
  }
  return add 
  // return x + y 
}
const add5 = makeAdder(5) // add5 = add
console.log(add5(3)) //8
// console.log(makeAdder(5,3))
// console.log(makeAdder(5,3))

const idGen = idGenerator()
function idGenerator(){
  let count = 0
  return function(){
    count += 1
    return count
  }
}
console.log(idGen()) // 1
console.log(idGen()) // 2
console.log(idGen()) // 3

const addFive = outerFunction(5)
console.log(addFive(3))

const addTen = outerFunction(10)
console.log(addTen(2))
