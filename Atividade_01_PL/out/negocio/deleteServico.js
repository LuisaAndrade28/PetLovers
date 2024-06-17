"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const delete_1 = __importDefault(require("./delete"));
//criei essa classe
class DeleteServico extends delete_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    delete() {
        console.log(`--------------------------------------------------------------------`);
        console.log(`\nDeletar serviço`);
        console.log(`--------------------------------------------------------------------`);
        let busca = this.entrada.receberTexto(`Digite o nome do serviço: `);
        let servico = this.servicos.filter(b => b.nome === busca);
        if (!servico || servico.length === 0) {
            console.log(`Nenhum serviço encontrado!`);
            return;
        }
        let index = this.servicos.indexOf(servico[0]);
        this.servicos.splice(index, 1);
    }
}
exports.default = DeleteServico;
