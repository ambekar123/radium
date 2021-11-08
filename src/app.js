const obj = require('./logger')
const obj1 = require('./until/helper')
const obj2 = require('./validator/formatter')
const obj3 = require('lodash')

function mainFunction(){
    console.log('This is my main function')
}
//obj.loggingFunction('radium batch week 4')
//obj.someMore('Hi')

obj.log()
obj.welcome()
console.log(''+obj.url)
obj1.printDate()
obj1.printMonth()
obj1.getBatchInfo()
obj2.trim()
obj2.changeToLowerCase()
obj2.changeToUpperCase()
console.log(obj3.chunk(['January','February','March','April','May','June','July','August','September','Oct','Nov','Dec'],4))
console.log(obj3.tail([1,3,5,7,9,11,13,15,17,19]))
console.log(obj3.union([2,8,6],[8,9,1,2],[2],[8,1,2],[2,9,1,7]))
console.log(obj3.fromPairs([['Hi','Raju'],['Hello','Anil'],['Name','Rahul']]))
