"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const empresa_1 = __importDefault(require("../modelo/empresa"));
const compraProduto_1 = __importDefault(require("../negocio/compraProduto"));
const compraProdutoPet_1 = __importDefault(require("../negocio/compraProdutoPet"));
const compraServico_1 = __importDefault(require("../negocio/compraServico"));
const compraServicoPet_1 = __importDefault(require("../negocio/compraServicoPet"));
const listagemMaisConsumidosPet_1 = __importDefault(require("../negocio/listagemMaisConsumidosPet"));
const listagemMaisConsumidosQuantidade_1 = __importDefault(require("../negocio/listagemMaisConsumidosQuantidade"));
const listagemMaisConsumidosValor_1 = __importDefault(require("../negocio/listagemMaisConsumidosValor"));
const listagemProdutosServicosMaisConsumidos_1 = __importDefault(require("../negocio/listagemProdutosServicosMaisConsumidos"));
const subMenuClientes_1 = __importDefault(require("../negocio/subMenuClientes"));
const subMenuProdutos_1 = __importDefault(require("../negocio/subMenuProdutos"));
const subMenuServicos_1 = __importDefault(require("../negocio/subMenuServicos"));
const teste_1 = __importDefault(require("./teste"));
console.log(`-----------------------------------------------------------------------------------`);
console.log(`Bem-vindo ao Melhor Sistema de Gerenciamento de Pet Shops e Clínicas Veterinarias`);
console.log(`-----------------------------------------------------------------------------------`);
let empresa = new empresa_1.default();
let testes = new teste_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
testes.gerarUsuariosTeste();
let execucao = true;
while (execucao) {
    console.log(`--------------------------------------------------------------------`);
    console.log(`Opções:`);
    console.log(`--------------------------------------------------------------------`);
    console.log(`1 - CRUD cliente`);
    console.log(`2 - CRUD produto`);
    console.log(`3 - CRUD serviço`);
    console.log(`4 - Cliente compra Produto`);
    console.log(`5 - Cliente compra Serviço`);
    console.log(`6 - Pet compra Produto`);
    console.log(`7 - Pet compra Serviço`);
    console.log(`8 - Os 10 clientes que mais consumiram produtos ou serviços - em quantidade`);
    console.log(`9 - Produtos e serviços mais consumidos`);
    console.log(`10 - Os 5 clientes que mais consumiram produtos ou serviços - em valor`);
    console.log(`11 - Listagem dos Produtos ou Serviços mais Consumidos por Tipo e Raça de Pets`);
    console.log(`0 - Sair`);
    let entrada = new entrada_1.default();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    console.log(`--------------------------------------------------------------------`);
    switch (opcao) {
        //CRUD do cliente
        case 1:
            let crudCliente = new subMenuClientes_1.default(empresa);
            crudCliente.opcoes();
            break;
        //CRUD do produto
        case 2:
            let crudProduto = new subMenuProdutos_1.default(empresa);
            crudProduto.opcoes();
            break;
        //CRUD do serviço
        case 3:
            let crudServico = new subMenuServicos_1.default(empresa);
            crudServico.opcoes();
            break;
        //compra produto cliente
        case 4:
            let compraProduto = new compraProduto_1.default(empresa.getProdutos, empresa.getClientes);
            compraProduto.comprar();
            break;
        //compra serviço cliente
        case 5:
            let compraServico = new compraServico_1.default(empresa.getServicos, empresa.getClientes);
            compraServico.comprar();
            break;
        //compra produto pet
        case 6:
            let compraProdutoPet = new compraProdutoPet_1.default(empresa.getProdutos, empresa.getClientes);
            compraProdutoPet.comprar();
            break;
        //compra serviço pet
        case 7:
            let compraServicoPet = new compraServicoPet_1.default(empresa.getServicos, empresa.getClientes);
            compraServicoPet.comprar();
            break;
        //10 clientes que mais consumiram produtos ou serviços - em quantidade
        case 8:
            let listagemMaisConsumidosQuantidade = new listagemMaisConsumidosQuantidade_1.default(empresa);
            listagemMaisConsumidosQuantidade.listar();
            break;
        //produtos e serviços mais consumidos
        case 9:
            let listagemProdutosServicosMaisConsumidos = new listagemProdutosServicosMaisConsumidos_1.default(empresa);
            listagemProdutosServicosMaisConsumidos.listar();
            break;
        //5 clientes que mais consumiram produtos ou serviços - em valor
        case 10:
            let listagemMaisConsumidosValor = new listagemMaisConsumidosValor_1.default(empresa);
            listagemMaisConsumidosValor.listar();
            break;
        //produtos ou serviços mais Consumidos por Tipo e Raça de Pets
        case 11:
            let listagemMaisConsumidosPet = new listagemMaisConsumidosPet_1.default(empresa);
            listagemMaisConsumidosPet.listar();
            break;
        case 0:
            execucao = false;
            console.log(`Até mais`);
            console.log(`--------------------------------------------------------------------`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
