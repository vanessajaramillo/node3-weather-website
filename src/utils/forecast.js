const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/003689f31aa8081a76c431cbcad20690/' + latitude + ','+ longitude +'?units=si&lang=es'

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connecto to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + "% chance of rain."/*{
                summary: response.body.daily.data[0].summary,
                temperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability
            }*/)
        }
    })
}

module.exports = forecast