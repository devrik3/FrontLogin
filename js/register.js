let formReg = document.getElementById('formRegister'); //Chamando o </form>
let nomeReg = document.getElementById('REGname'); //Chamando o nome
let emailReg = document.getElementById('REGemail'); //Chamando o email
let senhaReg = document.getElementById('REGpass'); // Chamando a senha
let senhaConfirm = document.getElementById('CONFIRMpass'); // confirmaçao da senha
let erroReg = document.getElementById('erro'); //Chamando a duvida
let cxErroReg = document.getElementById('boxError');
formReg.addEventListener('submit', function(e){
	if(nomeReg.value == ''){
		erroReg.innerHTML = 'Preencha todos os campos. :/';
                var nameError = cxErroReg.style.display = 'block';
                var timeOut = setTimeout(function timernone(){
        	nameError = cxErroReg.style.display = 'none';
                }, 2500);
                e.preventDefault();
	}else{}

	if(emailReg.value == ''){
		erroReg.innerHTML = 'Preencha todos os campos. :/';
                var nameError = cxErroReg.style.display = 'block';
                var timeOut = setTimeout(function timernone(){
        	nameError = cxErroReg.style.display = 'none';
                }, 2500);
                e.preventDefault();
	}else{}

        if(senhaReg.value == ''){
                erroReg.innerHTML = 'Preencha todos os campos. :/';
                var nameError = cxErroReg.style.display = 'block';
                var timeOut = setTimeout(function timernone(){
                nameError = cxErroReg.style.display = 'none';
                }, 2500);
                e.preventDefault();
        }else{}
        if(senhaConfirm.value == ''){
                erroReg.innerHTML = 'Preencha todos os campos. :/';
                var nameError = cxErroReg.style.display = 'block';
                var timeOut = setTimeout(function timernone(){
                nameError = cxErroReg.style.display = 'none';
                }, 2500);
                e.preventDefault();
        }else if(senhaReg.value === senhaConfirm.value){
                e.preventDefault();
        }
        else{
                erroReg.innerHTML = 'As senhas não Coincidem. :/';
                var nameError = cxErroReg.style.display = 'block';
                var timeOut = setTimeout(function timernone(){
                nameError = cxErroReg.style.display = 'none';
                }, 2500);
                e.preventDefault();
        }
});