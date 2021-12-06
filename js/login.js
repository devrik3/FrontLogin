let form = document.getElementById('form'); //Chamando o </form>
let email = document.getElementById('POSTemail'); //Chamando o email
let senha = document.getElementById('POSTpass');
let erro = document.getElementById('erro'); //Chamando a duvida
let cxErro = document.getElementById('boxError');

let progress = document.getElementById('progress');

let user = {
              email:'dev@rik3.op',
              password:'dev'
            }
form.addEventListener('submit', function(e){
        if(email.value === user.email || senha.value === user.password){
                e.preventDefault();
                progress.style.display = 'flex';

                var timeOutRedirect = setTimeout(function timernone(){
                        window.location.replace('index.html');
                }, 1000);
                e.preventDefault();


        }else{                
                erro.innerHTML = 'Preencha todos os campos. :/';
                var nameError = cxErro.style.display = 'block';
                var timeOut = setTimeout(function timernone(){
                nameError = cxErro.style.display = 'none';
                }, 2500);
                e.preventDefault();
        }
        e.preventDefault();
});
