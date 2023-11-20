const {describe, it, expect } = require("@jest/globals")
const exercicioMedia = require("../src/exercicioMedia");


describe('Testes em exercicios do Marcelo', () => {

     it('Somando dois num positivos', () => {
        let altura = [1.80, 2.05, 1.30, 1.45];
        let sexo = ['M', 'F', 'F', 'M'];

        const result = exercicioMedia(sexo, altura);
        console.log(result)
        expect(result.maior).toBe(2.05);
     })

})