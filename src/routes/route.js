const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

const newBookModel= require("../models/newBookModel")
const newBookController= require("../controllers/newBookController")

const newAuthorModel= require("../models/newAuthorModel")
const newAuthorController= require("../controllers/newAuthorController")

const publisherModel= require("../models/publisherModel")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createUser',  UserController.createUser  );
router.get('/getAllUsers',  UserController.getUsersData  );

router.post('/createBook',  BookController.createBook  );
router.get('/getAllBooks',  BookController.getBooksData  );

router.post('/getBooksInYear', BookController.getBooksInYear);
router.post('/getParticularBooks', BookController.getParticularBooks);
router.get('/getRandomBooks', BookController.getRandomBooks);
router.get('/getXINRBooks', BookController.getXINRBooks);

//Create a mybook
router.post('/createNewBook',  newBookController.createNewBook);
//Create a author 
router.post('/createNewAuthor',  newAuthorController.createNewAuthor);
//Populate
router.post('/getBooks',newBookController.getBooks);
//Publisher
router.post('/createPublisher',newBookController.createPublisher)

router.post('/findAuthor',  newBookController.findAuthor);
router.post('/priceChange',  newBookController.priceChange);
router.get('/findBooks',  newBookController.findBooks);
module.exports = router;