const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

// const createUser = async function (req, res) {
//     let userDetails = req.body
//     // let appType = req.headers['isfreeapp']
//     // let userType
//     // if(appType === 'false') {
//     //     userType = false
//     // } else {
//     //     userType = true
//     // }

//     userDetails.freeAppUser = req.isFreeAppUser//this attribute was set in req in the appMiddleware
//     let userCreated = await userModel.create(userDetails)
//     res.send({ data: userCreated })
// }


// //For JWT session
// const login = async function (req, res) {
//     userName = req.body.name
//     userPassword = req.body.password

//     let user = await userModel.findOne({ name: userName, password: userPassword, isDeleted: false })
//     if (user) {
//         const generatedToken = jwt.sign({ userId: user._id }, "radium")
//         res.send({ status: true, data: user._id, token: generatedToken })
//     } else {
//         res.send({ status: false, message: 'Invalid credentials' })
//     }
// }

// //For JWT session
// const getDetails = async function (req, res) {
//     let token = req.headers['x-auth-token']
//     if (!token) {
//         return res.send({ status: false, message: 'No authentication token present' })
//     } else {
//         let decodedToken = jwt.verify(token, 'titanium')
//         if (decodedToken) {
//             let userDetails = await userModel.findOne({ _id: req.params.userId, isDeleted: false })
//             if (userDetails) {
//                 res.send({ status: true, data: userDetails })
//             } else {
//                 res.send({ status: false, message: 'User not found' })
//             }

//         } else {
//             res.send({ status: false, message: 'Token not valid' })
//         }
//     }
// }
//Assignment
// let registerUser = async function (req,res){
//     try{
//         if(req.body && Object.keys(req.body).length>0){
//             let user = await userMopdel.create(req.body)
//             res.status(201).send({status:true,data:user})
//         }else{
//             res.status(400).send({status:false,msg:"Request must contain a body"})
//         }
//     } catch(error){
//         res.status(500).send({status:false,msg:error.message})
//     }
// }

//Assignment:

const registerUser = async function (req, res) {
    let userDetails = req.body
    let userCreated = await userModel.create(userDetails)
    res.send({ data: userCreated })
}

let getUsers = async function (req, res) {
    try {
        let users = await userModel.find({ isDeleted: false }, { createdAt: 0, updatedAt: 0, _v: 0 })
        if (users && users.length > 0) {
            res.status(200).send({ status: true, data: users })
        } else {
            res.status(404).send({ status: false, msg: "No users found" })
        }

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const loginUser = async function (req, res) {
    try {
        if (req.body && req.body.name && req.body.password) {
            let user = await userModel.findOne({ name: req.body.name, password: req.body.password, isDeleted: false }, { createdAt: 0, updatedAt: 0, __v: 0 })
            if (user) {
                let payload = { _id: user._id }
                let token = jwt.sign(payload, 'radium')
                res.header('x-auth-token', token)
                res.status(200).send({ status: true })
            } else {
                res.status(401).send({ status: false, msg: "invalid username or password" })
            }
        } else {
            res.status(400).send({ status: false, msg: "request body must contain username as well as password" })
        }
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}


const getUserDetails = async function (req, res) {
    try {
       // let token = req.headers['x-auth-token']
       // let validToken = jwt.verify(token, 'radium')
       // if (validToken) {
            if (req.validToken._id == req.params.userId) {
                let userput = await userModel.findOne({ _id: req.params.userId, isDeleted: false })
                if (userput) {
                    res.status(200).send({ status: true, data: userput })
                } else {
                    res.status(400).send({ status: false, msg: "user not found" })
                }
            }else{
                res.status(403).send({status:false,msg:"not authorized"})  
                      }
                    //  }else{
                    //    res.status(401).send({status:false,msg:"invali token"})  
                   //   }
                  }catch(error) {
                    res.status(500).send({status:false,msg:error.message})    
                  }
                }
    
      const putUserUpdate = async function (req, res) {
         // let token = req.headers['x-auth-token']
        // let validToken = jwt.verify(token, 'radium')
         // if (validToken) {
           if (validToken._id == req.params.userId) {
         let userput = await userModel.findOneAndUpdate({ _id: req.params.userId},{email:req.body.email},{new:true})
               if (userput) {
                   res.send({data:userput})
                  }else{
               res.send({msg:"user not found"})
          }
          //  }else{
      //     res.send({msg:"not authorized"})
         //   }
         }
       }
                       

                 module.exports.registerUser = registerUser
                 module.exports.getUsers = getUsers
                 module.exports.loginUser= loginUser
                 module.exports.getUserDetails= getUserDetails
                 module.exports.putUserUpdate= putUserUpdate










                      // let getUserDetails = async function (req, res) {
                //     try {
                //         let token = req.headers['x-auth-token']
                //         let validToken = jwt.verify(token, 'radium')
                //         if (validToken) {
                //             if (validToken, _id == req.params.userId) {
                //                 let user = await userModel.find({ _id: req.params.userId, isDeleted: false })
                //                 if (user) {
                //                     res.status(200).send({ status: true, data: user })
                //                 } else {
                //                     res.status(404).send({ status: false, msg: "User not found" })
                //                 }
                //             } else {
                //                 res.status(403).send({ status: false, msg: "Not authorize" })
                //             }
                //         } else {
                //             res.status(401).send({ status: false, msg: "Invalid Token" })
                //         }
                //     } catch (error) {
                //         res.status(401).send({ status: false, msg: error.message })
                //     }


                // }
// module.exports.putUserUpdate=  putUserUpdate
// module.exports.createUser = createUser
// module.exports.getDetails = getDetails
// module.exports.login = login
// module.exports.loginUser = loginUser
 // module.exports.createUser= createUser
 //module.exports.getUserDetails = getUserDetails