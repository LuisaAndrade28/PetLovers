import React, { Component } from "react";
import "./dashboard.css"; // Importe o arquivo CSS

type Props = {
    tema: string
}

export default class Dashboard extends Component<Props> {
    render() {
        return (
            <div className="container-fluid">
                <div className='row m-3'>
                <h5 className="table-title"> 10 clientes que mais consumiram em quantidade</h5>
                    <table className="table">
                        <thead className="table-header">
                            <tr>
                                <th>Nome cliente</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cliente 1</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Cliente 2</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Cliente 3</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Cliente 4</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Cliente 5</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 {/* Tabela: Listagem geral de produtos e serviços mais consumidos */}
                 <div className='row m-3 mt-5'>
                 <h5 className="table-title"> Listagem geral de produtos e serviços mais consumidos</h5>
                    <table className="table">
                        <thead className="table-header">
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Produto 1</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Serviço 4</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Produto 3</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Produto 4</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Serviço 1</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Tabela: Listagem dos serviços e produtos mais consumidos por tipo de pet */}
                <div className='row m-3 mt-5'>
                <h5 className="table-title"> Listagem dos serviços e produtos mais consumidos por tipo de pet</h5>
                    <table className="table">
                        <thead className="table-header">
                            <tr>
                                <th>Tipo Pet</th>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cachorro</td>
                                <td>Produto 1</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Cachorro</td>
                                <td>Serviço 4</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Cachorro</td>
                                <td>Produto 3</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Gato</td>
                                <td>Produto 4</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Gato</td>
                                <td>Serviço 1</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Tabela: Listagem dos serviços e produtos mais consumidos por raça de pet */}
                <div className='row m-3 mt-5'>
                <h5 className="table-title"> Listagem dos serviços e produtos mais consumidos por raça de pet</h5>
                    <table className="table">
                        <thead className="table-header">
                            <tr>
                                <th>Raça Pet</th>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Golden</td>
                                <td>Produto 1</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Buldogue</td>
                                <td>Serviço 4</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Poodle</td>
                                <td>Produto 3</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>SRD</td>
                                <td>Produto 4</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Siamês</td>
                                <td>Serviço 1</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               {/* Tabela: 5 clientes que mais consumiram em valor */}
               <div className='row m-3 mt-5'>
               <h5 className="table-title"> 5 clientes que mais consumiram em valor</h5>
                    <table className="table">
                        <thead className="table-header">
                            <tr>
                                <th>Nome cliente</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cliente 1</td>
                                <td>R$ 20</td>
                            </tr>
                            <tr>
                                <td>Cliente 2</td>
                                <td>R$ 10</td>
                            </tr>
                            <tr>
                                <td>Cliente 3</td>
                                <td>R$ 5</td>
                            </tr>
                            <tr>
                                <td>Cliente 4</td>
                                <td>R$ 4</td>
                            </tr>
                            <tr>
                                <td>Cliente 5</td>
                                <td>R$ 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}