const express = require('express');
const router = express.Router();

const cryptoController = require("../controllers/cryptoController")

router.get("/assets", cryptoController.getCryptoCoins)

// const cowinController = require("../controllers/cowinController")

// router.get("/cowin/states",cowinController.getStatesList)
// router.get("/cowin/districts/:stateId",cowinController.getDistrictsList)
// router.get("/cowin/centers",cowinController.getByPin)
// router.post("/cowin/getOtp",cowinController.getOtp)
// router.post("/cowin/verifyOtp",cowinController.verifyOtp)

// router.get("/londonWeather",cowinController.londonWeather)
// router.get("/getWeather",cowinController.getWeather)
// router.get("/getLondon",cowinController.getLondon)
module.exports = router;