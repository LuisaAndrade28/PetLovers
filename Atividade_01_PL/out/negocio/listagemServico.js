"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
//criei essa classe
class ListagemServicos extends listagem_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
    }
    listar() {
        console.log(`-----------------------------------`);
        console.log(`\nLista de todos os serviços:`);
        console.log(`-----------------------------------`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome);
            console.log(`Preço: ` + servico.preco);
            console.log(`Quantidade vendida: ` + servico.quantidadeVendida);
            console.log(`--------------------------------------------------------------------`);
        });
        console.log(`\n`);
    }
}
exports.default = ListagemServicos;
