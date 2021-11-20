let form = document.getElementById('form'); //Chamando o </form>
let nome = document.getElementById('POSTname'); //Chamando o nome
let email = document.getElementById('POSTemail'); //Chamando o email
let senha = document.getElementById('POSTpass');
let erro = document.getElementById('erro'); //Chamando a duvida
let cxErro = document.getElementById('boxError');
form.addEventListener('submit', function(e){
	if(nome.value == ''){
		erro.innerHTML = 'Preencha todos os campos. :/';
                var nameError = cxErro.style.display = 'block';
                var timeOut = setTimeout(function timernone(){
        	nameError = cxErro.style.display = 'none';
        }, 2500);
        e.preventDefault();
	}else{}

	if(email.value == ''){
		erro.innerHTML = 'Preencha todos os campos. :/';
                var nameError = cxErro.style.display = 'block';
                var timeOut = setTimeout(function timernone(){
        	nameError = cxErro.style.display = 'none';
        }, 2500);
        e.preventDefault();
	}else{}

        if(senha.value == ''){
                erro.innerHTML = 'Preencha todos os campos. :/';
                var nameError = cxErro.style.display = 'block';
                var timeOut = setTimeout(function timernone(){
                nameError = cxErro.style.display = 'none';
        }, 2500);
        e.preventDefault();
        }else{}
});