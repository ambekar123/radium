const axios = require("axios");
//const { options } = require("../routes/route");

const getStatesList = async function(req,res){
    try{
//other method
// let options={
//     method:"get",
//     url:"https://cdn-api.co-vin.in/api/v2/admin/location/states"
// }
// const cowinStates = await axios(options) 

    const cowinStates = await axios.get("https://cdn-api.co-vin.in/api/v2/admin/location/states")    // link taken from website of apisetu.gov.in
    //console.log(cowinStates.data)
    console.log("Working")
    res.status(200).send({msg:"Successfully got data",data:cowinStates.data})

    }
    catch(err){
        console.log(err.message);
        res.status(500).send({msg:"Some error occured"})
    }
};

const getDistrictsList = async function(req,res){
    try{
    let stateId = req.params.stateId
    console.log("states",id)

    let options = {
        method:"get",
       // url:"https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+id
       url:`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
    }
    let response = await axios(options)
    let districts = response.data
    console.log(response.data)
    res.status(200).send({msg:"Success",data:districts})
}
catch(err){
    console.log(err.message)
    res.status(500).send({msg:"Something went wrong"})
}
}

const getByPin = async function(req,res){
try{
    let pin = req.query.pincode
    let date = req.query.date
    let options={
        method:get,
        url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/searchByPin/location/?pincode=${pin}&date=${date}`,
    }
    let response = await axios(options)
    let centers = response.data
    console.log(centers)
    res.status(200).send({msg:"Success",data:centers})
}
catch(err){
    console.log(err.message)
    res.status(500).send({msg:"Something went wrong"})
}
}

const getOtp = async function(req,res){
try{
    let options = {
        method:"post",
        url:`https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
        data:{
            "mobile":req.body.mobile // we are sending json body in the data.
        }
    }
        let response = await axios(options)
        let id = response.data
        res.status(200).send({msg:"Success",data:id})
    }
        catch(err){
            console.log(err.message)
            res.status(500).send({msg:"Something went wrong"})
        }
}

const verifyOtp = async function(req,res){
    try{
        let options ={
            method:"post",
            url:"https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP",
            data:{ "otp": req.body.otp,
                    "txnId": req.body.txnId
                  }
        }
        let response = await axios(options)
        let token = response.data
        res.status(200).send({msg:"Success",data:token})
    }
    catch(err){
        console.log(err.message)
        res.status(500).send({msg:"Something went wrong"})
    }
}


// Assignment:

///O1..............................

const getLondon = async function(req,res){
    try{
        let options = {
            method:"get",
            url:"http://api.openweathermap.org/data/2.5/weather?q=London&appid=501c4da9141bac955a83bc7512e6bdfd",
        }
            let response = await axios(options)
            let id = response.data
            res.status(200).send({msg:"Success",data:id})
        }
            catch(err){
                console.log(err.message)
                res.status(500).send({msg:"Something went wrong"})
            }
    }

    //Q2........................

const londonWeather = async function(req,res){
    try{
        let londonOptions = {
            method:"get",
            url:"http://api.openweathermap.org/data/2.5/weather?q=London&appid=501c4da9141bac955a83bc7512e6bdfd",
        
        }
            let london1  = await axios(londonOptions)
            let london2 = london1.data.name
            console.log(london2)
            let london = london1.data.main.temp
            console.log(london3)
            res.status(200).send({msg:"Success",data:london3})
        }
            catch(err){
                console.log(err.message)
                res.status(500).send({msg:"Something went wrong"})
            }
    }

//Q3......................


const getWeather = async function(req,res){
    try{
        let cities = ["Bangalore","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
        let cityObjArray = []
        for(i=0;i<cities.length;i++){
            let obj= { city: cities[i] }
            let resp=  await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=501c4da9141bac955a83bc7512e6bdfd`)
            console.log(resp.data.main.temp)
            obj.temp= resp.data.main.temp
              cityObjArray.push(obj)
        }
          let sorted = cityObjArray.sort(  function(a, b) { return a.temp - b.temp } )   
        console.log(sorted)
        res.status(200).send({status: true, data: sorted})
        } catch(error){
        console.log(error)
        res.status(500).send({status: false, msg: "server error"})
    }
}


module.exports.londonWeather = londonWeather
module.exports.getWeather = getWeather
module.exports.getLondon = getLondon









module.exports.getStatesList=getStatesList
module.exports.getDistrictsList=getDistrictsList
module.exports.getByPin=getByPin
module.exports.getOtp=getOtp
module.exports.verifyOtp=verifyOtp