//---------------------------------------------------------------------------------------------------
// SISTEMA DE LOGIN
//---------------------------------------------------------------------------------------------------
function login(){
    const usuario = "admin"
    const senha = "admin"
    
        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;
        if (user != usuario && password != senha){
            alert("Usuário ou senha incorretos, tente novamente.")
        }else{
            alert("Bem-vindo ao Banco do Brasil!")
            window.location.href = "main.html"
        }
}

//---------------------------------------------------------------------------------------------------
// SISTEMA DE NAVEGAÇÃO
//---------------------------------------------------------------------------------------------------
let saldo = 100;

document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
    main(); // Chama a função main() quando o formulário é submetido
});

function main(){
    let saldo = 100;

    let opcao = parseInt(document.getElementById("opcao").value);

    switch(opcao){
        case 1:
            alert("Seu saldo é de R$" + saldo);
            break;
        case 2:
            valorSaque = parseFloat(prompt("Digite o valor que deseja sacar: "));
            var saque = (valorSaque <= saldo) ? (saldo -= valorSaque, alert("Seu saque no valor de R$" + valorSaque + " foi realizado com sucesso!")) : alert("Saldo insuficiente para realizar o saque.");
            break;
        case 3:
            valorDeposito = parseFloat(prompt("Digite o valor que deseja depositar: "));
            saldo += valorDeposito;
            alert("Depósito realizado com sucesso.");
            break;
        case 4:
            alert("Obrigado por fazer parte do Banco do Brasil!");
            break;
        default:
            alert("Selecione uma opção válida.");
    }
}
