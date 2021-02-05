const express = require('express')
const bodyParser = require('body-parser')
const urlencodeParser = bodyParser.urlencoded({ extended: false })
const mysql = require('mysql')

const bd = mysql.createConnection({
    host        : 'localhost',
    user        : 'curso',    
    database    : 'login',
    password    : '040303',
    port        : '3306'
})

const crud = require('crud')
const { urlencoded } = require('body-parser')
const cruds = new crud()

const app = express()

app.use('/css', express.static('css'))

app.get('/', (req, res) => {       
    res.sendFile(__dirname + '/view/index.html')        
})

function veriLogin(email, password) {
    var resLogin = cruds.verificaLogin(email, password) 
    return resLogin       
}

app.post('/home', urlencodeParser, (req, res) => { 
    var resLogin = veriLogin(req.body.username, req.body.password)      
    console.log(resLogin)
    res.send('<h1>Olá Mundo</h1>')    
})

app.listen(5050, () => {    console.log('Server started at https://localhost5050')      })