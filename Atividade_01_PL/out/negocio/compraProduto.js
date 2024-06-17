"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const consumo_1 = __importDefault(require("../modelo/consumo"));
const compra_1 = __importDefault(require("./compra"));
//criei essa classe
class CompraProduto extends compra_1.default {
    constructor(produtos, clientes) {
        super();
        this.produtos = produtos;
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    comprar() {
        console.log(`--------------------------------------------------------------------`);
        console.log(`\nCompra Produto`);
        console.log(`--------------------------------------------------------------------`);
        let busca = this.entrada.receberTexto(`Digite o nome do cliente: `);
        let cliente = this.clientes.filter(b => b.nome === busca);
        if (!cliente || cliente.length === 0) {
            console.log(`Nenhum cliente encontrado!`);
            return;
        }
        let buscaProduto = this.entrada.receberTexto(`Digite o nome do produto: `);
        let produto = this.produtos.filter(b => b.nome === buscaProduto);
        if (!produto || produto.length === 0) {
            console.log(`Nenhum produto encontrado!`);
            return;
        }
        let indexProduto = this.produtos.indexOf(produto[0]);
        let quantidade = this.entrada.receberNumero(`Digite a quantidade do produto: `);
        let consumo = new consumo_1.default(produto[0].nome, quantidade * produto[0].preco, quantidade);
        cliente[0].getProdutosConsumidos.push(consumo);
        //editar o produto na quantidade
        produto[0].quantidadeVendida += quantidade;
        //atualizar o produto na lista (primeiro remove e depois adiciona)
        this.produtos.splice(indexProduto, 1);
        this.produtos.push(produto[0]);
    }
}
exports.default = CompraProduto;
