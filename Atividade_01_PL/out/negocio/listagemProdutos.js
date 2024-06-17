"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
//criei essa classe
class ListagemProdutos extends listagem_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
    }
    listar() {
        console.log(`-----------------------------------`);
        console.log(`\nLista de todos os produtos:`);
        console.log(`-----------------------------------`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome);
            console.log(`Preço: ` + produto.preco);
            console.log(`Quantidade vendida: ` + produto.quantidadeVendida);
            console.log(`--------------------------------------------------------------------`);
        });
        console.log(`\n`);
    }
}
exports.default = ListagemProdutos;
