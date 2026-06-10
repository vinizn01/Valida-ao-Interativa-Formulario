const formulario = document.getElementById("formCadastro");
const elementoErro = document.getElementById("erro");

formulario.addEventListener("submit", function(event) {
    
    elementoErro.textContent = "";

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idadeTexto = document.getElementById("idade").value;
    const idade = parseInt(idadeTexto, 10);
    
    let mensagemDeErro = "";

    if (nome === "") {
        mensagemDeErro = "O campo Nome não pode ficar vazio.";
    } 
    else if (!email.includes("@")) {
        mensagemDeErro = "O campo E-mail deve conter o caractere '@'.";
    } 
    else if (isNaN(idade) || idade <= 0) {
        mensagemDeErro = "A Idade deve ser um número maior que zero.";
    }

    if (mensagemDeErro !== "") {
        event.preventDefault();
        
        elementoErro.textContent = mensagemDeErro;
    } else {
        alert("Formulário validado com sucesso e pronto para envio!");
    }
});