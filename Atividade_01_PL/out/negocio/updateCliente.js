"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const pet_1 = __importDefault(require("../modelo/pet"));
const rg_1 = __importDefault(require("../modelo/rg"));
const telefone_1 = __importDefault(require("../modelo/telefone"));
const update_1 = __importDefault(require("./update"));
//criei essa classe
class UpdateCliente extends update_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    update() {
        console.log(`-----------------------------------`);
        console.log(`\nEdição de cliente`);
        console.log(`-----------------------------------`);
        let busca = this.entrada.receberTexto(`Digite o nome do cliente: `);
        let cliente = this.clientes.filter(b => b.nome === busca);
        if (!cliente || cliente.length === 0) {
            console.log(`Nenhum cliente encontrado!`);
            return;
        }
        let edicao = true;
        while (edicao) {
            console.log(`Digite 1 para editar nome`);
            console.log(`Digite 2 para editar nome social`);
            console.log(`Digite 3 para editar rg`);
            console.log(`Digite 4 para editar telefone`);
            console.log(`Digite 5 para editar pets`);
            console.log(`Digite 0 para concluir`);
            let opcao = this.entrada.receberNumero(`Por favor informe a opção: `);
            if (opcao === 1) {
                let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
                cliente[0].nome = nome;
            }
            else if (opcao == 2) {
                let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
                cliente[0].nomeSocial = nomeSocial;
            }
            else if (opcao == 3) {
                let valor = this.entrada.receberTexto(`Por favor informe o número do rg: `);
                let data = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
                let partesData = data.split('/');
                let ano = new Number(partesData[2].valueOf()).valueOf();
                let mes = new Number(partesData[1].valueOf()).valueOf();
                let dia = new Number(partesData[0].valueOf()).valueOf();
                let dataEmissao = new Date(ano, mes, dia);
                let rg = new rg_1.default(valor, dataEmissao);
                cliente[0].getRgs.pop();
                cliente[0].getRgs.push(rg);
            }
            else if (opcao == 4) {
                let ddd = this.entrada.receberTexto(`Por favor informe o DDD: `);
                let numeroTelefone = this.entrada.receberTexto(`Por favor informe o numero de telefone: `);
                let telefone = new telefone_1.default(ddd, numeroTelefone);
                cliente[0].getTelefones.pop();
                cliente[0].getTelefones.push(telefone);
            }
            else if (opcao == 5) {
                let buscapet = this.entrada.receberTexto(`Digite o nome do pet: `);
                let pets = cliente[0].getPets.filter(b => b.getNome === buscapet);
                if (!pets || pets.length === 0) {
                    console.log(`Nenhum pet encontrado!`);
                    return;
                }
                let nomePet = this.entrada.receberTexto(`Informe o nome do pet: `);
                let tipoPet = this.entrada.receberTexto(`Informe o tipo do pet: `);
                let racaPet = this.entrada.receberTexto(`Informe a raça do pet: `);
                let generoPet = this.entrada.receberTexto(`Informe o genero do pet: `);
                let pet = new pet_1.default(nomePet, racaPet, generoPet, tipoPet);
                let index = cliente[0].getPets.indexOf(pets[0]);
                cliente[0].getPets.splice(index, 1);
                cliente[0].getPets.push(pet);
            }
            else if (opcao === 0) {
                edicao = false;
            }
        }
    }
}
exports.default = UpdateCliente;
