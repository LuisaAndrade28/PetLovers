"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const cadastroServico_1 = __importDefault(require("./cadastroServico"));
const deleteServico_1 = __importDefault(require("./deleteServico"));
const listagemServico_1 = __importDefault(require("./listagemServico"));
const subMenu_1 = __importDefault(require("./subMenu"));
const updateServico_1 = __importDefault(require("./updateServico"));
//criei essa classe
class SubMenuServicos extends subMenu_1.default {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }
    opcoes() {
        let execucao = true;
        while (execucao) {
            console.log(`-----------------------------------`);
            console.log(`Opções CRUD do Serviço`);
            console.log(`-----------------------------------`);
            console.log(`1 - Cadastrar serviço`);
            console.log(`2 - Listar todos os serviços`);
            console.log(`3 - Editar dados do serviços`);
            console.log(`4 - Deletar dados do serviços`);
            console.log(`0 - Voltar`);
            let entrada = new entrada_1.default();
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
            console.log(`--------------------------------------------------------------------`);
            switch (opcao) {
                //cadastro do serviço
                case 1:
                    let cadastroServico = new cadastroServico_1.default(this.empresa.getServicos);
                    cadastroServico.cadastrar();
                    break;
                //listar serviço
                case 2:
                    let listagemServico = new listagemServico_1.default(this.empresa.getServicos);
                    listagemServico.listar();
                    break;
                //abrir update do serviço
                case 3:
                    let updateServico = new updateServico_1.default(this.empresa.getServicos);
                    updateServico.update();
                    break;
                //deletar serviço
                case 4:
                    let deleteServico = new deleteServico_1.default(this.empresa.getServicos);
                    deleteServico.delete();
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
exports.default = SubMenuServicos;
