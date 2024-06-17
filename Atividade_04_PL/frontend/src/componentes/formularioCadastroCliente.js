import { useState } from "react";
import { useNavigate } from "react-router-dom";

const clienteObj = {
    nome: '',
    nomeSocial: '', 
    email: '', 
    endereco: { 
        estado: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        codigoPostal: '',
        informacoesAdicionais: '',
    },
    telefones: [{ ddd: '', numero: ''}]
}

export default function FormularioCadastroCliente(props) {
    const [cliente, setCliente] = useState(clienteObj);
    const navigate = useNavigate();

    function adicionarTelefone(){
        const telefones = [...cliente.telefones, { ddd: '', numero: ''} ];
        setCliente({...cliente, telefones});
    }

    function removerTelefone(index){
        const telefones = cliente.telefones.filter((_, i) => i !== index);
        setCliente({...cliente, telefones});
    }

    function validar(){
        if(cliente.nome.trim().length === 0) return false;
        if(cliente.nomeSocial.trim().length === 0) return false;
        if(cliente.email.trim().length === 0) return false;
        if(cliente.endereco.codigoPostal.trim().length === 0) return false;
        if(cliente.endereco.bairro.trim().length === 0) return false;
        if(cliente.endereco.cidade.trim().length === 0) return false;
        if(cliente.endereco.estado.trim().length === 0) return false;
        if(cliente.endereco.numero.trim().length === 0) return false;
        if(cliente.endereco.rua.trim().length === 0) return false;
        if(cliente.telefones.length === 0) return false;

        for(let t of cliente.telefones) {
            if(t.ddd.trim().length === 0) return false;
            if(t.numero.trim().length === 0) return false;
        }

        return true;
    }

    function salvar(){
        const isValid = validar();
        if(!isValid){
            alert('Preencha todos os campos obrigatórios!');
            return;
        }

        fetch('http://localhost:32831/cliente/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        }).then(r => {
            alert(r.status === 200 ? 'Cliente criado com sucesso!' : 'Erro ao criar cliente.');
            navigate('/');
        });
    }

    return (
        <div className="container mt-5">
            <h2>Cadastro de Cliente</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome *</label>
                        <input 
                            value={cliente.nome} 
                            onChange={(e)=> setCliente({...cliente, nome: e.target.value})} 
                            type="text" 
                            className="form-control" 
                            id="nome" 
                            placeholder="Nome" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nomeSocial" className="form-label">Nome Social *</label>
                        <input 
                            value={cliente.nomeSocial} 
                            onChange={(e)=> setCliente({...cliente, nomeSocial: e.target.value})} 
                            type="text" 
                            className="form-control" 
                            id="nomeSocial" 
                            placeholder="Nome Social" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail *</label>
                        <input 
                            value={cliente.email} 
                            onChange={(e)=> setCliente({...cliente, email: e.target.value})} 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="E-mail" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="codigoPostal" className="form-label">Código Postal *</label>
                        <input 
                            value={cliente.endereco.codigoPostal} 
                            onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, codigoPostal: e.target.value}})} 
                            type="text" 
                            className="form-control" 
                            id="codigoPostal" 
                            placeholder="Código Postal" 
                            required 
                        />
                    </div>
                    <h4 className='mt-4'>Telefones:</h4>
                    <div className="mb-3">
                        {cliente.telefones.map((tel, i) => (
                            <div key={i} className="input-group mb-3">
                                <input 
                                    value={tel.ddd} 
                                    onChange={(e)=> {
                                        const telefones = [...cliente.telefones];
                                        telefones[i].ddd = e.target.value;
                                        setCliente({...cliente, telefones});
                                    }}
                                    type="number" 
                                    className="form-control" 
                                    placeholder="DDD" 
                                    aria-label="DDD" 
                                    required 
                                />
                                <input 
                                    value={tel.numero} 
                                    onChange={(e)=> {
                                        const telefones = [...cliente.telefones];
                                        telefones[i].numero = e.target.value;
                                        setCliente({...cliente, telefones});
                                    }}
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Número" 
                                    aria-label="Número" 
                                    required 
                                />
                                <button className="btn btn-danger" type="button" onClick={() => removerTelefone(i)}>Remover</button>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-secondary mb-3" type="button" onClick={adicionarTelefone}>Adicionar Telefone</button>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="rua" className="form-label">Rua *</label>
                        <input 
                            value={cliente.endereco.rua} 
                            onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, rua: e.target.value}})} 
                            type="text" 
                            className="form-control" 
                            id="rua" 
                            placeholder="Rua" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numero" className="form-label">Número *</label>
                        <input 
                            value={cliente.endereco.numero} 
                            onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, numero: e.target.value}})} 
                            type="text" 
                            className="form-control" 
                            id="numero" 
                            placeholder="Número" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bairro" className="form-label">Bairro *</label>
                        <input 
                            value={cliente.endereco.bairro} 
                            onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, bairro: e.target.value}})} 
                            type="text" 
                            className="form-control" 
                            id="bairro" 
                            placeholder="Bairro" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cidade" className="form-label">Cidade *</label>
                        <input 
                            value={cliente.endereco.cidade} 
                            onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, cidade: e.target.value}})} 
                            type="text" 
                            className="form-control" 
                            id="cidade" 
                            placeholder="Cidade" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="estado" className="form-label">Estado *</label>
                        <input 
                            value={cliente.endereco.estado} 
                            onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, estado: e.target.value}})} 
                            type="text" 
                            className="form-control" 
                            id="estado" 
                            placeholder="Estado" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="informacoesAdicionais" className="form-label">Informações Adicionais</label>
                        <textarea 
                            value={cliente.endereco.informacoesAdicionais} 
                            onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, informacoesAdicionais: e.target.value}})} 
                            className="form-control" 
                            id="informacoesAdicionais" 
                            rows="3" 
                            placeholder="Informações Adicionais"
                        ></textarea>
                    </div>
                </div>
            </div>
            <button className="btn btn-lg btn-primary" onClick={salvar} style={{ backgroundColor: "#FFD700", border: "none" }}>Cadastrar</button>
        </div>
    );
}
