let oneEuroIs = {
    "JPY": 187.17, // Japan Yen 
    "USD": 1.17,   // US Dollar
    "GBP": 0.87,   // Libra Esterlina    
}

// Creamos la funcion dentro de una variable. 

const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valiueInYen = valueInEuro * oneEuroIs.JPY;
    return valiueInYen
}

const fromYenToPound = function (valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}

module.exports = {

  fromEuroToDollar, 
  fromDollarToYen,
  fromYenToPound

}