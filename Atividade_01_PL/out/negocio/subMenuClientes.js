"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const cadastroCliente_1 = __importDefault(require("./cadastroCliente"));
const deleteCliente_1 = __importDefault(require("./deleteCliente"));
const listagemClientes_1 = __importDefault(require("./listagemClientes"));
const subMenu_1 = __importDefault(require("./subMenu"));
const updateCliente_1 = __importDefault(require("./updateCliente"));
//criei essa classe
class SubMenuClientes extends subMenu_1.default {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }
    opcoes() {
        let execucao = true;
        while (execucao) {
            console.log(`-----------------------------------`);
            console.log(`Opções CRUD do Cliente`);
            console.log(`-----------------------------------`);
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar todos os clientes`);
            console.log(`3 - Editar dados do clientes`);
            console.log(`4 - Deletar dados do clientes`);
            console.log(`0 - Voltar`);
            let entrada = new entrada_1.default();
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
            console.log(`--------------------------------------------------------------------`);
            switch (opcao) {
                //cadastro do cliente
                case 1:
                    let cadastroCliente = new cadastroCliente_1.default(this.empresa.getClientes);
                    cadastroCliente.cadastrar();
                    break;
                //listar cliente
                case 2:
                    let listagemClientes = new listagemClientes_1.default(this.empresa.getClientes);
                    listagemClientes.listar();
                    break;
                //abrir update do cliente
                case 3:
                    let updateCliente = new updateCliente_1.default(this.empresa.getClientes);
                    updateCliente.update();
                    break;
                //deletar cliente
                case 4:
                    let deleteCliente = new deleteCliente_1.default(this.empresa.getClientes);
                    deleteCliente.delete();
                    break;
                case 0:
                    execucao = false;
                    break;
                default:
                    console.log(`Operação não entendida :(`);
            }
        }
    }
}
exports.default = SubMenuClientes;
