const virus = require("@freezegold/covid-19")

virus.covid('global', (err, res) => {
    if (err) throw err
    console.log(res)
    /* return 
    {
        confirmed: '53,479,378',
        recovered: '34,519,061',
        deaths: '1,304,682'
    }
    */
});