const mongoose = require("mongoose");
const axios = require("axios");
const crytoModel = require("../models/crytoModel");

// API key: 98357e79-5977-4f01-80fe-50efb734adb7

const getCryptoCoins = async function(req,res){
    try{
        let CryptoOptions = {
            method:"get",
            url:"http://api.coincap.io/v2/assets"
        };
    const cryptoCoins = await axios(CryptoOptions)
    let arrayOfData = cryptoCoins.data.data
    for (i in arrayOfData){
        let data = {
            symbol:arrayOfData[i].symbol,
            name : arrayOfData[i].name,
            marketCapUsd:arrayOfData[i].marketCapUsd,
            priceUsd:arrayOfData[i].priceUsd
        }
        await crytoModel.create(data)
    }
    let sorted = arrayOfData.sort(function(a,b){ return b.changePercent24Hr - a.changePercent24Hr})
    res.status(200).send({data:sorted})
    }
    catch(err){
        console.log(err.message)
        res.status(500).send({msg:"Something went wrong"})
    }
}

module.exports.getCryptoCoins=getCryptoCoins









// let coinsName = response.data.data.name
// console.log(coinsName)
// let coinsSymbol = response.data.data.symbol
// console.log(coinsSymbol)
// let coinsMarket = response.data.data.marketCapUsd
// console.log(coinsMarket)
// let coinsPrice = response.data.data.priceUsd
// console.log(coinsPrice)
// res.status(200).send({msg:"Success",data:coinsPrice})



// let coins = cryptoCoins.data.data.sort((a,b) => { return b.changePercent24Hr - a.changePercent24Hr })
// for(let i = 0;i<coins.length;i++){
//     let data = (({symbol,name,marketCapUsd,priceUsd}) => ({symbol,name,marketCapUsd,priceUsd}))(coins[i])
//     await crytoModel.findOneAndUpdate(data,data,{upsert:true})
// }
// const newData = await crytoModel.find()
// res.status(200).send({data:newData})