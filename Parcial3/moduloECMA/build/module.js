"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jardin {
    constructor() {
    }
    Plantar() {
        console.log('Plantando una planta...');
    }
    Regar() {
        console.log('Regando una planta...');
    }
    Empalar() {
        console.log('Retirando una planta...');
    }
}
const jardin = new Jardin();
exports.default = jardin;
