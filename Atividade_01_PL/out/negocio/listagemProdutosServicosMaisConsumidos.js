"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
//criei essa classe
class ListagemProdutosServicosMaisConsumidos extends listagem_1.default {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }
    listar() {
        let posicao = 1;
        let produtos = this.empresa.getProdutos;
        produtos.sort(function compare(a, b) {
            if (b.quantidadeVendida > a.quantidadeVendida) {
                return -1;
            }
            if (a.quantidadeVendida > b.quantidadeVendida) {
                return 1;
            }
            return 0;
            console.log(`--------------------------------------------------------------------`);
        }).reverse().forEach(item => {
            console.log(`${posicao}º Produto: ${item.nome}   |   Quantidade: ${item.quantidadeVendida}`);
            posicao++;
        });
        posicao = 1;
        console.log(`----------------------------------------------------`);
        let servicos = this.empresa.getServicos;
        servicos.sort(function compare(a, b) {
            if (b.quantidadeVendida > a.quantidadeVendida) {
                return -1;
            }
            if (a.quantidadeVendida > b.quantidadeVendida) {
                return 1;
            }
            return 0;
        }).reverse().forEach(item => {
            console.log(`${posicao}º Serviço: ${item.nome}   |   Quantidade: ${item.quantidadeVendida}`);
            posicao++;
        });
    }
}
exports.default = ListagemProdutosServicosMaisConsumidos;
