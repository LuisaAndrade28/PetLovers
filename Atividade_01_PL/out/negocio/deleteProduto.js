"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const delete_1 = __importDefault(require("./delete"));
//criei essa classe
class DeleteProduto extends delete_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    delete() {
        console.log(`--------------------------------------------------------------------`);
        console.log(`\nDeletar produto`);
        console.log(`--------------------------------------------------------------------`);
        let busca = this.entrada.receberTexto(`Digite o nome do produto: `);
        let produto = this.produtos.filter(b => b.nome === busca);
        if (!produto || produto.length === 0) {
            console.log(`Nenhum produto encontrado!`);
            return;
        }
        let index = this.produtos.indexOf(produto[0]);
        this.produtos.splice(index, 1);
    }
}
exports.default = DeleteProduto;
