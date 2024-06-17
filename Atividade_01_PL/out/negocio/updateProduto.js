"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const produto_1 = __importDefault(require("../modelo/produto"));
const update_1 = __importDefault(require("./update"));
//criei essa classe
class UpdateProduto extends update_1.default {
    constructor(produto) {
        super();
        this.produtos = produto;
        this.entrada = new entrada_1.default();
    }
    update() {
        console.log(`-----------------------------------`);
        console.log(`\nEdição do produto`);
        console.log(`-----------------------------------`);
        let busca = this.entrada.receberTexto(`Digite o nome do produto: `);
        let produto = this.produtos.filter(b => b.nome === busca);
        if (!produto || produto.length === 0) {
            console.log(`Nenhum produto encontrado!`);
            return;
        }
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preço do produto: `);
        //removi o produto da lista
        let index = this.produtos.indexOf(produto[0]);
        this.produtos.splice(index, 1);
        //adicionar o produto na lista
        let prod = new produto_1.default(nome, preco);
        this.produtos.push(prod);
    }
}
exports.default = UpdateProduto;
