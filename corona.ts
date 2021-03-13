const express = require('express')
const virus = require('@freezegold/covid-19')
const { confirmed, recovered, deaths } = require("./vars")
const port = "1234"
const confirm2 = confirmed
const recover2 = recovered
const death2 = deaths
const app = express()

app.get("/", function (req, res) {
    res.send(`<h1 align="center">Covid Watch</h1><h2 align="center">Confirmed: ${confirm2}</h2><h2 align="center">Recovered: ${recover2}</h2><h2 align="center">Deaths: ${death2}</h2>`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})