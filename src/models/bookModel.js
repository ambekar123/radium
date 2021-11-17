const mongoose=require('mongoose')

const bookSchema= new mongoose.Schema({

//String
//Number
// Boolean
// Array
// Object
// Date
// Buffer
// ObjectId

    bookName: {
        type: String,
        required: true
    },
    authorName:{
        type: String,
    },
    tags: [ String ], //array of strings 
    year: {
        type: Number,
        default: 2021,
    },
     prices: {
        indianPrice: String,
        europeanPrice: String,
    },
    totalPages:{
        type: Number,
    },
    stockAvaliable:{
        type: Boolean,
    },
      //isPublished: {
      //  type: Boolean, //Boolean
        //default: false
    //},
     //ISBN: {
       // type: String,
       // required: true,
       // unique: true
   // },
    //sales: {
      //  type: Number,
        //default : 0
    //},
   // completionDate: Date
  

}, {timestamps: true} )

module.exports = mongoose.model( 'newbook', bookSchema ) 



// Intro to Backend Engineering
// FunctionUp
// #Programming #backend #nodejs #bestBookEver #cool #lifeChanging