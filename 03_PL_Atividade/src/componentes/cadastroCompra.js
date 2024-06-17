import React from "react";
import './cadastroCompra.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Comprar() {
    return (
        <div className="container-fluid mt-5 d-flex justify-content-center">
            <div className="card shadow-lg" style={{ maxWidth: "600px", width: "100%" }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Informações da Compra</h3>
                    <form>
                        <div className="mb-3">
                            <select className='form-select' defaultValue="">
                                <option value="" disabled>Selecione um cliente</option>
                                <option>Cliente 1</option>
                                <option>Cliente 2</option>
                                <option>Cliente 3</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <select className='form-select' defaultValue="">
                                <option value="" disabled>Selecione um item (produto/serviço)</option>
                                <option>Produto 1</option>
                                <option>Produto 2</option>
                                <option>Serviço 1</option>
                                <option>Serviço 2</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <input type="number" className="form-control" placeholder="Quantidade" aria-label="Quantidade" />
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-yellow-black" type="button">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Comprar;
