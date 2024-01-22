const axios = require('axios');
var constants = require('../lib/constants');

const BASE_URL = "http://data.fixer.io/api/"

function symbols() {
    var _symbols_url = BASE_URL + "symbols?access_key=" + constants.CURRENCY_CONVERTER_KEY;
    return "asd";
    //return await axios.get(_symbols_url).then(response => {response.data["symbols"]});
}

/*
function latestRate(base, symbols){
    var _rates_url = BASE_URL + "latest?access_key=" + constants.CURRENCY_CONVERTER_KEY;
    _rates_url += "&symbols=" + symbols.join(',');

    axios.get(_rates_url).then(response => {    
        const _currency_rates = response.data["rates"];
        var _base_amount = response.data["rates"][base];
        var _converted_currency = new Map();

        symbols.forEach(_element => {
            var _new_rate = _base_amount / _currency_rates[_element]
            _converted_currency.set(_element, _new_rate);
        });

        return _converted_currency;
    });
}
*/

//var get_rate = latestRate("PHP", ["JPY", "EUR", "PHP"])
//get_rate.forEach(_element => {console.log(_element)});
var country_symbols = symbols();
console.log(country_symbols)