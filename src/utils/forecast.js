const request = require('request');

const forecast = (latitude,longitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/7df145f9de3d6fa096b1d75c782e91e5/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    request({url,json:true},(error,{body})=>{
       if(error){
          callback("Unable to connect to weather services!",undefined)
       }
       else if (body.error){
          callback("Unable to find location",undefined)
       }
       else{
          callback(undefined,body.daily.data[0].summary+" It is currently "+ body.currently.temperature+ " degrees out.The high today is "+body.daily.data[0].temperatureHigh+" with a low of "+body.daily.data[0].temperatureLow+". There is "+ body.currently.precipProbability +" % chance of rain.")
       }
    })
 }

 module.exports = forecast