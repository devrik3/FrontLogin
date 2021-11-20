let registerANIM = document.getElementById('registerBTN');
let loginANIM = document.getElementById('loginBTN');

let formANIM = document.getElementById('form');
let registerCX = document.getElementById('formRegister');

registerANIM.addEventListener('click', function(){
        formANIM.classList.add('animRegister'); //hide form
        registerCX.classList.add('animCX'); //view form
});

loginANIM.addEventListener('click', function(){
        formANIM.classList.add('animForm'); //view form
        registerCX.classList.add('animBX'); //hide form
        Document.reload();
});



