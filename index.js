const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.use(express.static('root'))
app.use(express.static('public'))
app.use(express.static('test-getwin'))

app.listen(port)
console.log('Server started at http://localhost:' + port)