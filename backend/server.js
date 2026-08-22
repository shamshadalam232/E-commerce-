const express = require('express')
const app = require('./app')
const mongoDbConnect = require('./src/db/db')

mongoDbConnect()

app.listen(3000, () => {
    console.log('server is running 3000')
})

