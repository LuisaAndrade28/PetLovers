"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//criei essa classe
class Consumo {
    constructor(nome, valor, quantidade) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
        this.dataConsumo = new Date();
    }
}
exports.default = Consumo;
