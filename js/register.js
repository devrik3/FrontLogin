let formReg = document.getElementById('formRegister'); //Chamando o </form>
let nomeReg = document.getElementById('REGname'); //Chamando o nome
let emailReg = document.getElementById('REGemail'); //Chamando o email
let senhaReg = document.getElementById('REGpass'); // Chamando a senha
let senhaConfirm = document.getElementById('CONFIRMpass'); // confirmaçao da senha
let erroReg = document.getElementById('erro'); //Chamando a duvida
let cxErroReg = document.getElementById('boxError');

let mensagemErro = 'Preencha todos os campos. :/';
formReg.addEventListener('submit', function(e){
        if (nomeReg.value === '' || emailReg.value === '' || senhaReg.value === '' || senhaConfirm.value === ''){
                erroReg.innerHTML = mensagemErro;
                var nameError = cxErroReg.style.display = 'block';
                var timeOut = setTimeout(() => {
                        nameError = cxErroReg.style.display = 'none';
                }, 2500);
                e.preventDefault();
        }else if(senhaReg.value === senhaConfirm.value){
                e.preventDefault();
                
                let novoUsuario = {
                                   nome: nomeReg.value,
                                   email: emailReg.value,
                                   senha: senhaConfirm.value
                                   }
                                   
                console.log(novoUsuario)
                erroReg.innerHTML = 'seu E-mail é: ' + novoUsuario.email + ', e sua senha é: ' + novoUsuario.senha;
                var nameError = cxErroReg.style.display = 'block';
                var timeOut = setTimeout(() => {
                        nameError = cxErroReg.style.display = 'none';
                }, 5500);
        }else{
                erroReg.innerHTML = 'Algo deu errado!';
                var nameError = cxErroReg.style.display = 'block';
                var timeOut = setTimeout(() => {
                        nameError = cxErroReg.style.display = 'none';
                }, 2500);
                e.preventDefault();
        }
});
