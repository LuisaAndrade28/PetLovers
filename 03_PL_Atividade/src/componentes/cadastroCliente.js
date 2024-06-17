import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './cadastroCliente.css'; // Importar o CSS personalizado

function FormularioCadastroCliente({ tema }) {
    const [rgs, setRgs] = useState([{ dataEmissao: new Date(), numero: '' }]);
    const [telefones, setTelefones] = useState([{ ddd: '', numero: '' }]);
    const [pets, setPets] = useState([{ genero: '', nome: '', raça: '', tipo: '' }]);

    const adicionarRG = (evento) => {
        evento.preventDefault();
        setRgs([...rgs, { dataEmissao: new Date(), numero: '' }]);
    };

    const adicionarTelefone = (evento) => {
        evento.preventDefault();
        setTelefones([...telefones, { ddd: '', numero: '' }]);
    };

    const adicionarPet = (evento) => {
        evento.preventDefault();
        setPets([...pets, { genero: '', nome: '', raça: '', tipo: '' }]);
    };

    const mudarNomePet = (novoNome, indexPet) => {
        const petArray = [...pets];
        petArray[indexPet].nome = novoNome;
        setPets(petArray);
    };

    return (
        <div className="container-fluid mt-5 d-flex justify-content-center">
            <div className="card shadow-lg" style={{ maxWidth: "800px", width: "100%" }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Informações do Cliente</h3>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" />
                            <input type="date" className="form-control mt-2" placeholder="Data emissão CPF" aria-label="Data emissão CPF" />
                        </div>
                        <div className="mb-3">
                            {rgs.map((rg, index) => (
                                <div key={index} className="input-group mb-2">
                                    <input type="text" className="form-control" placeholder="RG" aria-label="RG" />
                                    <input type="date" className="form-control" placeholder="Data emissão RG" aria-label="Data emissão RG" />
                                </div>
                            ))}
                            <button className='btn btn-sm btn-light' onClick={adicionarRG}>+ Adicionar RG</button>
                        </div>
                        <div className="mb-3">
                            {telefones.map((telefone, index) => (
                                <div key={index} className="input-group mb-2">
                                    <input type="text" className="form-control" placeholder="DDD" aria-label="DDD" />
                                    <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" />
                                </div>
                            ))}
                            <button className='btn btn-sm btn-light' onClick={adicionarTelefone}>+ Adicionar Telefone</button>
                        </div>
                        <h4>Pets:</h4>
                        <div className='m-5'>
                            {pets.map((pet, index) => (
                                <div key={index}>
                                    <h5>{pet.nome.length === 0 ? 'Pet' : pet.nome}</h5>
                                    <div className="input-group mb-3">
                                        <input type="text" value={pet.nome} onChange={(e) => mudarNomePet(e.target.value, index)} className="form-control m-2" placeholder="Nome" aria-label="Nome" />
                                        <input type="text" className="form-control m-2" placeholder="Raça" aria-label="Raça" />
                                        <input type="text" className="form-control m-2" placeholder="Tipo" aria-label="Tipo" />
                                        <input type="text" className="form-control m-2" placeholder="Gênero" aria-label="Gênero" />
                                    </div>
                                </div>
                            ))}
                            <button className='btn btn-sm btn-light' onClick={adicionarPet}>+ Adicionar Pet</button>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-yellow" type="button">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioCadastroCliente;
