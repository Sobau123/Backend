const {describe, it, expect} = require("@jest/globals");
const {somar, subtrair, multiplicar, dividir} = require("../src/exercicio");

describe('Testando as função matematicas', () => {
    //Somando
    it('Somando dois numeros', () => {
        const result = somar(1, 2);
        expect(result).toBe(3);
    });
    it('Somando dois numeros', () => {
        const result = somar(4, 2);
        expect(result).toBe(6);
    });
    it('Somando dois numeros', () => {
        const result = somar(5, 3);
        expect(result).toBe(8);
    });
    it('Somando dois numeros', () => {
        const result = somar(8, 12);
        expect(result).toBe(20);
    });

    //Subtrair
    it('Subtraindo dois numeros', () => {
        const result = subtrair(1, 2);

        expect(result).toBe(-1);
    });
    it('Subtraindo dois numeros', () => {
        const result = subtrair(10, 4);

        expect(result).toBe(6);
    });
    it('Subtraindo dois numeros', () => {
        const result = subtrair(9, 6);

        expect(result).toBe(3);
    });
    it('Subtraindo dois numeros', () => {
        const result = subtrair(20, 10);

        expect(result).toBe(10);
    });

    //Multiplicação
    it('Multiplicando dois numeros', () => {
        const result = multiplicar(1, 2);

        expect(result).toBe(2);
    });
    it('Multiplicando dois numeros', () => {
        const result = multiplicar(5, 3);

        expect(result).toBe(15);
    });
    it('Multiplicando dois numeros', () => {
        const result = multiplicar(20, 4);

        expect(result).toBe(80);
    });
    it('Multiplicando dois numeros', () => {
        const result = multiplicar(9, 8);

        expect(result).toBe(72);
    });

    //Divisão
    it('Dividindo dois numeros', () => {
        const result = dividir(4, 2);

        expect(result).toBe(2);
    });
    it('Dividindo dois numeros', () => {
        const result = dividir(27, 3);

        expect(result).toBe(9);
    });
    it('Dividindo dois numeros', () => {
        const result = dividir(100, 5);

        expect(result).toBe(20);
    });
    it('Dividindo dois numeros', () => {
        const result = dividir(64, 8);

        expect(result).toBe(8);
    });

});