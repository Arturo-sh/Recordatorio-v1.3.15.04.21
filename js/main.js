const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {
    	child.classList.toggle('animado')
    });
    // for (var i=0 ; i <= barras.length ; i++) {
    // 	barras[i].classList.toggle('animado');
    // }
});