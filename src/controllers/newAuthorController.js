const AuthorModel= require("../models/newAuthorModel")
const mongoose= require("mongoose")

const createNewAuthor = async function (req, res) {
    const author= req.body
    let savedAuthor= await AuthorModel.create(author)
    res.send({msg: savedAuthor})
}


module.exports.createNewAuthor= createNewAuthor