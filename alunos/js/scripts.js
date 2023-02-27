function alterarNome () {
    nome.classList.remove('is-invalid');

    if (nome.value.length > 2) { //se o tamanho de caracteres(length) do valor(value) do nome(nome) for maior que dois, apareça uma lista de classe(classList) is-valid(class) no id nome.
        nome.classList.add('is-valid')
    } else {
        nome.classList.add('is-invalid')
    }
}

function validar() {
    event.preventDefault(); //faz com que o formulário não seja enviado.
    
    // if ( document.getElementById('nome').value === '' ) { "documento, pegue o elemento pelo id nome. se o valor for igual a vazio apareça esse alert embaixo"
    if ( nome.value === '') { //forma reduzida de usar document.getElementById('nome').value === ''
        //nome.style.borderColor = 'red';
        nome.classList.add('is-invalid');
    }

    if ( document.getElementById('email').value === '' ) { //"documento, pegue o elemento pelo id nome. se o valor for igual a vazio apareça esse alert embaixo"
        // email.style.borderColor = 'red'; //coloquei um estilo na borda do input de id email, 
        email.classList.add('is-invalid');
    }
    
    if ( document.getElementById('telefone').value === '' ) { //"documento, pegue o elemento pelo id nome. se o valor for igual a vazio apareça esse alert embaixo"
        // telefone.style.borderColor = 'red';
        telefone.classList.add('is-invalid');
    }

    if ( document.getElementById('cidade').value === '' ) { //"documento, pegue o elemento pelo id nome. se o valor for igual a vazio apareça esse alert embaixo"
        // cidade.style.borderColor = 'red';
        cidade.classList.add('is-invalid');
    }
}


       