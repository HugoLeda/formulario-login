const { static } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const urlencodeParser = bodyParser.urlencoded({ extended: false })

const crud = require('crud')
const { urlencoded } = require('body-parser')
const cruds = new crud()

const app = express()

app.use('/css', express.static('css'))

app.get('/', (req, res) => {    
    let results = cruds.verificaLogin()    
    res.sendFile(__dirname + '/view/index.html')        
})

app.post('/home', urlencodeParser, (req, res) => {
    res.send('<h1>Olá Mundo</h1>')
    console.log(req)
})

app.listen(5050, () => {
    console.log('Server started at https://localhost5050')
})