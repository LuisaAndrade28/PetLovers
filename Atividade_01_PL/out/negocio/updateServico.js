"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const servico_1 = __importDefault(require("../modelo/servico"));
const update_1 = __importDefault(require("./update"));
//criei essa classe
class UpdateServico extends update_1.default {
    constructor(servico) {
        super();
        this.servicos = servico;
        this.entrada = new entrada_1.default();
    }
    update() {
        console.log(`-----------------------------------`);
        console.log(`\nEdição do serviço`);
        console.log(`-----------------------------------`);
        let busca = this.entrada.receberTexto(`Digite o nome do serviço: `);
        let servico = this.servicos.filter(b => b.nome === busca);
        if (!servico || servico.length === 0) {
            console.log(`Nenhum serviço encontrado!`);
            return;
        }
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `);
        //removi o serviço da lista
        let index = this.servicos.indexOf(servico[0]);
        this.servicos.splice(index, 1);
        //adicionar o serviço na lista
        let serv = new servico_1.default(nome, preco);
        this.servicos.push(serv);
    }
}
exports.default = UpdateServico;
