const { static } = require('express')
const express = require('express')
const encodeParser = require('')

const crud = require('crud')
const cruds = new crud()

const app = express()

app.use('/css', express.static('css'))

app.get('/', (req, res) => {    
    let results = cruds.verificaLogin()    
    res.sendFile(__dirname + '/view/index.html')        
})

app.post('/home', (req, res) => {
    res.send('<h1>Olá Mundo</h1>')
})

app.listen(5050, () => {
    console.log('Server started at https://localhost5050')
})