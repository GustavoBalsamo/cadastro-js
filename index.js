//puxando os inputs e o botao do html e colocando eles em uma constante
const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmacao = document.getElementById('confirmacao');
const botao = document.getElementById('botao');

//coloca trim nos inputs, pra ignorar os espaços
const input_usuario = usuario.value.trim();
const input_email = email.value.trim();
const input_senha = senha.value.trim();
const input_confirmacao = confirmacao.value.trim();
let i = 0;



//usa addEventListener pra ocorrer o processo do cadastro
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    muda_botao(input_usuario,input_email,input_senha,input_confirmacao,botao);
    muda_usuario(input_usuario);
    muda_email(input_email);
    muda_senha(input_senha);
    muda_confirmacao(input_confirmacao,input_senha);

    
})
function muda_botao(){
    //se todos os inputs tiver algo, botão ativa.

    if(i >= 3){
        botao.disabled = false;
        return; 
    }
    else{
    botao.disabled = true;
    }

}
function muda_usuario(input_usuario){

    //se o espaço estiver em branco
    if (input_usuario === ''){
        input_vermelho(usuario,'Preencha esse campo');
        
    }
    //determina um tamanho x pro tamanho do usuário
    else if(input_usuario.length < 5 || input_usuario.length > 15 ){
        input_vermelho(usuario,'nome maior que 5 e menor que 15 letras');
        i--;
    }
    //muda o css pro padrão verde se estiver tudo Ok
    else{
        input_verde(usuario);
        i++;
        
    }
   
}

function muda_email(input_email){

    //se o espaço estiver em branco, pinta de vermelho e mostra a mensagem
    if(input_email === ''){
        input_vermelho(email, 'Preencha esse campo');
       
    }
     //se o input for igual ao padrão de email(usei regxr) usa o css padrão verde
    else if (input_email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        input_verde(email);
        i++;
    }
    //senão, pinta de vermelho e mostra a mensagem
    else{
        input_vermelho(email,'o email deve seguir o padrão');
        i--;
    }

}
function muda_senha(input_senha){

    //se o espaço estiver em branco, pinta de vermelho e mostra a mensagem
    if(input_senha === ''){
        input_vermelho(senha, 'Preencha esse campo');
      
    }
    //define o padrão: a senha deve ser maior que 12 caracteres
    else if(input_senha.length < 12){
        input_vermelho(senha, 'A senha deve conter 12 letras');
        i--;
    } 
    //se estiver tudo certo, pinta de verde
    else{
        input_verde(senha);
        i++;
    }
}
    //recebe 2 constantes como parâmetro, pois irá comparar as duas
function muda_confirmacao(input_confirmacao,input_senha){

    //se o espaço estiver em branco, pinta de vermelho e mostra a mensagem
    if(input_confirmacao === ''){
        input_vermelho(confirmacao, 'Preencha esse campo');
       
    }
    //se as senhas forem diferentes, pinta de vermelho e mostra a mensagem
    else if(input_confirmacao !== input_senha){
        input_vermelho(confirmacao, 'As senhas devem ser iguais');
        i--;
    }
    //se estiver tudo ok, pinta de verde.
    else{
        input_verde(confirmacao);
        i++;
    }

}

//função que coloca o css vermelho, tem como parametro o input
//e a mensagem que vai aparecer.
//puxa a div toda pra dentro da constante pega_div
//puxa a mensagemzinha de aviso pra dentro da constante small.
//o texto que tem na small agora passar a ser a 'message', que está descrita nas
//funções acima.
function input_vermelho(input, message){
    const pega_div = input.parentElement;
    const small = pega_div.querySelector('small');

    small.innerText = message;
    pega_div.className = 'altera_cor error';   
}

//função que coloca o css verde, tem como parametro apenas o input
//puxa a div toda pra dentro da constante pega_div
//e altera a class, e consequentemente o css.
function input_verde(input){
    const pega_div = input.parentElement;
    pega_div.className = 'altera_cor success';
}
