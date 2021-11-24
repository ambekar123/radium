const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const productController = require('../controllers/productController')
const orderController = require('../controllers/orderController')
const appMiddleware = require('../middlewares/appMiddleware')
const jwt = require('jsonwebtoken')

// router.post('/users', appMiddleware.validateAppType, userController.createUser);
// //For JWT session
// router.get('/users/:userId', userController.getDetails)
// //For JWT session
// router.post('/login', userController.login)
// router.post('/products', productController.createProduct);
// router.post('/orders', appMiddleware.validateAppType, orderController.createOrder);


 let tokenCheck = function(req,res,next){
     let token = req.headers['x-auth-token']
    let validToken = jwt.verify(token,'radium')
    if(validToken){
        req.validToken=validToken
         next()
   }else{
        res.status(401).send({status:false,msg:"invalid token"})
    }
 }




router.post('/registerUser', userController.registerUser)
router.post('/getUsers', userController.getUsers)
router.post('/loginUser', userController.loginUser)
router.get('/users/:userId',tokenCheck, userController.getUserDetails)
router.put('/putUserUpdate/:userId',tokenCheck, userController.putUserUpdate)


module.exports = router;