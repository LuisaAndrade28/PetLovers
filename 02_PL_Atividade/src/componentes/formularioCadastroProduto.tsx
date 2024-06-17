import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './cadastroDeProduto.css'; // Importar o CSS personalizado

export default class FormularioCadastroProduto extends Component<{}> {
    render() {
        return (
            <div className="container-fluid mt-5 d-flex justify-content-center">
                <div className="card shadow-lg" style={{ maxWidth: "600px", width: "100%" }}>
                    <div className="card-body">
                        <h3 className="card-title text-center mb-4">Informações do Produto</h3>
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" />
                            </div>
                            <div className="mb-3">
                                <input type="number" className="form-control" placeholder="Preço" aria-label="Preço" />
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-yellow" type="button">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
