import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListaCliente(props) {

    const [clientes, setClientes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (clientes.length > 0) return;
        loadClientes();
    }, []);

    function loadClientes() {
        fetch('http://localhost:32831/cliente/clientes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            setClientes(r);
            console.log(r);
        });
    }

    function excluirCliente(id) {
        fetch('http://localhost:32831/cliente/excluir', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        }).then(r => {
            alert(r.status === 200 ? 'Cliente excluído com sucesso!' : 'Erro ao excluir cliente.');
            setClientes([]);
            loadClientes();
        });
    }

    function editarCliente(cliente) {
        navigate('/Atualizar', { state: cliente });
    }

    function formatEndereco(endereco) {
        return `${endereco.rua} - ${endereco.numero}, ${endereco.codigoPostal}, ${endereco.bairro}, ${endereco.cidade}, ${endereco.estado}`;
    }

    function formatTelefone(telefone) {
        return `(${telefone.ddd}) ${telefone.numero}`;
    }

    return (
        <div className="container mt-5">
            <h2>Lista de Clientes</h2>
            <div className="list-group">
                {clientes && clientes.length > 0 && clientes.map(cliente => (
                    <div key={cliente.id} className="list-group-item list-group-item-action mt-2 p-4 rounded shadow-sm"
                        style={{ border: '1px solid #ddd', cursor: 'pointer' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#fff'}>
                        <h3 className='mb-3'>{cliente.nome}</h3>
                        <p><strong>Nome social:</strong> {cliente.nomeSocial}</p>
                        <p><strong>Email:</strong> {cliente.email}</p>
                        <p><strong>Endereço:</strong> {formatEndereco(cliente.endereco)}</p>
                        {cliente.endereco.informacoesAdicionais && cliente.endereco.informacoesAdicionais.length > 0 && (
                            <p><strong>Informações adicionais:</strong> {cliente.endereco.informacoesAdicionais}</p>
                        )}
                        {cliente.telefones && cliente.telefones.length > 0 && (
                            <div>
                                <p><strong>Telefone(s):</strong></p>
                                {cliente.telefones.map(t => (
                                    <p key={t.id} className="ms-3">• {formatTelefone(t)}</p>
                                ))}
                            </div>
                        )}
                        <div className="d-flex justify-content-end">
                            <button className='btn btn-outline-primary me-2' onClick={() => editarCliente(cliente)}>Editar</button>
                            <button className='btn btn-outline-danger' onClick={() => excluirCliente(cliente.id)}>Excluir</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
