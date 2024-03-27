/* ************* VARIÁVEIS GLOBAIS ********* */

// Variável de controle do estoque a partir de vendas e compras
let estoque = []; // Este array deve possuir objetos
let usuarios = []; // Este array deve possuir objetos
let fornecedores = []; // Array dos fornecedores (adicionei fornecedores)

/* ************* FUNÇÕES ********* */

function cadastrarUsuarios() {
    let nomeDoUsuario = prompt("Por favor, insira o seu nome:");
    if (nomeDoUsuario === null || nomeDoUsuario === "") {
        alert("Nome inválido. Por favor, tente novamente.");
        return;
    }

    let cpf = prompt("Por favor, insira o seu CPF:");
    if (cpf === null || cpf === "" || cpf.length !== 11) {
        alert("CPF inválido. Por favor, tente novamente.");
        return;
    }

    let email = prompt("Por favor, insira o seu e-mail:");
    if (email === null || email === "" || !email.includes("@")) {
        alert("E-mail inválido. Por favor, tente novamente.");
        return;
    }

    let senha = prompt("Por favor, insira a sua senha:");
    if (senha === null || senha === "" || senha.length < 6) {
        alert("Senha inválida. Por favor, tente novamente.");
        return;
    }

    let cargo = prompt("Por favor, insira o seu cargo:");
    if (cargo === null || cargo === "") {
        alert("Cargo inválido. Por favor, tente novamente.");
        return;
    }
  usuarios.push({ nome: nomeDoUsuario, cpf: cpf, email: email, senha: senha, cargo: cargo });
    alert("Usuário cadastrado com sucesso!");
}
    /* 
       Aqui vocês implementam o código referente a função 
    */
    // Exemplo de cadastro de usuários
    const usuariosCadastrados = [
        { nome: "João", cpf: "111.111.111-11", email: "joao@example.com", senha: "senha123", cargo: "Gerente" },
        { nome: "Maria", cpf: "22222222222", email: "maria@example.com", senha: "senha456", cargo: "Vendedor" },
        { nome: "Carlos", cpf: "333.333.333-33", email: "carlos@example.com", senha: "senha789", cargo: "Estoquista" },
        { nome: "Ana", cpf: "444.444.444-44", email: "ana@example.com", senha: "senha321", cargo: "Vendedor" },
        { nome: "Pedro", cpf: "555.555.555-55", email: "pedro@example.com", senha: "senha654", cargo: "Gerente" },
        { nome: "Sara", cpf: "666.666.666-66", email: "sara@example.com", senha: "senha987", cargo: "Estoquista" }
    ];

    // Adicionando os usuários cadastrados ao array global
    usuarios = usuariosCadastrados;


function listarUsuarios() {

    console.log("Lista de Usuários:");
    for (let i = 0; i < usuarios.length; i++) {
        console.log(`Nome: ${usuarios[i].nome}, CPF: ${usuarios[i].cpf}, E-mail: ${usuarios[i].email}, Cargo: ${usuarios[i].cargo}`);
    }
}

listarUsuarios();
function adicionarProduto() {

    const produtosPadaria = [
        { nome: "Pão Francês", quantidade: 100, precoUnitario: 0.50 },
        { nome: "Rosquinha de Coco", quantidade: 50, precoUnitario: 1.20 },
        { nome: "Bolo de Chocolate", quantidade: 20, precoUnitario: 15.00 },
        { nome: "Sonho", quantidade: 30, precoUnitario: 2.50 },
        { nome: "Croissant", quantidade: 40, precoUnitario: 1.80 }
    ];
    estoque = produtosPadaria;
}
adicionarProduto();

console.log("\nLista de Produtos no Estoque:");
// Listando os produtos do estoque
for (let i = 0; i < estoque.length; i++) {
    console.log(`Produto: ${estoque[i].nome}, Quantidade: ${estoque[i].quantidade}, Preço Unitário: R$ ${estoque[i].precoUnitario.toFixed(2)}`);
}

// Chamando a função para cadastrar os usuários
cadastrarUsuarios();

// Chamando a função para listar os usuários cadastrados
listarUsuarios();

function removerUsuario() {
    let email = prompt("Por favor, insira o e-mail do usuário que deseja remover:");
    let senha = prompt("Por favor, insira a senha do usuário que deseja remover:");

    // Verificando se o usuário existe e as credenciais estão corretas
    let indexUsuario = usuarios.findIndex(usuario => usuario.email === email && usuario.senha === senha);

    if (indexUsuario !== -1) {
        // Removendo o usuário do array de usuários
        usuarios.splice(indexUsuario, 1);
        alert("Usuário removido com sucesso!");
    } else {
        alert("Usuário não encontrado ou credenciais inválidas. Por favor, tente novamente.");
    }
}


function alterarDadoUsuario() {
    function alterarDadoUsuario() {
        let email = prompt("Por favor, insira o e-mail do usuário que deseja alterar:");
        let senha = prompt("Por favor, insira a senha do usuário que deseja alterar:");
    
        // Verificando se o usuário existe e as credenciais estão corretas
        let indexUsuario = usuarios.findIndex(usuario => usuario.email === email && usuario.senha === senha);
    
        if (indexUsuario !== -1) {
            let novoEmail = prompt("Por favor, insira o novo e-mail do usuário:");
            let novaSenha = prompt("Por favor, insira a nova senha do usuário:");
            
            // Alterando os dados do usuário
            usuarios[indexUsuario].email = novoEmail;
            usuarios[indexUsuario].senha = novaSenha;
            
            alert("Dados do usuário alterados com sucesso!");
        } else {
            alert("Usuário não encontrado ou credenciais inválidas. Por favor, tente novamente.");
        }
    }
    
}

// function logarUsuario() {
//     let email = prompt("Por favor, insira o seu e-mail:");
//     let senha = prompt("Por favor, insira a sua senha:");

//     // Verificando se o usuário existe e as credenciais estão corretas
//     let usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

//     if (usuarioEncontrado) {
//         alert("Login bem-sucedido!");
//         // Aqui você pode chamar outras funções ou executar ações relacionadas ao login bem-sucedido
//     } else {
//         alert("E-mail ou senha inválidos. Por favor, tente novamente.");
//     }
// }

// function menuPrincipal() {
//     let opcao;
//     do {
//         opcao = prompt(`Escolha uma opção:
//         1. Visualizar estoque
//         2. Visualizar validade dos produtos
//         3. Visualizar fornecedores
//         4. Sair`);

//         switch (opcao) {
//             case "1":
//                 visualizarEstoque();
//                 break;
//             case "2":
//                 visualizarValidadeProdutos();
//                 break;
//             case "3":
//                 visualizarFornecedores();
//                 break;
//             case "4":
//                 alert("Saindo...");
//                 break;
//             default:
//                 alert("Opção inválida. Por favor, escolha uma opção válida.");
//         }
//     } while (opcao !== "4");
// }
//QUEBROU O CONSOLE 🤨
//POR FAVOR NÃO DESCOMENTE  ESSA PARTE SEM MELHORAR O CODIGO
function logarUsuario() {
    let email = prompt("Por favor, insira o seu e-mail:");
    let senha = prompt("Por favor, insira a sua senha:");

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email && usuarios[i].senha === senha) {
            alert("Login bem-sucedido!");
            // Após o login bem-sucedido, chame o menu principal
            menuPrincipal();
            return;
        }
    }

    alert("E-mail ou senha inválidos. Por favor, tente novamente.");
}

// Função para adicionar produtos ao estoque com interação do usuário
//espero que funcione!
//funcionou porem o console esta vazio agora :(
function adicionarProdutosUsuario() {
    let adicionarProdutos = confirm("Deseja adicionar produtos ao estoque?");
    if (adicionarProdutos) {
        while (true) {
            let escolhaProduto = prompt("Escolha um produto para adicionar ao estoque:\n1. Pão Francês\n2. Rosquinha de Coco\n3. Bolo de Chocolate\n4. Sonho\n5. Croissant\n0. Sair");
            if (escolhaProduto === "0") break;
            let quantidade = parseInt(prompt("Digite a quantidade desejada:"));

            // Atualizar a quantidade no estoque
            switch (escolhaProduto) {
                case "1":
                    estoque[0].quantidade += quantidade;
                    break;
                case "2":
                    estoque[1].quantidade += quantidade;
                    break;
                case "3":
                    estoque[2].quantidade += quantidade;
                    break;
                case "4":
                    estoque[3].quantidade += quantidade;
                    break;
                case "5":
                    estoque[4].quantidade += quantidade;
                    break;
                default:
                    alert("Opção inválida.");
            }
        }
    }
}

// Chamando a função para adicionar produtos após o cadastro do usuário
adicionarProdutosUsuario();

// Exibir o estoque atualizado
console.log("\nEstoque atualizado:");
for (let i = 0; i < estoque.length; i++) {
    console.log(`Produto: ${estoque[i].nome}, Quantidade: ${estoque[i].quantidade}`);
}


function validadeIndividual() {
    const produtosPadaria = [
        { nome: "Pão Francês", quantidade: 100, precoUnitario: 0.50, validade: "2024-04-01" },
        { nome: "Rosquinha de Coco", quantidade: 50, precoUnitario: 1.20, validade: "2024-03-30" },
        { nome: "Bolo de Chocolate", quantidade: 20, precoUnitario: 15.00, validade: "2024-04-10" },
        { nome: "Sonho", quantidade: 30, precoUnitario: 2.50, validade: "2024-04-05" },
        { nome: "Croissant", quantidade: 40, precoUnitario: 1.80, validade: "2024-04-03" }
    ];
    return produtosPadaria;
}

// Exemplo de uso:
estoque = validadeIndividual();
console.log(estoque);

   
function imprimirRelatorioValidades() {
}

function removerProduto() {
    let nome = prompt("Digite o nome do produto que deseja remover:");

    // Filtrando o estoque para remover o produto pelo nome
    estoque = estoque.filter(produto => produto.nome !== nome);

    console.log(`Produto ${nome} removido do estoque.`);
}

function atualizarQuantidade() {
    let nome = prompt("Digite o nome do produto para atualizar sua quantidade:");
    let novaQuantidade = parseInt(prompt("Digite a nova quantidade do produto:"));

    // Procurando o produto no estoque pelo nome
    let produtoEncontrado = estoque.find(produto => produto.nome === nome);

    if (produtoEncontrado) {
        produtoEncontrado.quantidade = novaQuantidade;
        console.log(`Quantidade do produto ${nome} atualizada para ${novaQuantidade}.`);
    } else {
        console.log("Produto não encontrado no estoque.");
    }
}



function cadastrarFornecedor() {
    let nomeDaEmpresa = prompt("Por favor, insira o nome da empresa fornecedora:");
    let cnpj = prompt("Por favor, insira o CNPJ da empresa:");
    let email = prompt("Por favor, insira o e-mail da empresa:");
    let telefone = prompt("Por favor, insira o telefone da empresa:");

    let produtosFornecidos = [];
    let continuar = true;

    while (continuar) {
        let produto = prompt("Por favor, insira o nome de um produto fornecido pela empresa (ou digite 'sair' para parar):");
        if (produto.toLowerCase() === 'sair') {
            continuar = false;
        } else {
            produtosFornecidos.push(produto);
        }
    }

    // Aqui você pode fazer o que desejar com as informações coletadas, como armazenar em um array ou objeto, enviar para um servidor, etc.
    console.log("Fornecedor cadastrado com sucesso!");
}

// Armazenar as informações do fornecedor em um objeto
    let novoFornecedor = {
        nomeDaEmpresa: nomeDaEmpresa,
        cnpj: cnpj,
        email: email,
        telefone: telefone,
        produtosFornecidos: produtosFornecidos
    };

    //add novo fornecedor ao array de fornecedores
    fornecedores.push(novoFornecedor);
    console.log("Fornecedor cadastrado com sucesso!")

listarFornecedores();

function listarFornecedores(email, senha) {
//verificar se esta correto
    let usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    if(usuarioEncontrado) {
        console.log("lista de fonercedores:");
//detalhes do fornecedor
fornecedores.forEach((fornecedor) => {
    console.log(`Nome da Empresa: ${fornecedor.nomeDaEmpresa}, CNPJ: ${fornecedor.cnpj}, Email: ${fornecedor.email}, Telefone: ${fornecedor.telefone}`);
            console.log(`Produtos Fornecidos: ${fornecedor.produtosFornecidos.join(", ")}`);
        });

    } else{
        console.log('Usuário ou Senha incorreta');
    }
}

function removerFornecedor(email, senha) {
    // Verificar se o email e senha 
    let usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    
    if (usuarioEncontrado) {
        let cnpjFornecedor = prompt("Por favor, insira o CNPJ do fornecedor que deseja remover:");
        // Verificar se o CNPJ de algum fornecedor
        let indexFornecedor = fornecedores.findIndex(fornecedor => fornecedor.cnpj === cnpjFornecedor);
        if (indexFornecedor !== -1) {
            fornecedores.splice(indexFornecedor, 1); // Remover o fornecedor do array
            console.log("Fornecedor removido com sucesso!");
        } else {
            console.log("Fornecedor não encontrado.");
        }
    } else {
        console.log("Email ou senha inválidos. Acesso negado.");
    }
}

/*  --------- SEQUÊNCIA DE VALIDAÇÃO E TESTE DO CÓDIGO --------- */


console.log('******+++*******');
console.log('Sistema de controle de estoque');
console.log('******+++*******');

/* 01 - Processo de cadastro de 6 usuários */
for (let i = 0; i < 6; i++) {
    cadastrarUsuarios();
}

/* 02 - Listar todos usuários cadastrados, com todas informações */
listarUsuarios();

/* 03 - Remover 1 dos usuários, qualquer um deles e depois listar novamente eles
        para ver se o usuário foi removido. */
removerUsuario();
listarUsuarios();

/* 04 - Alterar algum dado do usuário */
alterarDadoUsuario();

//  05 - Fazer login com um dos usuários cadastrados
