const idiomas = {
    'pt': {
        'menu-sobreMim': 'Sobre mim', 'menu-habilidades': 'Habilidades', 'menu-experiencias': 'Experiências',
        'menu-projetos': 'Projetos', 'menu-formacaoAcademica': 'Formação Acadêmica', 'menu-contato': 'Contato',
        'ola': 'Olá, eu sou', 'profissao': 'Desenvolvedor FullStack',
        'resumo': 'Sou estudante de Engenharia de Software com foco em desenvolvimento e tecnologia orientada a dados. Atuo com <span class="destaque">Java</span> e <span class="destaque">Python</span>, aplicando boas práticas de programação e fundamentos sólidos de software. Tenho interesse crescente na área de <span class="destaque">Visão Computacional</span> e análise de dados, utilizando <span class="destaque">Python</span> e <span class="destaque">Power BI</span> transformar dados em insights e soluções inteligentes. Estou em constante evolução, buscando aprofundar meus conhecimentos e construir sistemas cada vez mais robustos e eficientes.',
        'btn-curriculo': 'Baixar Currículo',
        'titulo-hab-1': 'Minhas', 'titulo-hab-2': 'Habilidades',
        'titulo-exp-1': 'Minhas', 'titulo-exp-2': 'Experiências',
        'titulo-proj-1': 'Meus', 'titulo-proj-2': 'Projetos',
        'titulo-form-1': 'Formação', 'titulo-form-2': 'Acadêmica',
        'titulo-contato-1': 'Entre em', 'titulo-contato-2': 'Contato',
        'contato-email': 'Envie um email diretamente', 'contato-linkedin': 'Conecte-se profissionalmente',
        'contato-linkedin-link': 'Meu Perfil Profissional', 'contato-wpp': 'Mande uma mensagem direta',
        'contato-local-titulo': 'Localização', 'contato-local': 'Disponível para trabalho remoto',
        'form-nome': 'Seu nome', 'form-email': 'Seu Email', 'form-mensagem': 'Sua Mensagem',
        'form-btn': 'Enviar Mensagem', 'footer-dev': 'Desenvolvido por',
        'footer-desc': 'Desenvolvedor Backend Java | Explorando Python e Visão Computacional',
        'footer-direitos': 'Todos os direitos reservados.'
    },
    'en': {
        'menu-sobreMim': 'About me', 'menu-habilidades': 'Skills', 'menu-experiencias': 'Experience',
        'menu-projetos': 'Projects', 'menu-formacaoAcademica': 'Education', 'menu-contato': 'Contact',
        'ola': 'Hello, I am', 'profissao': 'FullStack Developer',
        'resumo': 'I am a Software Engineering student focused on development and data-driven technology. I work with <span class="destaque">Java</span> and <span class="destaque">Python</span>, applying good programming practices and solid software fundamentals. I have a growing interest in <span class="destaque">Computer Vision</span> and data analysis, using <span class="destaque">Python</span> and <span class="destaque">Power BI</span> to turn data into insights and smart solutions. I am constantly evolving, seeking to deepen my knowledge and build increasingly robust and efficient systems.',
        'btn-curriculo': 'Download Resume',
        'titulo-hab-1': 'My', 'titulo-hab-2': 'Skills',
        'titulo-exp-1': 'My', 'titulo-exp-2': 'Experience',
        'titulo-proj-1': 'My', 'titulo-proj-2': 'Projects',
        'titulo-form-1': 'Academic', 'titulo-form-2': 'Education',
        'titulo-contato-1': 'Get in', 'titulo-contato-2': 'Touch',
        'contato-email': 'Send an email directly', 'contato-linkedin': 'Connect professionally',
        'contato-linkedin-link': 'My Professional Profile', 'contato-wpp': 'Send a direct message',
        'contato-local-titulo': 'Location', 'contato-local': 'Available for remote work',
        'form-nome': 'Your name', 'form-email': 'Your Email', 'form-mensagem': 'Your Message',
        'form-btn': 'Send Message', 'footer-dev': 'Developed by',
        'footer-desc': 'Backend Java Developer | Exploring Python and Computer Vision',
        'footer-direitos': 'All rights reserved.'
    }
};

let idiomaAtual = 'pt';

const itensMenu = [
    { id: "sobreMim", link: "sobreMim" },
    { id: "habilidades", link: "habilidades" },
    { id: "experiencias", link: "experiencias" },
    { id: "projetos", link: "projetos" },
    { id: "formacaoAcademica", link: "formacaoAcademica" },
    { id: "contato", link: "contato" }
];

const listaHabilidades = [
    {
        categoria: "Back-end", iconeCategoria: "fa-solid fa-server",
        linguagens: [{ nome: "Python", icone: "fa-brands fa-python" }, { nome: "Java", icone: "fa-brands fa-java" }, { nome: "Dart", icone: "fa-brands fa-dart-lang" }, { nome: "Flutter", icone: "fa-brands fa-flutter" }]
    },
    {
        categoria: "Front-end", iconeCategoria: "fa-solid fa-globe",
        linguagens: [{ nome: "HTML", icone: "fa-brands fa-html5" }, { nome: "CSS", icone: "fa-brands fa-css3-alt" }, { nome: "JavaScript", icone: "fa-brands fa-js" }]
    },
    {
        categoria: "Banco de Dados", iconeCategoria: "fa-solid fa-database",
        linguagens: [{ nome: "MySQL", icone: "fa-solid fa-database" }, { nome: "PostgreSQL", icone: "fa-solid fa-database" }, { nome: "SQLite3", icone: "devicon-sqlite-plain" }]
    },
    {
        categoria: "Ferramentas", iconeCategoria: "fa-solid fa-toolbox",
        linguagens: [{ nome: "JetBrains", icone: "fa-solid fa-laptop-code" }, { nome: "GitHub", icone: "fa-brands fa-github" }, { nome: "Power BI", icone: "fa-solid fa-chart-simple" }, { nome: "Excel", icone: "fa-solid fa-file-excel"}]
    }
];

const listaExperiencias = [
    {
        cargo: { pt: "Assistente Administrativo", en: "Administrative Assistant" },
        empresa: "Faculade UniFatecie",
        data: { pt: "10/2025 - Atual", en: "10/2025 - Present" },
        funcoes: [
            { pt: "Atuo como Analista de Suporte de TI, utlizando Sistema WAE e Excel.", en: "Act as IT Support Analyst, using WAE System and Excel." },
            { pt: "Correção de BUG de sistemas no âmbito escolar.", en: "Correction of system BUGs in the school environment." },
            { pt: "Criação de Planos de Pagamentos de cursos EaD.", en: "Creation of Payment Plans for distance learning courses." }
        ]
    },
    {
        cargo: { pt: "Jovem Aprendiz em Planejamento e Controle de Manutenção", en: "Apprentice in Maintenance Planning and Control" },
        empresa: "Louis Dreyfus Company",
        data: { pt: "05/2024 - 09/2025", en: "05/2024 - 09/2025" },
        funcoes: [
            { pt: "Planejamento e Controle da manutenção atráves do Sistema SAP.", en: "Maintenance Planning and Control through the SAP System." },
            { pt: "Monitoramento de conclusão de Ordem de Serviço.", en: "Monitoring of Work Order completion." },
            { pt: "Criação de Power BI para Gestão de Especificações Elétricas Industrais.", en: "Creation of Power BI dashboards for Industrial Electrical Specifications Management." }
        ]
    }
];

const listaFormacao = [
    {
        curso: { pt: "Técnico em Mecatrônica", en: "Mechatronics Technician" },
        data: { pt: "2020 - 2023", en: "2020 - 2023" },
        capacitacoes: [
            { pt: "Atuação em sistemas de automação industrial, aeroespacial, componentes e equipamentos robotizados.", en: "Work in industrial automation systems, aerospace, robotic components and equipment." },
            { pt: "Aprendizado em áreas de projeto, instalação e operação de equipamentos automatizados e robotizados.", en: "Learning in design, installation and operation of automated and robotic equipment." },
            { pt: "Programação, parametrização, medições e testes de equipamentos automatizados e robotizados.", en: "Programming, parameterization, measurements and testing of automated and robotic equipment." },
            { pt: "Integração de equipamentos mecânicos e eletrônicos.", en: "Integration of mechanical and electronic equipment." },
            { pt: "Procedimentos de controle de qualidade e gestão.", en: "Quality control and management procedures." }
        ]
    },
    {
        curso: { pt: "Engenheiro de Software", en: "Software Engineer" },
        data: { pt: "2024 - Atual (Noturno - 4 anos)", en: "2024 - Present (Night classes - 4 years)" },
        capacitacoes: [
            { pt: "Atuar na criação, desenvolvimento e implementação de inovações tecnológicas.", en: "Act in the creation, development and implementation of technological innovations." },
            { pt: "Analisar, projetar e construir aplicações software computacionais.", en: "Analyze, design and build computational software applications." },
            { pt: "Administrar e padronizar especificações e documentações, no âmbito técnico e gerencial para tomada de decisões.", en: "Manage and standardize specifications and documentation, in the technical and managerial scope for decision making." }
        ]
    }
];

function construirNavegador() {
    const conteinerHTML = document.getElementById('lista-menu');
    let htmlFinal = "";
    itensMenu.forEach(secao => {
        const nomeTraduzido = idiomas[idiomaAtual][`menu-${secao.id}`] || secao.link;
        htmlFinal += `<li><a href="#${secao.link}" class="itens-menu">${nomeTraduzido}</a></li>`;
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
            htmlFinal += `<div class="skill-item"><i class="${lang.icone}"></i><label>${lang.nome}</label></div>`;
        });
        htmlFinal += `</div></div>`;
    });
    conteinerHTML.innerHTML = htmlFinal;
}

function construirExperiencias() {
    const conteinerHTML = document.getElementById('box-experiencias');
    let htmlFinal = "";
    listaExperiencias.forEach(experiencia => {
        htmlFinal += `
            <article class="cartao-formacao"> 
                <h3>${experiencia.cargo[idiomaAtual]}</h3>
                <h4>${experiencia.empresa}</h4>
                <p class="data-formacao">${experiencia.data[idiomaAtual]}</p>
                <ul>
        `;
        experiencia.funcoes.forEach(funcao => {
                htmlFinal += `<li>${funcao[idiomaAtual]}</li>`;
        });
        htmlFinal += `</ul></article>`;
    });
    conteinerHTML.innerHTML = htmlFinal;
}

function construirFormacao() {
    const conteinerHTML = document.getElementById('box-formacao');
    let htmlFinal = "";
    listaFormacao.forEach(item => {
        htmlFinal += `
            <article class="cartao-formacao">
                <h3>${item.curso[idiomaAtual]}</h3>
                <p class="data-formacao">${item.data[idiomaAtual]}</p>
                <ul>
        `;
        item.capacitacoes.forEach(cap => {
            htmlFinal += `<li>${cap[idiomaAtual]}</li>`;
        });
        htmlFinal += `</ul></article>`;
    });
    conteinerHTML.innerHTML = htmlFinal;
}

async function buscarProjetosGitHub() {
    const conteinerHTML = document.getElementById('projetos');
    
    const t1 = idiomas[idiomaAtual]['titulo-proj-1'];
    const t2 = idiomas[idiomaAtual]['titulo-proj-2'];
    conteinerHTML.innerHTML = `<h2 class="titulo-secao">${t1} <span class="destaque">${t2}</span></h2>`;

    try {
        const resposta = await fetch('https://api.github.com/users/luizmiguel016/repos');
        const projetos = await resposta.json();

        const projetosMostrados = ['data_science', 'analise-saude-pessoal', 'jogo-memoria'];
        const projetosFiltrados = projetos.filter(projeto => projetosMostrados.includes(projeto.name));

        const imagensProjetos = {
            'data_science': 'assets/img/analise-airbnb.png',
            'analise-saude-pessoal': 'assets/img/analise-saude.png',
            'jogo-memoria': 'assets/img/jogo-memoria.png'
        };

        const titulosProjetos = {
            'data_science': { pt: 'Análise de Dados do Airbnb - Lisboa', en: 'Airbnb Data Analysis - Lisbon' },
            'analise-saude-pessoal': { pt: 'Análise de Saúde Pessoal', en: 'Personal Health Analysis' },
            'jogo-memoria': { pt: 'Jogo da Memória', en: 'Memory Game' }
        };

        const semDescricao = idiomaAtual === 'pt' ? 'Projeto desenvolvido para explorar conceitos práticos de programação.' : 'Project developed to explore practical programming concepts.';
        const txtBotao = idiomaAtual === 'pt' ? 'Ver no GitHub' : 'View on GitHub';

        let htmlFinal = "";

        projetosFiltrados.forEach(projeto => {
            const caminhoDaIagem = imagensProjetos[projeto.name] || 'assets/img/img-broken.png';
            const tituloFormatado = titulosProjetos[projeto.name] ? titulosProjetos[projeto.name][idiomaAtual] : projeto.name;

            htmlFinal += `
                <article class="cartao-projeto">
                    <img src="${caminhoDaIagem}" alt="Imagem do projeto ${projeto.name}" class="imagem-projeto">
                    <h3>${tituloFormatado}</h3>
                    <p>${projeto.description ? projeto.description : semDescricao}</p>
                    
                    <div class="tecnologias-projeto">
                        <span class ="destaque">${projeto.language ? projeto.language : 'Múltiplas Tecnologias'}</span>
                    </div>

                    <a href="${projeto.html_url}" target="_blank" class="btn-destaque btn-projeto">${txtBotao} <i class="fa-brands fa-github"></i></a>
                </article>
            `;
        });
        conteinerHTML.innerHTML += `<div class="container-projetos">${htmlFinal}</div>`;
    } catch (erro) {
        const erroMsg = idiomaAtual === 'pt' ? 'Erro ao carregar projetos do GitHub.' : 'Error loading GitHub projects.';
        conteinerHTML.innerHTML += `<p class="erro-api">${erroMsg}</p>`;
    }
}

function traduzirPagina() {
    document.querySelectorAll('[data-i18n]').forEach(elemento => {
        const chave = elemento.getAttribute('data-i18n');
        if (idiomas[idiomaAtual][chave]) elemento.innerHTML = idiomas[idiomaAtual][chave];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(elemento => {
        const chave = elemento.getAttribute('data-i18n-placeholder');
        if (idiomas[idiomaAtual][chave]) elemento.setAttribute('placeholder', idiomas[idiomaAtual][chave]);
    });

    construirNavegador();
    construirExperiencias();
    construirFormacao();
    buscarProjetosGitHub();
}

const btnIdioma = document.getElementById('idioma-toggle');
btnIdioma.addEventListener('click', () => {
    idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
    btnIdioma.textContent = idiomaAtual === 'pt' ? 'EN' : 'PT';
    traduzirPagina();
});

const btnTema = document.getElementById('tema-toggle');
const iconeTema = document.getElementById('icone-tema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        iconeTema.classList.replace('fa-sun', 'fa-moon');
    } else {
        iconeTema.classList.replace('fa-moon', 'fa-sun');
    }
});

const formularioContato = document.querySelector('.mensagem-contato form');
if (formularioContato) {
    formularioContato.addEventListener('submit', async (evento) => {
        
        const btnSubmit = formularioContato.querySelectorAll('button[type="submit"]');
        const textoOriginalBotao = btnSubmit.innerHTML;

        btnSubmit.innerHTML = idiomaAtual === 'pt'
            ? '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...'
            : '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        btnSubmit.style.opacity = '0.7';
        btnSubmit.disabled = true;

        try {
            const resposta = await fetch(formularioContato.action, {
                method: 'POST',
                body: new FormData(formularioContato),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (resposta.ok) {
                alert(idiomaAtual === 'pt' ? '✅ Seu email foi enviado com sucesso! Entrarei em contato em breve.' : '✅ Your email has been sent successfully! I will contact you soon.');
                formularioContato.reset();
            } else {
                throw new Error('Falha na resposta do servidor.');
            }

        } catch (erro) {
            console.error("Erro ao enviar email:", erro);
            alert(idiomaAtual === 'pt' ? '❌ Ops! Ocorreu um problema ao enviar sua mensagem. Tente novamente mais tarde.' : '❌ Oops! There was a problem sending your message. Please try again later.');
        } finally {
            btnSubmit.innerHTML = textoOriginalBotao;
            btnSubmit.style.opacity = '1';
            btnSubmit.disabled = false;
        }
    });
}

construirHabilidades();
traduzirPagina();