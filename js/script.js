const btnTema = document.getElementById('tema-toggle');
const iconeTema = document.getElementById('icone-tema');

const itensMenu = [
    { nome: "Sobre mim", link: "sobreMim" },
    { nome: "Habilidades", link: "habilidades" },
    { nome: "Experiências", link: "experiencias" },
    { nome: "Projetos", link: "projetos" },
    { nome: "Formação Acadêmica", link: "formacaoAcademia" },
    { nome: "Contato", link: "contato" }
]

const listaHabilidades = [
    {
        categoria: "Back-end",
        iconeCategoria: "fa-solid fa-server",
        linguagens: [
            { nome: "Python", icone: "fa-brands fa-python" },
            { nome: "Java", icone: "fa-brands fa-java" },
            { nome: "Dart", icone: "fa-brands fa-dart-lang" },
            { nome: "Flutter", icone: "fa-brands fa-flutter" }
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
            { nome: "MySQL", icone: "fa-solid fa-database" },
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

const listaExperiencias = [
    {
        curso: "Técnico em Mecatrônica",
        data: "2020 - 2023",
        capacitacoes: [
            {
                texto: "Atuação em sistemas de automação industrial, aeroespacial, componentes e equipamentos robotizados."
            },
            {
                texto: "Aprendizado em áreas de projeto, instalação e operação de equipamentos automatizados e robotizados."
            },
            {
                texto: "Programação, parametrização, medições e testes de equipamentos automatizados e robotizados."
            },
            {
                texto: "Integração de equipamentos mecânicos e eletrônicos."
            },
            {
                texto: "Procedimentos de controle de qualidade e gestão."
            }
        ]
    },
    {
        curso: "Engenheiro de Software",
        data: "2024 - Atual (Noturno - 4 anos)",
        capacitacoes: [
            {
                texto: "Atuar na criação, desenvolvimento e implementação de inovações tecnológicas."
            },
            {
                texto: "Analisar, projetar e construir aplicações software computacionais."
            },
            {
                texto: "Administrar e padronizar especificações e documentações, no âmbito técnico e gerencial para tomada de decisões."
            }
        ]
    }
]

function construirNavegador() {
    const conteinerHTML = document.getElementById('lista-menu');
    let htmlFinal = "";

    itensMenu.forEach(secao => {
        htmlFinal += `
                    <li><a href="#${secao.link}">${secao.nome}</a></li>

        `;
    });

    conteinerHTML.innerHTML = htmlFinal;
}

function construirHabilidades() {
    const conteinerHTML = document.getElementById('box-habilidades');
    let htmlFinal = "";

    listaHabilidades.forEach(secao => {
        htmlFinal += `
            <div class="cartao-habilidade">
                <div class="titulo-tecnologias">
                    <i class="${secao.iconeCategoria} destaque" style="font-size: 1.8rem;"></i>
                    <h3>${secao.categoria}</h3>
                </div>
                <div class="skills-grid">
        `;

        secao.linguagens.forEach(lang => {
            htmlFinal += `
                <div class="skill-item">
                    <i class="${lang.icone}"></i>
                    <label>${lang.nome}</label>
                </div>    
            `;
        });

        htmlFinal += `
                </div>
            </div>
        `;
    });

    conteinerHTML.innerHTML = htmlFinal;
}

construirNavegador();
construirHabilidades();