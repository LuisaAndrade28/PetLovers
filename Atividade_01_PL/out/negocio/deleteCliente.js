"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const delete_1 = __importDefault(require("./delete"));
//criei essa classe
class DeleteCliente extends delete_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    delete() {
        console.log(`--------------------------------------------------------------------`);
        console.log(`\nDeletar cliente`);
        console.log(`--------------------------------------------------------------------`);
        let busca = this.entrada.receberTexto(`Digite o nome do cliente: `);
        let cliente = this.clientes.filter(b => b.nome === busca);
        if (!cliente || cliente.length === 0) {
            console.log(`Nenhum cliente encontrado!`);
            return;
        }
        let index = this.clientes.indexOf(cliente[0]);
        this.clientes.splice(index, 1);
    }
}
exports.default = DeleteCliente;
