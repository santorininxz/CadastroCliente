let clientes = []; // Lista para armazenar os clientes cadastrados

function cadastrarCliente() {
    // Receber as entradas do formulário usando um laço for
    let formulario = document.getElementById('formularioCliente');
    let entradas = formulario.getElementsByTagName('input');
    let cliente = {};

    for (let i = 0; i < entradas.length; i++) {
        let chave = entradas[i].name;
        let valor = entradas[i].value;
        cliente[chave] = valor;
    }

    // Adicionar o cliente à lista de clientes
    clientes.push(cliente);

    // Exibir a confirmação do cadastro
    let divResultado = document.getElementById('resultado');
    divResultado.innerHTML = "<h3>Cliente cadastrado com sucesso!</h3>";

    // Limpar o formulário
    formulario.reset();
}

function consultarClientes() {
    let divResultado = document.getElementById('resultado');
    divResultado.innerHTML = "<h3>Clientes Cadastrados:</h3>";

    if (clientes.length === 0) {
        divResultado.innerHTML += "<p>Nenhum cliente cadastrado.</p>";
    } else {
        for (let i = 0; i < clientes.length; i++) {
            divResultado.innerHTML += `<p><strong>Cliente ${i + 1}:</strong></p>`;
            for (let chave in clientes[i]) {
                divResultado.innerHTML += `<p><strong>${chave}:</strong> ${clientes[i][chave]}</p>`;
            }
            divResultado.innerHTML += "<hr>"; // Linha horizontal para separar os clientes
        }
    }
}