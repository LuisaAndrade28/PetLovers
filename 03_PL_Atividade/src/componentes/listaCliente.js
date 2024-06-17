import React from "react";
import "./listaClientes.css"; // Importe o arquivo CSS

function ListaCliente({ tema }) {
    return (
        <div className="container-fluid">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                    <p className='col cliente-nome'>Maria de Lourdes</p>
                    <button className='col m-2 btn btn-yellow-black' aria-label="Editar"><i className="fas fa-edit"></i> Editar</button>
                    <button className='col m-2 btn btn-black-yellow' aria-label="Excluir"><i className="fas fa-trash-alt"></i> Excluir</button>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <p className='col cliente-nome'>Marcos Pascal</p>
                    <button className='col m-2 btn btn-yellow-black' aria-label="Editar"><i className="fas fa-edit"></i> Editar</button>
                    <button className='col m-2 btn btn-black-yellow' aria-label="Excluir"><i className="fas fa-trash-alt"></i> Excluir</button>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <p className='col cliente-nome'>Roberto Carlos </p>
                    <button className='col m-2 btn btn-yellow-black' aria-label="Editar"><i className="fas fa-edit"></i> Editar</button>
                    <button className='col m-2 btn btn-black-yellow' aria-label="Excluir"><i className="fas fa-trash-alt"></i> Excluir</button>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <p className='col cliente-nome'>Ivete Sangalo </p>
                    <button className='col m-2 btn btn-yellow-black' aria-label="Editar"><i className="fas fa-edit"></i> Editar</button>
                    <button className='col m-2 btn btn-black-yellow' aria-label="Excluir"><i className="fas fa-trash-alt"></i> Excluir</button>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <p className='col cliente-nome'>Marisa Monte </p>
                    <button className='col m-2 btn btn-yellow-black' aria-label="Editar"><i className="fas fa-edit"></i> Editar</button>
                    <button className='col m-2 btn btn-black-yellow' aria-label="Excluir"><i className="fas fa-trash-alt"></i> Excluir</button>
                </a>
            </div>
        </div>
    );
}

export default ListaCliente;
