# Lost Wild — versão Bootstrap

Protótipo responsivo de locadora de filmes clássicos, feito com HTML, CSS próprio, JavaScript e Bootstrap 5.3.3.

## Estrutura

```text
lost-wild-bootstrap/
├── index.html
├── style.css
├── js/
│   └── app.js
├── pages/
│   └── README.txt
└── assets/
    └── README.txt
```

## Executar

1. Extraia o ZIP.
2. Abra a pasta no VS Code.
3. Rode `index.html` com Live Server ou abra diretamente no navegador.
4. É necessária conexão com internet para carregar Bootstrap 5.3.3 e Google Fonts via CDN.

## Funcionalidades demonstrativas

- Login e criação de conta com validação simples.
- Entrada Google simulada.
- Catálogo de 20 clássicos, busca, filtros por gênero/formato e ordenação.
- Wishlist, detalhes do filme, sacola e checkout demonstrativo.
- Estante de reservas, aluguéis e compras; endereço fictício e prazo de retirada.
- Perfil editável, multas pendentes/quitadas, contestação e tarifas.
- Cadastro e remoção de cartões de teste.
- Logout e persistência local com `localStorage`.

## Segurança e limites

Este projeto é um protótipo front-end. A senha da conta demo é armazenada em `localStorage` apenas para demonstrar o fluxo e **não é seguro para produção**. O login Google não autentica com o Google; o checkout e os cartões não fazem cobranças reais. Para publicar de verdade, implemente backend, autenticação segura, integração OAuth e provedor de pagamento compatível com PCI DSS. Nenhum bloqueio real de conta é aplicado. Multas são demonstrativas e contestáveis na interface.

## Design e acessibilidade

Paleta inspirada nas referências fornecidas: verde profundo, verde-azulado, menta, ocre e vermelho-óxido. O layout usa breakpoints do Bootstrap, foco visível, rótulos de formulário, link para pular conteúdo, mensagens de status, navegação por teclado e preferência `prefers-reduced-motion`.
