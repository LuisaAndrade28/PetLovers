"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
//criei essa classe
class ListagemMaisConsumidosValor extends listagem_1.default {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }
    listar() {
        let posicao = 1;
        let clientes = this.empresa.getClientes;
        clientes.sort(function compare(a, b) {
            let valorA = 0;
            a.getProdutosConsumidos.forEach(item => valorA += item.valor);
            a.getServicosConsumidos.forEach(item => valorA += item.valor);
            let valorB = 0;
            b.getProdutosConsumidos.forEach(item => valorB += item.valor);
            b.getServicosConsumidos.forEach(item => valorB += item.valor);
            if (valorB > valorA) {
                return -1;
            }
            if (valorA > valorB) {
                return 1;
            }
            return 0;
            console.log(`--------------------------------------------------------------------`);
        }).reverse().forEach(item => {
            if (posicao <= 5) {
                let valorConsumido = 0;
                item.getProdutosConsumidos.forEach(i => valorConsumido += i.valor);
                item.getServicosConsumidos.forEach(i => valorConsumido += i.valor);
                console.log(`${posicao}º Cliente: ${item.nome}   |   Valor Total: ${valorConsumido}`);
            }
            posicao++;
        });
    }
}
exports.default = ListagemMaisConsumidosValor;
