# Protótipo LabCET — GitHub Pages

Site estático simples para apresentação interna do novo site do LabCET.

## Estrutura
- `index.html`: página principal
- `assets/styles.css`: paleta, layout e responsividade
- `assets/script.js`: busca, filtros e renderização
- `data/site-data.js`: conteúdo editável de pesquisas, publicações, equipe e notícias

## Como publicar no GitHub Pages
1. Crie um repositório no GitHub, por exemplo: `labcet-site`.
2. Envie estes arquivos para a branch `main`.
3. Vá em **Settings > Pages**.
4. Em **Build and deployment**, selecione:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Salve. O GitHub vai gerar um link público.

## Como atualizar
Edite o arquivo `data/site-data.js`.
As notícias que aparecem na home são os primeiros itens do bloco `news`.
