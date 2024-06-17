import React from "react";
import "./listaClientes.css"; // Importe o arquivo CSS

function ListaProdutos({ tema }) {
    return (
        <div className="container-fluid">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                    <p className='col cliente-nome'>Produto 1 </p>
                    <button className='col m-2 btn btn-yellow-black' aria-label="Editar"><i className="fas fa-edit"></i> Editar</button>
                    <button className='col m-2 btn btn-black-yellow' aria-label="Excluir"><i className="fas fa-trash-alt"></i> Excluir</button>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <p className='col cliente-nome'>Produto 2 </p>
                    <button className='col m-2 btn btn-yellow-black' aria-label="Editar"><i className="fas fa-edit"></i> Editar</button>
                    <button className='col m-2 btn btn-black-yellow' aria-label="Excluir"><i className="fas fa-trash-alt"></i> Excluir</button>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <p className='col cliente-nome'>Produto 3 </p>
                    <button className='col m-2 btn btn-yellow-black' aria-label="Editar"><i className="fas fa-edit"></i> Editar</button>
                    <button className='col m-2 btn btn-black-yellow' aria-label="Excluir"><i className="fas fa-trash-alt"></i> Excluir</button>
                </a>
                <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>
                    <p className='col cliente-nome'>Produto 4 </p>
                    <button className='col m-2 btn btn-yellow-black' aria-label="Editar"><i className="fas fa-edit"></i> Editar</button>
                    <button className='col m-2 btn btn-black-yellow' aria-label="Excluir"><i className="fas fa-trash-alt"></i> Excluir</button>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <p className='col cliente-nome'>Produto 5 </p>
                    <button className='col m-2 btn btn-yellow-black' aria-label="Editar"><i className="fas fa-edit"></i> Editar</button>
                    <button className='col m-2 btn btn-black-yellow' aria-label="Excluir"><i className="fas fa-trash-alt"></i> Excluir</button>
                </a>
            </div>
        </div>
    );
}

export default ListaProdutos;
