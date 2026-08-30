document.addEventListener('DOMContentLoaded', function () {
    const config = window.SITE_CONFIG;
    aplicarIdentidade(config);
    aplicarCores(config);
    aplicarSecoes(config);
    aplicarEquipe(config);
    aplicarFormulario(config);
    aplicarRedesSociais(config);
    iniciarRotativo(config);
    inicializarAnimacoes();
    inicializarMenu();
});

function aplicarIdentidade(config) {
    document.title = config.nome + " | Advocacia";
    document.querySelector('meta[name="description"]').content = config.descricao;
    document.getElementById('logo-topo').textContent = config.nome;
    document.getElementById('logo-rodape').textContent = config.nome;
    document.getElementById('footer-texto').textContent = "© " + new Date().getFullYear() + " " + config.nome + ". Todos os direitos reservados.";
}

function aplicarSecoes(config) {
    const s = config.secoes;
    document.querySelector('.hero').style.backgroundImage = "url(" + config.imagens.hero + ")";
    document.getElementById('hero-titulo').textContent = s.home.titulo;
    document.getElementById('hero-subtitulo').textContent = s.home.subtitulo;
    document.getElementById('hero-botao').textContent = s.home.botaoTexto;
    document.getElementById('sobre-titulo').textContent = s.sobre.titulo;
    document.getElementById('sobre-texto').textContent = s.sobre.texto;
    document.getElementById('sobre-img').src = config.imagens.sobre;
    document.getElementById('areas-titulo').textContent = s.areas.titulo;
    const areasGrid = document.getElementById('areas-grid');
    areasGrid.innerHTML = '';
    s.areas.areas.forEach(function (area) {
        const card = document.createElement('div');
        card.className = 'area-card';
        card.innerHTML = '<div class="area-icon">' + getIcone(area.icone) + '</div><h3>' + area.titulo + '</h3><p>' + area.descricao + '</p>';
        areasGrid.appendChild(card);
    });
    document.getElementById('informativo-titulo').textContent = s.informativo.titulo;
    const infoGrid = document.getElementById('informativo-grid');
    infoGrid.innerHTML = '';
    s.informativo.itens.forEach(function (item) {
        const card = document.createElement('div');
        card.className = 'direito-card';
        card.innerHTML = '<h3>' + item.titulo + '</h3><p>' + item.descricao + '</p>';
        infoGrid.appendChild(card);
    });
    document.getElementById('contato-titulo').textContent = s.contato.titulo;
    document.getElementById('contato-detalhes').innerHTML =
        contatoItem(iconePin, s.contato.endereco) +
        contatoItem(iconeFone, s.contato.telefone) +
        contatoItem(iconeEmail, s.contato.email) +
        contatoItem(iconeRelogio, s.contato.horario);
}

function aplicarEquipe(config) {
    const e = config.equipe;
    document.getElementById('equipe-titulo').textContent = e.titulo;
    const grid = document.getElementById('equipe-grid');
    grid.innerHTML = '';
    e.advogados.forEach(function (adv) {
        const card = document.createElement('div');
        card.className = 'advogado-card';
        card.innerHTML =
            '<div class="advogado-foto-wrap"><img src="' + adv.foto + '" alt="' + adv.nome + '" class="advogado-foto"></div>' +
            '<div class="advogado-info">' +
            '<h3 class="advogado-nome">' + adv.nome + '</h3>' +
            '<p class="advogado-oab">' + adv.oab + '</p>' +
            '<p class="advogado-especialidade">' + adv.especialidade + '</p>' +
            '<p class="advogado-bio">' + adv.bio + '</p>' +
            '</div>';
        grid.appendChild(card);
    });
}

function iniciarRotativo(config) {
    const lista = config.rotativoInformativo;
    if (!lista || lista.length === 0) return;
    const sub = document.getElementById('informativo-subtitulo');
    if (!sub) return;
    sub.classList.add('rotativo-container');
    sub.innerHTML = '<span class="rotativo-texto"></span>';
    const span = sub.querySelector('.rotativo-texto');
    let indice = 0;
    function trocar() {
        span.classList.remove('visivel');
        setTimeout(function () {
            span.textContent = lista[indice];
            span.classList.add('visivel');
            indice = (indice + 1) % lista.length;
        }, 600);
    }
    trocar();
    setInterval(trocar, 3500);
}

function aplicarFormulario(config) {
    const form = document.getElementById('form-contato');
    const select = document.getElementById('assunto');
    config.formulario.campos.forEach(function (c) {
        if (c.tipo === 'select' && c.opcoes) {
            c.opcoes.forEach(function (op) {
                const opt = document.createElement('option');
                opt.value = op;
                opt.textContent = op;
                select.appendChild(opt);
            });
        }
    });
    form.action = config.formulario.endpointFormspree;
    form.method = 'POST';
    form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        const btn = document.getElementById('btn-enviar');
        const fb = document.getElementById('form-feedback');
        btn.disabled = true;
        btn.textContent = 'Enviando...';
        fb.textContent = '';
        fb.className = 'form-feedback';
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(function (r) {
            if (r.ok) {
                fb.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                fb.className = 'form-feedback sucesso';
                form.reset();
            } else {
                fb.textContent = 'Erro ao enviar. Tente novamente ou use o WhatsApp.';
                fb.className = 'form-feedback erro';
            }
        }).catch(function () {
            fb.textContent = 'Erro de conexao. Verifique seu email no Formspree.';
            fb.className = 'form-feedback erro';
        }).finally(function () {
            btn.disabled = false;
            btn.textContent = 'Enviar mensagem';
        });
    });
}

function aplicarRedesSociais(config) {
    const r = config.redesSociais;
    const container = document.getElementById('redes-sociais');
    container.innerHTML = '';
    if (r.whatsapp && r.whatsapp.ativo) {
        const url = 'https://wa.me/' + r.whatsapp.numero + '?text=' + encodeURIComponent(r.whatsapp.mensagem);
        container.appendChild(criarLinkRede(url, 'WhatsApp', svgWhatsapp));
        const floatBtn = document.getElementById('whatsapp-float');
        floatBtn.href = url;
        floatBtn.innerHTML = svgWhatsapp;
        floatBtn.style.display = 'flex';
    }
    if (r.instagram && r.instagram.ativo) container.appendChild(criarLinkRede(r.instagram.url, 'Instagram', svgInstagram));
    if (r.facebook && r.facebook.ativo) container.appendChild(criarLinkRede(r.facebook.url, 'Facebook', svgFacebook));
    if (r.linkedin && r.linkedin.ativo) container.appendChild(criarLinkRede(r.linkedin.url, 'LinkedIn', svgLinkedin));
}

function criarLinkRede(url, nome, svg) {
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    a.setAttribute('aria-label', nome); a.title = nome;
    a.className = 'rede-social-link'; a.innerHTML = svg;
    return a;
}

function contatoItem(icone, texto) { return '<div class="contato-item">' + icone + '<span>' + texto + '</span></div>'; }

const iconePin = '<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>';
const iconeFone = '<svg viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>';
const iconeEmail = '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>';
const iconeRelogio = '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>';

const svgWhatsapp = '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
const svgInstagram = '<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>';
const svgFacebook = '<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';
const svgLinkedin = '<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';

function getIcone(tipo) {
    const icones = {
        shield: '<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>',
        scale: '<svg viewBox="0 0 24 24"><path d="M4 2h16v2H4zm1 3h14l-1 9H6L5 5zm2 11h10v2H7v-2zm3 3h4v2h-4v-2z"/></svg>',
        building: '<svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>'
    };
    return icones[tipo] || icones.shield;
}

function inicializarAnimacoes() {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) { if (entry.isIntersecting) entry.target.classList.add('fade-in'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.area-card, .direito-card, .contato-item, .rede-social-link, .advogado-card').forEach(function (el) { observer.observe(el); });
}

function inicializarMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-menu');
    toggle.addEventListener('click', function () { menu.classList.toggle('active'); });
    document.querySelectorAll('.nav-menu a').forEach(function (link) {
        link.addEventListener('click', function () { menu.classList.remove('active'); });
    });
}
function aplicarCores(config) {
    var c = config.cores || {};
    var root = document.documentElement;
    if (c.gradientePrincipal) {
        root.style.setProperty('--gradiente-principal', c.gradientePrincipal);
        var match = c.gradientePrincipal.match(/#[0-9A-Fa-f]{6}/);
        if (match) {
            var hex = match[0];
            var r = parseInt(hex.substr(1,2), 16);
            var g = parseInt(hex.substr(3,2), 16);
            var b = parseInt(hex.substr(5,2), 16);
            root.style.setProperty('--header-bg', 'rgba(' + r + ',' + g + ',' + b + ',0.95)');
        }
    }
    if (c.gradienteDestaque) root.style.setProperty('--gradiente-destaque', c.gradienteDestaque);
    if (c.fundoClaro) root.style.setProperty('--fundo-claro', c.fundoClaro);
    if (c.textoEscuro) root.style.setProperty('--texto-escuro', c.textoEscuro);
    if (c.textoMedio) root.style.setProperty('--texto-medio', c.textoMedio);
    if (c.textoClaro) root.style.setProperty('--texto-claro', c.textoClaro);
}