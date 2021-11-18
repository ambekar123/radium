const newBookModel= require("../models/newBookModel")
const newAuthorModel = require("../models/newAuthorModel")
const newAuthorController = require("./newAuthorController")
const publisherModel = require("../models/publisherModel")
const mongoose= require("mongoose")

const createNewBook = async function (req, res) {
    const book= req.body
    let authorId = req.body.author
    let publisherId = req.body.publisher
    let requestPublisherById = await publisherModel.findById(publisherId)
    let requestAuthorById = await newAuthorModel.findById(authorId)
    if(requestAuthorById && requestPublisherById){
        let bookCreated = await newBookModel.create(book)
        res.send({msg:bookCreated})
    }else{
        res.send("Enter a valid author id or publisher id")
    }
    let savedBook= await newBookModel.create(book)
    res.send({book: savedBook})
}
  
const createPublisher = async function (req, res) {
    let publisher= req.body
    let savedPublisher= await publisherModel.create(publisher)
    res.send({msg: savedPublisher})
}

const getBooks = async function (req,res){
    let allBooks = await newBookModel.find().populate('author').populate('publisher')
    res.send({msg:allBooks})
}

//List out the books written by Chetan Bhagat:
const findAuthor = async function (req, res) {
    let allBooks = await newAuthorModel.find({author_name:"Chetan Bhagat"})
    let id=allBooks.author_id;
    let books = await newBookModel.findOne({author_id:1})
    res.send({msg: books})
}
//Find the author of "Two States" and update the book price to 100
// const priceChange = async function (req, res) {
//     let allBooks = await newBookModel.find({name:"2 States"})
//     let abc1 = await newAuthorModel.find({author_id:allBooks[0].author_id})
//     let abc2 = abc1[0].author_name
//     await newBookModel.updateMany({name:"2 States",price:100})
//     let abc3 = abc2[0].price
//     res.send({"author_name":abc2,"price":abc3})  
// }
const priceChange = async function (req, res) {
    let allBook = await newBookModel.find({name:"Two States"})
    let abc1 = await newAuthorModel.find({author_id:allBook[0].author_id})
    let abc2 = abc1[0].author_name
   await newBookModel.updateMany({name:"Two States"},{price:100})
   let abc3 = allBook[0].price
        res.send({ "author_name":abc2,"price":abc3 })
}   

//Find the book which costs between 50-100 including them and
//give back author names with respective books.
const findBooks = async function (req, res) {
    let book = await newBookModel.find({price:{$in:[50,100]}});
    let len = book.length
    let array = []
    let array1 = []
    for(let element of book){
        let a = element.author_id
        let b = element.name;
        array.push(a)
        array1.push(b)
    }
    let arrayOfNames = []
    for(let element of array){
        let name = await newAuthorModel.find({author_id:element})
        arrayOfNames.push(name[0].author_name)
    }
    res.send({"books":array1,"authors":arrayOfNames})
}
module.exports.createNewBook= createNewBook
module.exports.findAuthor= findAuthor
module.exports.priceChange= priceChange
module.exports.findBooks= findBooks
module.exports.getBooks = getBooks
module.exports.createPublisher = createPublisher