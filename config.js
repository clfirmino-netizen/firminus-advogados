const SITE_CONFIG = {
    nome: "Firminus Advogados",
    slogan: "Excelencia juridica com compromisso e dedicacao",
    descricao: "Escritorio de advocacia especializado em solucoes juridicas personalizadas, com atuacao etica e transparente.",

    cores: {
        gradientePrincipal: "linear-gradient(135deg, #0A1A2F 0%, #1B3A5C 50%, #274B6D 100%)",
        gradienteDestaque: "linear-gradient(135deg, #C9A24B 0%, #E8C877 100%)",
        fundoClaro: "#F7F5F0",
        textoEscuro: "#1B3A5C",
        textoMedio: "#5A6570",
        textoClaro: "#FFFFFF"
    },

    imagens: {
        hero: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80",
        sobre: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
        contato: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },

    redesSociais: {
        whatsapp: { ativo: true, numero: "5511999999999", mensagem: "Ola! Gostaria de mais informacoes sobre seus servicos." },
        instagram: { ativo: true, url: "https://instagram.com/seu_escritorio" },
        facebook: { ativo: true, url: "https://facebook.com/seu_escritorio" },
        linkedin: { ativo: true, url: "https://linkedin.com/company/seu_escritorio" }
    },

    equipe: {
        titulo: "Nossa Equipe",
        subtitulo: "Profissionais dedicados a defender seus direitos",
        advogados: [
            {
                nome: "Dr. Firminus Silva",
                oab: "OAB/SP 123.456",
                especialidade: "Direito do Consumidor",
                bio: "Especialista em defesa do consumidor com mais de 15 anos de experiencia em acoes coletivas e individuais.",
                foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
            },
            {
                nome: "Dra. Ana Costa",
                oab: "OAB/SP 234.567",
                especialidade: "Direito Civil",
                bio: "Atuacao em contratos, responsabilidade civil e direito de familia, com abordagem humanizada.",
                foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
            }
        ]
    },

    formulario: {
        endpointFormspree: "COLE_SEU_ENDPOINT_AQUI",
        campos: [
            { nome: "nome", label: "Nome completo", tipo: "text", obrigatorio: true },
            { nome: "email", label: "E-mail", tipo: "email", obrigatorio: true },
            { nome: "telefone", label: "Telefone", tipo: "tel", obrigatorio: true },
            { nome: "assunto", label: "Area de interesse", tipo: "select", obrigatorio: true, opcoes: ["Direito do Consumidor", "Direito Civil", "Direito Empresarial", "Outro"] },
            { nome: "mensagem", label: "Descreva brevemente seu caso", tipo: "textarea", obrigatorio: true }
        ]
    },

    // ============================================
    // ROTATIVO DO INFORMATIVO (STUDIO)
    // Lista de frases que aparecem em rotacao com efeito fade.
    // Adicione quantas quiser.
    // ============================================
    rotativoInformativo: [
        "Defesa do Consumidor",
        "Direito Civil",
        "Direito Empresarial",
        "Contratos e Negocios",
        "Protecao dos seus Direitos"
    ],

    secoes: {
        home: { titulo: "Bem-vindo ao nosso escritorio", subtitulo: "Solucoes juridicas com excelencia e transparencia", botaoTexto: "Conheca nosso trabalho" },
        sobre: { titulo: "Sobre Nos", texto: "Nascemos com o proposito de oferecer servicos juridicos de alta qualidade, pautados pela etica, transparencia e compromisso com os resultados." },
        areas: {
            titulo: "Areas de Atuacao",
            areas: [
                { titulo: "Direito do Consumidor", descricao: "Defesa dos seus direitos nas relacoes de consumo, com atuacao em casos de produtos defeituosos, cobrancas indevidas e praticas abusivas.", icone: "shield" },
                { titulo: "Direito Civil", descricao: "Assessoria completa em contratos, responsabilidade civil, direito de familia e sucessoes.", icone: "scale" },
                { titulo: "Direito Empresarial", descricao: "Suporte juridico para empresas, desde a constituicao societaria ate a resolucao de conflitos comerciais.", icone: "building" }
            ]
        },
        informativo: {
            titulo: "Seus Direitos",
            subtitulo: "Conheca seus direitos e saiba como protege-los",
            itens: [
                { titulo: "Direito a Informacao", descricao: "Voce tem direito a informacoes claras e adequadas sobre produtos e servicos, incluindo precos, caracteristicas e riscos." },
                { titulo: "Direito a Seguranca", descricao: "Produtos e servicos nao podem oferecer riscos a sua saude ou seguranca. Se houver defeito, o fornecedor e responsavel." },
                { titulo: "Direito de Arrependimento", descricao: "Em compras online ou fora do estabelecimento comercial, voce tem 7 dias para desistir da compra sem justificativa." },
                { titulo: "Direito a Qualidade", descricao: "Produtos e servicos devem atender as expectativas legitimas e as informacoes fornecidas pelo fornecedor." }
            ]
        },
        contato: { titulo: "Entre em Contato", endereco: "Rua Exemplo, 123 - Centro, Sao Paulo - SP", telefone: "(11) 9999-9999", email: "contato@firminusadvogados.com.br", horario: "Segunda a Sexta, 9h as 18h" }
    }
};
window.SITE_CONFIG = SITE_CONFIG;