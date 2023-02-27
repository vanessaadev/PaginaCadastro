if (localStorage.getItem('darkmode') === "true") { //getItem serve para pegar informação, então se no localStorage estiver true (de baixo)
    dark.checked = true; //mantem o true

    alterarCores(); //e aí chama essa função
}


function alterarCores() {
    if (dark.checked) { //se input está marcado
        document.body.classList.add('bg-dark'); //pegue a lista de classes existentes no body e adicione mais uma
        //podemos chamar o body sem precisar criar id
        document.body.classList.add('text-white'); 
        tabela.classList.add('table-dark');
    } else {
        document.body.classList.remove('bg-dark');
        document.body.classList.remove('text-white');
        tabela.classList.remove('table-dark');
    }
}

function ativarDarkmode() {
    if (dark.checked) { //se o input estiver marcado
    localStorage.setItem('darkmode', true); //salvar  no localStorage como true
} else { //senão
    localStorage.setItem('darkmode', false); // salva no localStorage como falsa
}

    alterarCores(); //chama essa função para testar de novo 
}

//ATIVIDADES
//invocar a função
//salvar no local storage
//salvar a informação do check
//identificar se já está darkmode
//colorir a tela


//////////////ARRAY DE OBJETOS//////////////////////////////////////////////////////
let alunos = [
    {
        id: 1,
        nome: "Ana Kelly",
        email: "kelly@gmail.com",
        telefone: "00 00000-0000",
        cidade: "Fortaleza-CE"
    },
    {
        id: 2,
        nome: "sara",
        email: "sara@gmail.com",
        telefone: "00 00000-0000",
        cidade: "Fortaleza-CE"
    },
    {
        id: 3,
        nome: "Catiana",
        email: "catiana@gmail.com",
        telefone: "00 00000-0000",
        cidade: "Fortaleza-CE"
    },
    {
        id: 4,
        nome: "Vanessa de Araujo",
        email: "vanessa@gmail.com",
        telefone: "00 00000-0000",
        cidade: "Fortaleza-CE"
    },
    {
        id: 5,
        nome: "Samanta",
        email: "Samanta@gmail.com",
        telefone: "00 00000-0000",
        cidade: "Fortaleza-CE"
    },
]

function listarAlunos() {
    let tabela = document.getElementById("tabela-body"); //variavel tabela recebe o id tabela-body do html
    alunos.forEach((aluno) => { //para cada arrow function () => {}. não preciso dizer quando ele terminar, ele só terminar quando acaba os objetos
        tabela.innerHTML +=`<tr> 
                            <td>${aluno.id}</td>
                            <td>${aluno.nome}</td>
                            <td>${aluno.email}</td>
                            <td>${aluno.telefone}</td>
                            <td>${aluno.cidade}</td>
                            <td>
                                <button class="btn btn-warning">Editar</button>
                                <button class="btn btn-danger">Excluir</button>
                            </td>
                            </tr>`;
} )
}

function salvarAluno() {
    event.preventDefault();

    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    }
    alunos.push(aluno)
}
