const virus = require('@freezegold/covid-19')

async function confirmed() {
    virus.covid('global', (err, res) => {
        if (err) throw err;
        confirm = res.confirmed
        return confirm;
    })
}

async function recovered() {
    virus.covid('global', (err, res) => {
        if (err) throw err;
        recover = res.recovered
        return recover;
    })
}

async function deaths() {
    virus.covid('global', (err, res) => {
        if (err) throw err;
        death = res.deaths
        return death;
    })
}

module.exports = {
    deaths,
    recovered,
    confirmed
}