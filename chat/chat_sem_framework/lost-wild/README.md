# Lost Wild — protótipo de locadora vintage

Projeto de front-end responsivo feito com **HTML, CSS e JavaScript puros**, sem frameworks CSS ou bibliotecas de interface.

## Estrutura
- `index.html` — login e criação de conta
- `style.css` — tokens de design, layout, componentes e responsividade
- `app.js` — autenticação demonstrativa, catálogo, desejos, sacola, checkout, perfil, multas e cartões fictícios
- `pages/home.html` — catálogo de 20 clássicos
- `pages/profile.html` — pedidos, devoluções e lista de desejos
- `pages/fines.html` — histórico, tabela de multas, contestação e regra demonstrativa de bloqueio
- `pages/payments.html` — métodos de pagamento fictícios
- `pages/about.html` — manifesto da Lost Wild

## Como testar
1. Extraia a pasta.
2. Abra `index.html` no navegador. Para uma experiência mais consistente, use uma extensão de servidor local no editor.
3. Crie uma conta com e-mail válido e senha de pelo menos 8 caracteres.
4. Explore o catálogo, adicione itens à sacola e cadastre um método de pagamento fictício para testar o checkout.
5. Use o botão “Continuar com Google” para simular uma entrada — não há OAuth real.

## Dados e limites importantes
- Os dados ficam em `localStorage` do navegador. Limpar os dados do site apaga o protótipo.
- Não use senha real, cartão real ou informação sensível.
- Não há backend, integração com Google, streaming, cobrança, e-mail ou disponibilidade real.
- A autenticação e as multas são simulações front-end, **não adequadas para produção**. Em um produto real, use backend, hash de senha, sessões seguras, controle de acesso no servidor, logs, notificações e provedor de pagamentos tokenizado.
- O bloqueio demonstrativo ocorre com 3 multas pendentes ou R$ 50,00 ou mais em aberto. O fluxo informa o motivo e oferece contestação. Um sistema real deve permitir revisão humana e comunicação prévia.

## Curadoria dos filmes
Os 20 títulos foram selecionados como catálogo demonstrativo a partir de referências de curadoria de cinema clássico, incluindo listas do American Film Institute e do British Film Institute:
- AFI — 100 Years…100 Movies: https://www.afi.com/afis-100-years-100-movies/
- BFI — Classic films before 1960: https://player.bfi.org.uk/subscription/collection/classic-films-before-1960
- BFI — The Greatest Films of All Time: https://www.bfi.org.uk/sight-and-sound/greatest-films-all-time

Os preços, disponibilidade, formatos e endereço são inventados para fins de demonstração.
