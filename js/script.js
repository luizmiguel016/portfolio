const btnTema = document.getElementById('tema-toggle');
const iconeTema = document.getElementById('icone-tema');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        iconeTema.classList.remove('fa-sun');
        iconeTema.classList.add('fa-moon');
    } else {
        iconeTema.classList.remove('fa-moon');
        iconeTema.classList.add('fa-sun');
    }
});