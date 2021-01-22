const { static } = require('express')
const express = require('express')

const app = express()

app.use('/css', express.static('css'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html')
})

app.listen(5050, () => {
    console.log('Server started at https://localhost5050')
})