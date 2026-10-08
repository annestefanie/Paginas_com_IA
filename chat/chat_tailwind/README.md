# Lost Wild — Tailwind CSS

Protótipo responsivo de locadora/curadoria de filmes clássicos. O layout usa **Tailwind CSS via CDN** para utilitários e `style.css` apenas para componentes personalizados, texturas e detalhes que exigem regras próprias. Não há Bootstrap ou outra biblioteca CSS.

## Rodar localmente
1. Extraia a pasta.
2. Abra `index.html` no navegador ou use a extensão Live Server no VS Code.
3. É necessária conexão com a internet para carregar Tailwind CDN, Google Fonts e as imagens ilustrativas do Unsplash.

## Estrutura
- `index.html`: autenticação demonstrativa e casca da aplicação.
- `style.css`: tokens e estilos personalizados.
- `js/app.js`: catálogo de 20 títulos, filtros, wishlist, sacola, checkout, perfil, multas e cartões de teste.
- `pages/README.txt`: mapa das vistas.
- `assets/`: reservado para imagens locais.

## O que funciona
- Criar conta e entrar novamente no mesmo navegador (demo local).
- Login Google simulado, sem OAuth.
- Busca por título/diretor/ano e filtro por gênero/formato.
- Detalhes do filme, wishlist, aluguel/compra e sacola.
- Pedido demonstrativo com endereço fictício e prazo de retirada.
- Perfil com reservas e histórico, cartões fictícios, multas pagas/pendentes e contestação.
- Menu mobile, feedback acessível e suporte a `prefers-reduced-motion`.

## Limites importantes
Este é um protótipo de front-end, não um serviço de produção. Dados são armazenados em `localStorage`; a senha demo é guardada apenas para permitir o fluxo de protótipo, o que **não é seguro para produção**. O botão Google não autentica com Google. Não existe servidor, pagamento real, envio de e-mails, bloqueio de conta no backend ou cálculo automático de atraso em tempo real. Cartões nunca devem ser reais. Para lançar, implemente backend com hash de senha, OAuth oficial, banco de dados, autorização no servidor, auditoria, provedor de pagamentos certificado, política transparente de multas e processo de contestação/apelação.

As imagens são ilustrações remotas e não necessariamente os cartazes oficiais dos títulos. Os preços, disponibilidade e regras são fictícios.
