const {sum}= require('../app.js');

test('la suma de 5 + 8 to equal 3', () => {
  expect(sum(5, 2)).toBe(7);
});

test("One euro should be 1.17 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.17)
    const expected = 3.5 * 1.17;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.17 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.17)
})

test("1.17 dollars should be 187.17 yens", function() {
    // Importamos la función desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Si 1.07 dólares son 1 euro, y 1 euro son 156.5 yenes,
    // entonces 1.07 dólares deben ser exactamente 156.5 yenes.
    const yens = fromDollarToYen(1.17);
    
    // La prueba
    expect(yens).toBe(186.17);
});

test("187.17 yens should be 0.87 pounds", function() {
    // Importamos la función desde app.js
    const { fromYenToPound } = require('./app.js');

    // Si 187.17 yenes son 1 euro, y 1 euro son 0.87 libras,
    // entonces 187.17 yenes deben ser 0.87 libras.
    const pounds = fromYenToPound(156.5);

    // La prueba
    expect(pounds).toBe(0.87);
});