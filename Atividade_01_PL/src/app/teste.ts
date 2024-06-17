import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

// lista criada para executar os casos de testes
export default class TestesValidarLista{

    public clientes: Array<Cliente>
    public produtos: Array<Produto>
    public servicos: Array<Servico>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>){
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }

    public gerarUsuariosTeste(){
        // Clientes
        this.clientes.push(new Cliente('José', 'da Silva', new CPF('98765432109', new Date())));
        this.clientes.push(new Cliente('Maria', 'dos Santos', new CPF('12345678900', new Date())));
        this.clientes.push(new Cliente('Antônio', 'Oliveira', new CPF('45678901233', new Date())));
        this.clientes.push(new Cliente('Joana', 'Pereira', new CPF('98701234567', new Date())));
        this.clientes.push(new Cliente('Rafael', 'Fernandes', new CPF('56789012345', new Date())));
        this.clientes.push(new Cliente('Amanda', 'Souza', new CPF('89012345678', new Date())));
        this.clientes.push(new Cliente('Bruno', 'Martins', new CPF('23456789012', new Date())));
        this.clientes.push(new Cliente('Carolina', 'Almeida', new CPF('67890123456', new Date())));
        this.clientes.push(new Cliente('Daniel', 'Rocha', new CPF('90123456789', new Date())));
        this.clientes.push(new Cliente('Fernanda', 'Costa', new CPF('34567890123', new Date())));
        this.clientes.push(new Cliente('Gustavo', 'Silveira', new CPF('67890123456', new Date())));
        this.clientes.push(new Cliente('Isabela', 'Gomes', new CPF('12345678901', new Date())));
        this.clientes.push(new Cliente('Luis', 'Vieira', new CPF('45678901234', new Date())));
        this.clientes.push(new Cliente('Mariana', 'Melo', new CPF('78901234567', new Date())));
        this.clientes.push(new Cliente('Nathan', 'Lima', new CPF('01234567890', new Date())));
        this.clientes.push(new Cliente('Olívia', 'Santana', new CPF('34567890123', new Date())));
        this.clientes.push(new Cliente('Paulo', 'Carvalho', new CPF('67890123456', new Date())));
        this.clientes.push(new Cliente('Roberta', 'Ferreira', new CPF('90123456789', new Date())));
        this.clientes.push(new Cliente('Thiago', 'Dias', new CPF('12345678901', new Date())));
        

        //Produtos
        this.produtos.push(new Produto('Esmalte para Cachorro', 5));
        this.produtos.push(new Produto('Esmalte para Gato', 4));
        this.produtos.push(new Produto('Shampoo para Cachorro', 6));
        this.produtos.push(new Produto('Condicionador para Cachorro', 7));
        this.produtos.push(new Produto('Shampoo para Gato', 8));
        this.produtos.push(new Produto('Condicionador para Gato', 9));
        this.produtos.push(new Produto('Escova para Cachorro', 10));
        this.produtos.push(new Produto('Escova para Gato', 11));
        this.produtos.push(new Produto('Lacinho para Cachorro', 1));
        this.produtos.push(new Produto('Lacinho para Gato', 2));
        this.produtos.push(new Produto('Pente para Cachorro', 12));
        this.produtos.push(new Produto('Pente para Gato', 13));
        this.produtos.push(new Produto('Fralda para Cachorro', 40));
        this.produtos.push(new Produto('Fralda para Gato', 50));
        this.produtos.push(new Produto('Tapete para Cachorro', 60));
        this.produtos.push(new Produto('Tapete para Gato', 70));
        this.produtos.push(new Produto('Caixa Areia', 80));
        this.produtos.push(new Produto('Areia', 90));
        this.produtos.push(new Produto('Racao para Cachorro', 100));
        this.produtos.push(new Produto('Racao para Gato', 110));
        
        
        //Serviços
        this.servicos.push(new Servico('Banho para Cachorro', 30));
        this.servicos.push(new Servico('Banho para Gato', 40));
        this.servicos.push(new Servico('Tosa para Cachorro', 50));
        this.servicos.push(new Servico('Tosa para Gato', 60));
        this.servicos.push(new Servico('Unha para Cachorro', 20));
        this.servicos.push(new Servico('Unha para Gato', 25));
        this.servicos.push(new Servico('Massagem para Cachorro', 70));
        this.servicos.push(new Servico('Massagem para Gato', 80));
        this.servicos.push(new Servico('Veterinário para Cachorro', 100));
        this.servicos.push(new Servico('Veterinário para Gato', 110));
        this.servicos.push(new Servico('Exame de Sangue para Cachorro', 120));
        this.servicos.push(new Servico('Exame de Sangue para Gato', 130));
        this.servicos.push(new Servico('Tratamento Dental para Cachorro', 140));
        this.servicos.push(new Servico('Tratamento Dental para Gato', 150));
        this.servicos.push(new Servico('Adestramento para Cachorro', 160));
        this.servicos.push(new Servico('Adestramento para Gato', 170));
        this.servicos.push(new Servico('Castração para Cachorro', 180));
        this.servicos.push(new Servico('Castração para Gato', 190));
        this.servicos.push(new Servico('Hotelzinho para Cachorro', 200));
        this.servicos.push(new Servico('Hotelzinho para Gato', 210));
        
    }
}