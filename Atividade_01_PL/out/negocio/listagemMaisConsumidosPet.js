"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
//criei essa classe
class ListagemMaisConsumidosPet extends listagem_1.default {
    constructor(empresa) {
        super();
        this.empresa = empresa;
    }
    listar() {
        let listaConsumidosRaca = [];
        let listaConsumidosTipo = [];
        this.empresa.getClientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                pet.getProdutosConsumidos.forEach(consumo => {
                    let consumoRaca = {
                        tipoConsumo: 'P',
                        quantidade: consumo.quantidade,
                        racaPet: pet.getRaca,
                        nomeConsumo: consumo.nome
                    };
                    listaConsumidosRaca.push(consumoRaca);
                    let consumoTipo = {
                        tipoConsumo: 'P',
                        quantidade: consumo.quantidade,
                        tipoPet: pet.getTipo,
                        nomeConsumo: consumo.nome
                    };
                    listaConsumidosTipo.push(consumoTipo);
                });
                pet.getServicosConsumidos.forEach(consumo => {
                    let consumoRaca = {
                        tipoConsumo: 'S',
                        quantidade: consumo.quantidade,
                        racaPet: pet.getRaca,
                        nomeConsumo: consumo.nome
                    };
                    listaConsumidosRaca.push(consumoRaca);
                    let consumoTipo = {
                        tipoConsumo: 'S',
                        quantidade: consumo.quantidade,
                        tipoPet: pet.getTipo,
                        nomeConsumo: consumo.nome
                    };
                    listaConsumidosTipo.push(consumoTipo);
                });
            });
        });
        let listaMaisConsumidosRaca = [];
        let listaMaisConsumidosTipo = [];
        listaConsumidosRaca.forEach(consumo => {
            let item = listaMaisConsumidosRaca.find(i => i.racaPet == consumo.racaPet && i.nomeConsumo == consumo.nomeConsumo);
            if (item == undefined) {
                listaMaisConsumidosRaca.push(consumo);
            }
            else {
                item.quantidade += consumo.quantidade;
            }
        });
        listaConsumidosTipo.forEach(consumo => {
            let item = listaMaisConsumidosTipo.find(i => i.tipoPet == consumo.tipoPet && i.nomeConsumo == consumo.nomeConsumo);
            if (item == undefined) {
                listaMaisConsumidosTipo.push(consumo);
            }
            else {
                item.quantidade += consumo.quantidade;
            }
        });
        console.log(`-----------------------------------`);
        console.log('Raças de Pets que mais Consumiram: ');
        console.log(`-----------------------------------`);
        listaMaisConsumidosRaca.sort(function compare(a, b) {
            if (a.quantidade > b.quantidade) {
                return 1;
            }
            if (b.quantidade > a.quantidade) {
                return -1;
            }
            return 0;
        }).reverse().forEach(item => {
            console.log(`Raça: ${item.racaPet}   |   Item: ${item.nomeConsumo}   |   Quantidade: ${item.quantidade}`);
        });
        console.log(`-----------------------------------`);
        console.log('Tipos de Pets que mais Consumiram: ');
        console.log(`-----------------------------------`);
        listaMaisConsumidosTipo.sort(function compare(a, b) {
            if (a.quantidade > b.quantidade) {
                return 1;
            }
            if (b.quantidade > a.quantidade) {
                return -1;
            }
            return 0;
        }).reverse().forEach(item => {
            console.log(`Tipo: ${item.tipoPet}   |   Item: ${item.nomeConsumo}   |   Quantidade: ${item.quantidade}`);
        });
    }
}
exports.default = ListagemMaisConsumidosPet;
