const btnTema = document.getElementById('tema-toggle');
const iconeTema = document.getElementById('icone-tema');
const listaHabilidades = [
    {
        categoria: "Back-end",
        iconeCategoria: "fa-solid fa-server",
        linguagens: [
            { nome: "Python", icone: "fa-brands fa-python" },
            { nome: "Java", icone: "fa-brands fa-java" },
            { nome: "Dart", icone: "fa-brands fa-dart-lang"},
            { nome: "Flutter", icone: "fa-brands fa-flutter"}
        ]
    },
    {
        categoria: "Front-end",
        iconeCategoria: "fa-solid fa-globe",
        linguagens: [
            { nome: "HTML", icone: "fa-brands fa-html5" },
            { nome: "CSS", icone: "fa-brands fa-css3-alt" },
            { nome: "JavaScript", icone: "fa-brands fa-js" }
        ]
    },
    {
        categoria: "Banco de Dados",
        iconeCategoria: "fa-solid fa-database",
        linguagens: [
            { nome: "MySQL", icone: "a-solid fa-database" },
            { nome: "PostgreSQL", icone: "fa-solid fa-database" },
            { nome: "SQLite3", icone: "devicon-sqlite-plain" }
        ]
    },
    {
        categoria: "Ferramentas",
        iconeCategoria: "fa-solid fa-toolbox",
        linguagens: [
            { nome: "JetBrains", icone: "fa-solid fa-laptop-code" },
            { nome: "GitHub", icone: "fa-brands fa-github" },
            { nome: "Power BI", icone: "fa-solid fa-chart-simple" },
            { nome: "Excel", icone: "fa-solid fa-file-excel"}
        ]
    }
]

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


