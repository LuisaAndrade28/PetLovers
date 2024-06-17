"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
//criei essa classe
class ListagemMaisConsumidosQuantidade extends listagem_1.default {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }
    listar() {
        let posicao = 1;
        let clientes = this.empresa.getClientes;
        clientes.sort(function compare(a, b) {
            let quantidadeA = 0;
            a.getProdutosConsumidos.forEach(item => quantidadeA += item.quantidade);
            a.getServicosConsumidos.forEach(item => quantidadeA += item.quantidade);
            let quantidadeB = 0;
            b.getProdutosConsumidos.forEach(item => quantidadeB += item.quantidade);
            b.getServicosConsumidos.forEach(item => quantidadeB += item.quantidade);
            if (quantidadeB > quantidadeA) {
                return -1;
            }
            if (quantidadeA > quantidadeB) {
                return 1;
            }
            return 0;
            console.log(`--------------------------------------------------------------------`);
        }).reverse().forEach(item => {
            if (posicao <= 10) {
                let quantidadeConsumida = 0;
                item.getProdutosConsumidos.forEach(i => quantidadeConsumida += i.quantidade);
                item.getServicosConsumidos.forEach(i => quantidadeConsumida += i.quantidade);
                console.log(`${posicao}º Cliente: ${item.nome}   |   Quantidade: ${quantidadeConsumida}`);
            }
            posicao++;
        });
    }
}
exports.default = ListagemMaisConsumidosQuantidade;
