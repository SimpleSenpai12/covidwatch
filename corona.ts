const express = require('express')
const virus = require('@freezegold/covid-19')
const { confirmed, recovered, deaths } = require("./vars")
const port = "1234"
const app = express()

app.get("/", function (req, res) {
    res.send(`<h1 align="center">Covid Watch</h1><h2 align="center">Confirmed: ${confirmed}</h2><h2 align="center">Recovered: ${recovered}</h2><h2 align="center">Deaths: ${deaths}</h2>`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})