"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const cadastroProduto_1 = __importDefault(require("./cadastroProduto"));
const deleteProduto_1 = __importDefault(require("./deleteProduto"));
const listagemProdutos_1 = __importDefault(require("./listagemProdutos"));
const subMenu_1 = __importDefault(require("./subMenu"));
const updateProduto_1 = __importDefault(require("./updateProduto"));
//criei essa classe
class SubMenuProdutos extends subMenu_1.default {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }
    opcoes() {
        let execucao = true;
        while (execucao) {
            console.log(`-----------------------------------`);
            console.log(`Opções CRUD do Produto`);
            console.log(`-----------------------------------`);
            console.log(`1 - Cadastrar produto`);
            console.log(`2 - Listar todos os produtos`);
            console.log(`3 - Editar dados do produto`);
            console.log(`4 - Deletar dados do produto`);
            console.log(`0 - Voltar`);
            let entrada = new entrada_1.default();
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
            console.log(`--------------------------------------------------------------------`);
            switch (opcao) {
                //cadastro do produto
                case 1:
                    let cadastroProduto = new cadastroProduto_1.default(this.empresa.getProdutos);
                    cadastroProduto.cadastrar();
                    break;
                //listar produtos
                case 2:
                    let listagemProduto = new listagemProdutos_1.default(this.empresa.getProdutos);
                    listagemProduto.listar();
                    break;
                //abrir update do produto
                case 3:
                    let updateProduto = new updateProduto_1.default(this.empresa.getProdutos);
                    updateProduto.update();
                    break;
                //deletar produto
                case 4:
                    let deleteProduto = new deleteProduto_1.default(this.empresa.getProdutos);
                    deleteProduto.delete();
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
exports.default = SubMenuProdutos;
