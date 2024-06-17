"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = __importDefault(require("../modelo/cliente"));
const cpf_1 = __importDefault(require("../modelo/cpf"));
const produto_1 = __importDefault(require("../modelo/produto"));
const servico_1 = __importDefault(require("../modelo/servico"));
// lista criada para executar os casos de testes
class TestesValidarLista {
    constructor(clientes, produtos, servicos) {
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }
    gerarUsuariosTeste() {
        // Clientes
        this.clientes.push(new cliente_1.default('Angelina', 'Ziraldo', new cpf_1.default('87233765626', new Date())));
        this.clientes.push(new cliente_1.default('Bernardo', 'Yago', new cpf_1.default('66158113247', new Date())));
        this.clientes.push(new cliente_1.default('Cecilia', 'Xerxes', new cpf_1.default('77513597901', new Date())));
        this.clientes.push(new cliente_1.default('Daniel', 'Wilda', new cpf_1.default('52179724918', new Date())));
        this.clientes.push(new cliente_1.default('Diana', 'Wilson', new cpf_1.default('12154974155', new Date())));
        this.clientes.push(new cliente_1.default('Eric', 'Vitoria', new cpf_1.default('77753398024', new Date())));
        this.clientes.push(new cliente_1.default('Fabiola', 'Ulisses', new cpf_1.default('33203424010', new Date())));
        this.clientes.push(new cliente_1.default('Gabriel', 'Talita', new cpf_1.default('23572520061', new Date())));
        this.clientes.push(new cliente_1.default('Helena', 'Theo', new cpf_1.default('81161508040', new Date())));
        this.clientes.push(new cliente_1.default('Icaro', 'Samanta', new cpf_1.default('82191377033', new Date())));
        this.clientes.push(new cliente_1.default('Juliana', 'Romulo', new cpf_1.default('52376507081', new Date())));
        this.clientes.push(new cliente_1.default('Jean', 'Queila', new cpf_1.default('11836899009', new Date())));
        this.clientes.push(new cliente_1.default('Karen', 'Pedro', new cpf_1.default('33851696077', new Date())));
        this.clientes.push(new cliente_1.default('Luis', 'Olivia', new cpf_1.default('20294030085', new Date())));
        this.clientes.push(new cliente_1.default('Monique', 'Nelson', new cpf_1.default('39387663019', new Date())));
        this.clientes.push(new cliente_1.default('Natanael', 'Miriam', new cpf_1.default('01671415035', new Date())));
        this.clientes.push(new cliente_1.default('Nicole', 'Leonardo', new cpf_1.default('28641837060', new Date())));
        this.clientes.push(new cliente_1.default('Orlando', 'Kimberly', new cpf_1.default('26494158005', new Date())));
        this.clientes.push(new cliente_1.default('Patricia', 'Joao', new cpf_1.default('96200240019', new Date())));
        this.clientes.push(new cliente_1.default('Pietro', 'Isis', new cpf_1.default('66847450096', new Date())));
        this.clientes.push(new cliente_1.default('Quenia', 'Henrique', new cpf_1.default('10970330073', new Date())));
        this.clientes.push(new cliente_1.default('Ricardo', 'Gilda', new cpf_1.default('77607516050', new Date())));
        this.clientes.push(new cliente_1.default('Sofia', 'Gustavo', new cpf_1.default('17064086093', new Date())));
        this.clientes.push(new cliente_1.default('Thales', 'Fernanda', new cpf_1.default('17325679050', new Date())));
        this.clientes.push(new cliente_1.default('Ursula', 'Enzo', new cpf_1.default('22586438051', new Date())));
        this.clientes.push(new cliente_1.default('Vicente', 'Dalila', new cpf_1.default('29971566028', new Date())));
        this.clientes.push(new cliente_1.default('Walesca', 'Cicero', new cpf_1.default('67342794058', new Date())));
        this.clientes.push(new cliente_1.default('Xavier', 'Catarina', new cpf_1.default('78111707010', new Date())));
        this.clientes.push(new cliente_1.default('Yara', 'Bruno', new cpf_1.default('91882130057', new Date())));
        this.clientes.push(new cliente_1.default('Zacarias', 'Aline', new cpf_1.default('12448918007', new Date())));
        //Produtos
        this.produtos.push(new produto_1.default('Esmalte Dog', 5));
        this.produtos.push(new produto_1.default('Esmalte Cat', 4));
        this.produtos.push(new produto_1.default('Shampoo Dog', 6));
        this.produtos.push(new produto_1.default('Condicionador Dog', 7));
        this.produtos.push(new produto_1.default('Shampoo Cat', 8));
        this.produtos.push(new produto_1.default('Condicionador Cat', 9));
        this.produtos.push(new produto_1.default('Escova Dog', 10));
        this.produtos.push(new produto_1.default('Escova Cat', 11));
        this.produtos.push(new produto_1.default('Lacinho Dog', 1));
        this.produtos.push(new produto_1.default('Lacinho Cat', 2));
        this.produtos.push(new produto_1.default('Pente Dog', 12));
        this.produtos.push(new produto_1.default('Pente Cat', 13));
        this.produtos.push(new produto_1.default('Fralda Dog', 40));
        this.produtos.push(new produto_1.default('Fralda Cat', 50));
        this.produtos.push(new produto_1.default('Tapete Dog', 60));
        this.produtos.push(new produto_1.default('Tapete Cat', 70));
        this.produtos.push(new produto_1.default('Caixa Areia', 80));
        this.produtos.push(new produto_1.default('Areia', 90));
        this.produtos.push(new produto_1.default('Racao Dog', 100));
        this.produtos.push(new produto_1.default('Racao Cat', 110));
        //Serviços
        this.servicos.push(new servico_1.default('Banho Dog', 30));
        this.servicos.push(new servico_1.default('Banho Cat', 40));
        this.servicos.push(new servico_1.default('Tosa Dog', 50));
        this.servicos.push(new servico_1.default('Tosa Cat', 60));
        this.servicos.push(new servico_1.default('Unha Dog', 20));
        this.servicos.push(new servico_1.default('Unha Cat', 25));
        this.servicos.push(new servico_1.default('Massagem Dog', 70));
        this.servicos.push(new servico_1.default('Massagem Cat', 80));
        this.servicos.push(new servico_1.default('Veterinario Dog', 100));
        this.servicos.push(new servico_1.default('Veterinario Cat', 110));
        this.servicos.push(new servico_1.default('Exame Sangue Dog', 120));
        this.servicos.push(new servico_1.default('Exame Sangue Cat', 130));
        this.servicos.push(new servico_1.default('Tratar Dente Dog', 140));
        this.servicos.push(new servico_1.default('Tratar Dente Cat', 150));
        this.servicos.push(new servico_1.default('Adestrar Dog', 160));
        this.servicos.push(new servico_1.default('Adestrar Cat', 170));
        this.servicos.push(new servico_1.default('Castrar Dog', 180));
        this.servicos.push(new servico_1.default('Castrar Cat', 190));
        this.servicos.push(new servico_1.default('Hotelzinho Dog', 200));
        this.servicos.push(new servico_1.default('Hotelzinho Cat', 210));
    }
}
exports.default = TestesValidarLista;
