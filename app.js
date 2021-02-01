const { static } = require('express')
const express = require('express')

const crud = require('crud')
const cruds = new crud()

const app = express()

app.use('/css', express.static('css'))

app.get('/', (req, res) => {
    /*
    let results = cruds.checkEmail('valorpassado')
    console.log(results)
    res.sendFile(__dirname + '/view/index.html')
    */
    var request = require('request');
    request('http://localhost:8082/usuario/login/usuario?email=teste&senha=senha', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        var parsedWeather = JSON.parse(body);
        console.log('A temperatura atual em São Paulo é ' + parsedWeather['main']['temp']); // Print the Temperature in the city of São Paulo
    });
})

app.listen(5050, () => {
    console.log('Server started at https://localhost5050')
})