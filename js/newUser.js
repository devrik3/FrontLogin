let registerANIM = document.getElementById('registerBTN');
let loginANIM = document.getElementById('loginBTN');

let formANIM = document.getElementById('form');
let registerCX = document.getElementById('formRegister');

let footer = document.getElementById('footer');
registerANIM.addEventListener('click', function(){
        formANIM.classList.toggle('animRegister'); //hide form
        registerCX.classList.toggle('animCX'); //view form
        footer.setAttribute('style', 'display: none;')
        var timeOut = setTimeout(function timernone(){
            nameError = formANIM.style.display = 'none';
        }, 400);
});

loginANIM.addEventListener('click', function(){
        formANIM.classList.toggle('animForm'); //view form
        registerCX.classList.toggle('animBX'); //hide form
        setTimeout(() => {
            footer.setAttribute('style', 'display: flex;')
        }, 800);

        var timeOut = setTimeout(function timernone(){
            nameError = formANIM.style.display = 'flex';
        }, 100);

        var timeOutI = setTimeout(function timernone(){
            nameError = registerCX.style.display = 'none';
        }, 100);
});
// Create by @dev.rik3
