/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./cadastroCliente";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";
import Dashboard from "./dashboard";
import Comprar from "./cadastroCompra";
import FormularioCadastroServico from "./cadastroServico";
import FormularioCadastroProduto from "./cadastroProduto";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        // Botões para as páginas acrescentados & condições para exibir as páginas baseado no state 'tela'.
        let barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Dashboard', 'Clientes', 'Produtos', 'Serviços', 'Cadastrar Cliente', 'Cadastrar Produto', 'Cadastrar Serviço' , 'Comprar']} />
        if (tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        }else if (tela === 'Cadastrar Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        }else if (tela === 'Cadastrar Produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="#e3f2fd" />
                </>
            )
        }else if (tela === 'Cadastrar Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="#e3f2fd" />
                </>
            )
        }else if (tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#e3f2fd" />
                </>
            )
        }else if (tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        }else if (tela === 'Comprar') {
            return (
                <>
                    {barraNavegacao}
                    <Comprar tema="#e3f2fd" />
                </>
            )
        }else if (tela === 'Dashboard') {
            return (
                <>
                    {barraNavegacao}
                    <Dashboard tema="#e3f2fd" />
                </>
            )
        } else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}