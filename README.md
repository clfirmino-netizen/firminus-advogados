# Site Institucional - Advocacia

Site institucional moderno e elegante. Tudo Ã© configurÃ¡vel pelo arquivo `config.js` (Studio), sem precisar tocar em HTML/CSS/JS.

## Studio (config.js)
Edite apenas o `config.js` para alterar:
- Nome do escritÃ³rio (`nome`)
- Cores e gradientes (`cores`)
- Imagens (`imagens`)
- Textos de todas as seÃ§Ãµes (`secoes`)
- Ãreas de atuaÃ§Ã£o (`secoes.areas.areas`)
- SeÃ§Ã£o informativa (`secoes.informativo`)
- Contato (`secoes.contato`)

## Visualizar localmente
Abra o `index.html` no navegador (duplo clique). NÃ£o usa porta nem servidor.

## Publicar no GitHub Pages (grÃ¡tis)
1. Crie um repositÃ³rio pÃºblico em https://github.com/new
2. No PowerShell:
   cd "C:\Users\SEU_USUARIO\Documents\firminus-advogados"
   git init
   git add .
   git commit -m "Site inicial"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/meu-escritorio.git
   git push -u origin main
3. GitHub > repositÃ³rio > Settings > Pages > Source: Deploy from a branch > main > / root > Save
4. Acesse: https://SEU_USUARIO.github.io/meu-escritorio

## DomÃ­nio prÃ³prio (opcional)
1. Compre o domÃ­nio no Registro.br
2. GitHub: Settings > Pages > Custom domain
3. No Registro.br: aponte CNAME para SEU_USUARIO.github.io
4. Ative "Enforce HTTPS"
