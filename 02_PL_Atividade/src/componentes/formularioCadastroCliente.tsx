import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './cadastroDeCliente.css'; // Importar o CSS personalizado

type props = {
    tema: string
}

type rg = {
    numero: string
    dataEmissao: Date
}

type telefone = {
    numero: string
    ddd: string
}

type pet = {
    nome: string
    raça: string
    genero: string
    tipo: string
}

type state = {
    rgs: rg[],
    telefones: telefone[]
    pets: pet[]
}

export default class FormularioCadastroCliente extends Component<props, state> {

    constructor(prop: any | Readonly<{}>) {
        super(prop)
        this.state = {
            rgs: [{ dataEmissao: new Date(), numero: '' }],
            telefones: [{ ddd: '', numero: '' }],
            pets: [{ genero: '', nome: '', raça: '', tipo: '' }]
        }
        
        this.adicionarRG = this.adicionarRG.bind(this)
        this.adicionarTelefone = this.adicionarTelefone.bind(this)
        this.adicionarPet = this.adicionarPet.bind(this)
        this.mudarNomePet = this.mudarNomePet.bind(this)
    }

    adicionarRG(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        evento.preventDefault()
        this.setState({
            rgs: [...this.state.rgs, { dataEmissao: new Date(), numero: '' }]
        })
    }

    adicionarTelefone(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        evento.preventDefault()
        this.setState({
            telefones: [...this.state.telefones, { ddd: '', numero: '' }]
        })
    }

    adicionarPet(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        evento.preventDefault()
        this.setState({
            pets: [...this.state.pets, { genero: '', nome: '', raça: '', tipo: '' }]
        })
    }

    mudarNomePet(novoNome: string, indexPet: number) {
        const petArray = this.state.pets
        petArray[indexPet].nome = novoNome;

        this.setState({
            pets: petArray
        })
    }

    render() {
        let tema = this.props.tema
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
                                {this.state.rgs.map((rg, index) => (
                                    <div key={index} className="input-group mb-2">
                                        <input type="text" className="form-control" placeholder="RG" aria-label="RG" />
                                        <input type="date" className="form-control" placeholder="Data emissão RG" aria-label="Data emissão RG" />
                                    </div>
                                ))}
                                <button className='btn btn-sm btn-light' onClick={this.adicionarRG}>+ Adicionar RG</button>
                            </div>
                            <div className="mb-3">
                                {this.state.telefones.map((telefone, index) => (
                                    <div key={index} className="input-group mb-2">
                                        <input type="text" className="form-control" placeholder="DDD" aria-label="DDD" />
                                        <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" />
                                    </div>
                                ))}
                                <button className='btn btn-sm btn-light' onClick={this.adicionarTelefone}>+ Adicionar Telefone</button>
                            </div>
                            <h4>Pets:</h4>
                            <div className='m-5'>
                                {this.state.pets.map((pet, index) => (
                                    <div key={index}>
                                        <h5>{pet.nome.length === 0 ? 'Pet' : pet.nome}</h5>
                                        <div className="input-group mb-3">
                                            <input type="text" value={pet.nome} onChange={(e) => this.mudarNomePet(e.target.value, index)} className="form-control m-2" placeholder="Nome" aria-label="Nome" />
                                            <input type="text" className="form-control m-2" placeholder="Raça" aria-label="Raça" />
                                            <input type="text" className="form-control m-2" placeholder="Tipo" aria-label="Tipo" />
                                            <input type="text" className="form-control m-2" placeholder="Gênero" aria-label="Gênero" />
                                        </div>
                                    </div>
                                ))}
                                <button className='btn btn-sm btn-light' onClick={this.adicionarPet}>+ Adicionar Pet</button>
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
