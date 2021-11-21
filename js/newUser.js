let registerANIM = document.getElementById('registerBTN');
let loginANIM = document.getElementById('loginBTN');

let formANIM = document.getElementById('form');
let registerCX = document.getElementById('formRegister');

registerANIM.addEventListener('click', function(){
        formANIM.classList.add('animRegister'); //hide form
        registerCX.classList.add('animCX'); //view form

        var timeOut = setTimeout(function timernone(){
            nameError = formANIM.style.display = 'none';
        }, 400);
});

loginANIM.addEventListener('click', function(){
        formANIM.classList.add('animForm'); //view form
        registerCX.classList.add('animBX'); //hide form


        var timeOut = setTimeout(function timernone(){
            nameError = formANIM.style.display = 'flex';
        }, 100);

        var timeOutI = setTimeout(function timernone(){
            nameError = registerCX.style.display = 'none';
        }, 100);
});
