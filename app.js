const { static } = require('express')
const express = require('express')

const crud = require('crud')
const cruds = new crud()

const app = express()

app.use('/css', express.static('css'))

app.get('/', (req, res) => {
    let a = cruds.checkEmail('parametro')
    console.log(a)
    res.sendFile(__dirname + '/view/index.html')
})

app.listen(5050, () => {
    console.log('Server started at https://localhost5050')
})