const virus = require('@freezegold/covid-19')

function confirmed() {
    virus.covid('global', (err, res) => {
        if (err) throw err;
        confirmed = res.confirmed
        return confirmed;
    })
}

function recovered() {
    virus.covid('global', (err, res) => {
        if (err) throw err;
        recovered = res.recovered
    })
}

function deaths() {
    virus.covid('global', (err, res) => {
        if (err) throw err;
        deaths = res.deaths
    })
}

module.exports = {
    deaths,
    recovered,
    confirmed
}