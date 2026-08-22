const express = require('express')
const app = require('./app')
const mongoDbConnect = require('./src/db/db')
const PORT = process.env.PORT

mongoDbConnect()

app.listen(PORT, () => {
    console.log('server is running 3000')
})

