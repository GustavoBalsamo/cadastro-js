//puxando os inputs e o botao do html e colocando eles em uma constante
const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmacao = document.getElementById('confirmacao');
const botao = document.getElementById('botao');

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');

//coloca trim nos inputs, pra ignorar os espaços
const input_usuario = usuario.value.trim();
const input_email = email.value.trim();
const input_senha = senha.value.trim();
const input_confirmacao = confirmacao.value.trim();

let guarda_usuario = [];
let guarda_email = [];


//aqui é onde o código ta rodando

form.addEventListener('submit', (e) => {
    muda_usuario(input_usuario);
    muda_email(input_email);
    muda_senha(input_senha);
    muda_confirmacao(input_confirmacao, input_senha);
    muda_botao();
    salva_array();
})



function muda_usuario(input_usuario) {

    //se o espaço estiver em branco
    if (input_usuario === '') {
        input_vermelho(usuario, 'Preencha esse campo');

    }
    //determina um tamanho x pro tamanho do usuário
    else if (input_usuario.length < 5 || input_usuario.length > 15) {
        input_vermelho(usuario, 'nome maior que 5 e menor que 15 letras');

    }
    //muda o css pro padrão verde se estiver tudo Ok
    else {
        input_verde(usuario);


    }

}

function muda_email(input_email) {

    //se o espaço estiver em branco, pinta de vermelho e mostra a mensagem
    if (input_email === '') {
        input_vermelho(email, 'Preencha esse campo');

    }
    //se o input for igual ao padrão de email(usei regxr) usa o css padrão verde
    else if (input_email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        input_verde(email);

    }
    //senão, pinta de vermelho e mostra a mensagem
    else {
        input_vermelho(email, 'o email deve seguir o padrão');

    }

}
function muda_senha(input_senha) {

    //se o espaço estiver em branco, pinta de vermelho e mostra a mensagem
    if (input_senha === '') {
        input_vermelho(senha, 'Preencha esse campo');

    }
    //define o padrão: a senha deve ser maior que 12 caracteres
    else if (input_senha.length < 12) {
        input_vermelho(senha, 'A senha deve conter 12 letras');

    }
    //se estiver tudo certo, pinta de verde
    else {
        input_verde(senha);

    }
}
//recebe 2 constantes como parâmetro, pois irá comparar as duas
function muda_confirmacao(input_confirmacao, input_senha) {

    //se o espaço estiver em branco, pinta de vermelho e mostra a mensagem
    if (input_confirmacao === '') {
        input_vermelho(confirmacao, 'Preencha esse campo');

    }
    //se as senhas forem diferentes, pinta de vermelho e mostra a mensagem
    else if (input_confirmacao !== input_senha) {
        input_vermelho(confirmacao, 'As senhas devem ser iguais');

    }
    //se estiver tudo ok, pinta de verde.
    else {
        input_verde(confirmacao);

    }

}

//função que coloca o css vermelho, tem como parametro o input
//e a mensagem que vai aparecer.
//puxa a div toda pra dentro da constante pega_div
//puxa a mensagemzinha de aviso pra dentro da constante small.
//o texto que tem na small agora passar a ser a 'message', que está descrita nas
//funções acima.
function input_vermelho(input, message) {
    const pega_div = input.parentElement;
    const small = pega_div.querySelector('small');

    small.innerText = message;
    pega_div.className = 'altera_cor error';
}

//função que coloca o css verde, tem como parametro apenas o input
//puxa a div toda pra dentro da constante pega_div
//e altera a class, e consequentemente o css.
function input_verde(input) {
    const pega_div = input.parentElement;
    pega_div.className = 'altera_cor success';
}

//se todos os inputs tiver algo, botão ativa.
function muda_botao() {

    if (div1.className === "altera_cor success" && div2.className === "altera_cor success"
        && div3.className === "altera_cor success" && div4.className === "altera_cor success") {

        botao.disabled = false;

    }
    else if (div1.className === "altera_cor error" || div2.className || "altera_cor error"
        && div3.className === "altera_cor error" || div4.className === "altera_cor error") {

        botao.disabled = true;

    }


}
//salva email e usuario no array
function salva_array() {

    for (let i = 0; i <= guarda_usuario.lenght; i++) {
        if (input_usuario == guarda_usuario[i]) {
            input_vermelho(usuario, 'usuario já registrado');
        }
        else{
            guarda_usuario.push(input_usuario);
        }

    }

    for (let i = 0; i <= guarda_email.lenght; i++) {
        if (input_email == guarda_usuario[i]) {
            input_vermelho(email, 'email já registrado');
        }
        else{
            guarda_email.push(input_email);
            
        }

    }
    alert('usuário cadastrado com sucesso');
}
   
