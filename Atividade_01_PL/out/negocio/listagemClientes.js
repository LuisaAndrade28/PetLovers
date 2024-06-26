"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemClientes extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log(`-----------------------------------`);
        console.log(`\nLista de todos os clientes:`);
        console.log(`-----------------------------------`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            if (cliente.getRgs.length > 0) {
                console.log(`RG: ` + cliente.getRgs[0].getValor);
            }
            if (cliente.getTelefones.length > 0) {
                console.log(`Telefone: ` + cliente.getTelefones[0].getNumero);
            }
            cliente.getPets.forEach(pet => {
                console.log(`----------------------`);
                console.log(`\nInformações do Pet:`);
                console.log(`----------------------`);
                console.log(`Nome do Pet: ` + pet.getNome);
                console.log(`Tipo: ` + pet.getTipo);
                console.log(`Raça: ` + pet.getRaca);
                console.log(`Gênero: ` + pet.getGenero);
                pet.getProdutosConsumidos.forEach(consumo => {
                    console.log(`-----------------------------------`);
                    console.log(`\nInformação da Compra do Produto:`);
                    console.log(`-----------------------------------`);
                    console.log(`Nome do Produto: ` + consumo.nome);
                    console.log(`Valor da Compra: ` + consumo.valor);
                    console.log(`Quantidade de Produtos: ` + consumo.quantidade);
                });
                pet.getServicosConsumidos.forEach(consumo => {
                    console.log(`-----------------------------------`);
                    console.log(`\nInformação da Compra do Serviço:`);
                    console.log(`-----------------------------------`);
                    console.log(`Nome do Serviço: ` + consumo.nome);
                    console.log(`Valor da Compra: ` + consumo.valor);
                    console.log(`Quantidade de Serviços: ` + consumo.quantidade);
                });
            });
            cliente.getProdutosConsumidos.forEach(consumo => {
                console.log(`-----------------------------------`);
                console.log(`\nInformação da Compra do Produto:`);
                console.log(`-----------------------------------`);
                console.log(`Nome do Produto: ` + consumo.nome);
                console.log(`Valor da Compra: ` + consumo.valor);
                console.log(`Quantidade de Produtos: ` + consumo.quantidade);
            });
            cliente.getServicosConsumidos.forEach(consumo => {
                console.log(`-----------------------------------`);
                console.log(`\nInformação da Compra do Serviço:`);
                console.log(`-----------------------------------`);
                console.log(`Nome do Serviço: ` + consumo.nome);
                console.log(`Valor da Compra: ` + consumo.valor);
                console.log(`Quantidade de Serviços: ` + consumo.quantidade);
            });
            console.log(`--------------------------------------------------------------------`);
        });
        console.log(`\n`);
    }
}
exports.default = ListagemClientes;
