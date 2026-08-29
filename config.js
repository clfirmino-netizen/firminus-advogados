const SITE_CONFIG = {
    "nome": "Silva & Firmino Advogados",
    "slogan": "Excelencia juridica com compromisso e dedicacao",
    "descricao": "Escritorio de advocacia especializado em solucoes juridicas personalizadas, com atuacao etica e transparente.",
    "cores": {
        "gradientePrincipal": "linear-gradient(135deg, #0A1A2F 0%, #1B3A5C 50%, #274B6D 100%)",
        "gradienteDestaque": "linear-gradient(135deg, #C9A24B 0%, #E8C877 100%)",
        "fundoClaro": "#F7F5F0",
        "textoEscuro": "#1B3A5C",
        "textoMedio": "#5A6570",
        "textoClaro": "#FFFFFF"
    },
    "imagens": {
        "hero": "imagens/Hero.jpg",
        "sobre": "imagens/Sobre.jpg",
        "contato": "imagens/Contato.jpg"
    },
    "redesSociais": {
        "whatsapp": {
            "ativo": true,
            "numero": "5511999999999",
            "mensagem": "Ola! Gostaria de mais informacoes sobre seus servicos."
        },
        "instagram": {
            "ativo": true,
            "url": "https://instagram.com/seu_escritorio"
        },
        "facebook": {
            "ativo": true,
            "url": "https://facebook.com/seu_escritorio"
        },
        "linkedin": {
            "ativo": true,
            "url": "https://linkedin.com/company/seu_escritorio"
        }
    },
    "equipe": {
        "titulo": "Nossa Equipe",
        "subtitulo": "Profissionais dedicados a defender seus direitos",
        "advogados": [
            {
                "nome": "Dr. Wilson Silva",
                "oab": "OAB/SP 123.456",
                "especialidade": "Direito do Consumidor",
                "bio": "Especialista em defesa do consumidor com mais de 15 anos de experiencia em acoes coletivas e individuais.",
                "foto": "imagens/advogado1.jpeg"
            },
            {
                "nome": "Dr. Claudio Firmino",
                "oab": "OAB/SP 234.567",
                "especialidade": "Direito Civil",
                "bio": "Atuacao em contratos, responsabilidade civil e direito de familia, com abordagem humanizada.",
                "foto": "imagens/advogado2.jpeg"
            }
        ]
    },
    "formulario": {
        "endpointFormspree": "COLE_SEU_ENDPOINT_AQUI",
        "campos": [
            {
                "nome": "nome",
                "label": "Nome completo",
                "tipo": "text",
                "obrigatorio": true
            },
            {
                "nome": "email",
                "label": "E-mail",
                "tipo": "email",
                "obrigatorio": true
            },
            {
                "nome": "telefone",
                "label": "Telefone",
                "tipo": "tel",
                "obrigatorio": true
            },
            {
                "nome": "assunto",
                "label": "Area de interesse",
                "tipo": "select",
                "obrigatorio": true,
                "opcoes": [
                    "Direito do Consumidor",
                    "Direito Civil",
                    "Direito Empresarial",
                    "Outro"
                ]
            },
            {
                "nome": "mensagem",
                "label": "Descreva brevemente seu caso",
                "tipo": "textarea",
                "obrigatorio": true
            }
        ]
    },
    "rotativoInformativo": [
        "Defesa do Consumidor",
        "Direito Civil",
        "Direito Empresarial",
        "Contratos e Negocios",
        "Protecao dos seus Direitos"
    ],
    "secoes": {
        "home": {
            "titulo": "Bem-vindo ao nosso escritorio",
            "subtitulo": "Solucoes juridicas com excelencia e transparencia",
            "botaoTexto": "Conheca nosso trabalho"
        },
        "sobre": {
            "titulo": "Sobre Silva&Firmino",
            "texto": "Nascemos com o proposito de oferecer servicos juridicos de alta qualidade, pautados pela etica, transparencia e compromisso com os resultados."
        },
        "areas": {
            "titulo": "Areas de Atuacao",
            "areas": [ { "titulo": "Direito Criminal", "descricao": "Defesa tecnica em processos criminais, atuacao em audiencias, recursos e acompanhamento completo em todas as fases do processo penal.", "icone": "shield" }, { "titulo": "Direito Civil", "descricao": "Assessoria em contratos, responsabilidade civil, indenizacoes, cobrancas e resolucao de conflitos patrimoniais com seguranca juridica.", "icone": "scale" }, { "titulo": "Direito do Consumidor", "descricao": "Protecao contra praticas abusivas, defeitos de produtos, cobrancas indevidas e defesa dos seus direitos nas relacoes de consumo.", "icone": "shield" }, { "titulo": "Direito Trabalhista", "descricao": "Defesa de direitos trabalhistas, rescisoes, horas extras, assedio moral, acidentes de trabalho e negociacoes com empregadores.", "icone": "building" }, { "titulo": "Direito Previdenciario", "descricao": "Aposentadorias, pensoes, auxilios por incapacidade, revisoes de beneficios e planejamento previdenciario para garantir seu futuro.", "icone": "scale" } ]
        },
        "informativo": {
            "titulo": "Seus Direitos",
            "subtitulo": "Conheca seus direitos e saiba como protege-los",
            "itens": [
                {
                    "titulo": "Direito a Informacao",
                    "descricao": "Voce tem direito a informacoes claras e adequadas sobre produtos e servicos, incluindo precos, caracteristicas e riscos."
                },
                {
                    "titulo": "Direito a Seguranca",
                    "descricao": "Produtos e servicos nao podem oferecer riscos a sua saude ou seguranca. Se houver defeito, o fornecedor e responsavel."
                },
                {
                    "titulo": "Direito de Arrependimento",
                    "descricao": "Em compras online ou fora do estabelecimento comercial, voce tem 7 dias para desistir da compra sem justificativa."
                },
                {
                    "titulo": "Direito a Qualidade",
                    "descricao": "Produtos e servicos devem atender as expectativas legitimas e as informacoes fornecidas pelo fornecedor."
                }
            ]
        },
        "contato": {
            "titulo": "Entre em Contato",
            "endereco": "Rua Exemplo, 123 - Centro, Sao Paulo - SP",
            "telefone": "(11) 9999-9999",
            "email": "contato@silvaefirminoadv.com.br",
            "horario": "Segunda a Sexta, 9h as 18h"
        }
    }
};
window.SITE_CONFIG = SITE_CONFIG;
