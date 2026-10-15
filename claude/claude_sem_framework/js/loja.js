/* Página inicial: busca, filtros, lista de desejos, detalhes, carrinho e checkout. */
(() => {
  const u = LW.boot(); if (!u) return;
  LW.chrome('loja');
  const $ = id => document.getElementById(id);
  const state = { q: '', genre: 'Todos', wish: false };
  const price = c => (c.mode === 'rent' ? FILMS[c.fid].rent : FILMS[c.fid].buy);
  $('addr').textContent = LW.STORE;

  $('fan').insertAdjacentHTML('afterbegin', [12, 5, 18, 14, 0, 16, 8, 3, 13, 7].map((id, i, a) =>
    LW.poster(FILMS[id], `style="--a:${i * 360 / a.length}deg" aria-hidden="true"`)).join(''));
  $('genres').innerHTML = ['Todos', ...new Set(FILMS.map(f => f.genre))].map(g => `<button class="chip" aria-pressed="${g === 'Todos'}" data-g="${g}">${g}</button>`).join('');

  const status = f => u.rentals.some(r => r.fid === f.id && !r.ret) ? '<span class="badge gold">Com você</span>'
    : f.out ? `<span class="badge red">Alugado por outro cliente · volta em ${f.out} d</span>` : '<span class="badge">Disponível</span>';
  function actions(f) {
    const inCart = m => u.cart.some(c => c.fid === f.id && c.mode === m), res = u.reservations.includes(f.id);
    const rent = f.out ? `<button class="btn sm" data-act="reserve" data-id="${f.id}" ${res ? 'disabled' : ''}>${res ? 'Reservado' : 'Reservar'}</button>`
      : `<button class="btn sm" data-act="rent" data-id="${f.id}" ${inCart('rent') ? 'disabled' : ''}>Alugar ${LW.money(f.rent)}</button>`;
    return `${rent}<button class="btn sm hot" data-act="buy" data-id="${f.id}" ${inCart('buy') ? 'disabled' : ''}>Comprar ${LW.money(f.buy)}</button>`;
  }
  function render() {
    const q = state.q.toLowerCase();
    const list = FILMS.filter(f => (state.genre === 'Todos' || f.genre === state.genre) && (!state.wish || u.wish.includes(f.id)) &&
      `${f.title} ${f.dir} ${f.year} ${f.genre}`.toLowerCase().includes(q));
    $('count').textContent = `${list.length} ${list.length === 1 ? 'filme encontrado' : 'filmes encontrados'}`;
    $('grid').innerHTML = list.length ? list.map(f => `<article class="card">
      <div style="position:relative">${LW.poster(f, `data-act="info" data-id="${f.id}"`)}<button class="wish" data-act="wish" data-id="${f.id}" aria-pressed="${u.wish.includes(f.id)}" aria-label="Lista de desejos: ${LW.esc(f.title)}">♥</button></div>
      <h3>${LW.esc(f.title)}</h3><p class="mute small">${f.year} · ${LW.esc(f.dir)}</p>${status(f)}
      <div class="row">${actions(f)}</div></article>`).join('')
      : '<div class="empty" style="grid-column:1/-1">Nada por aqui. Tente outro termo ou limpe os filtros.</div>';
  }
  function renderCart() {
    LW.cartCount();
    const total = u.cart.reduce((s, c) => s + price(c), 0);
    $('cartBody').innerHTML = u.cart.length ? u.cart.map((c, i) => `<div class="line"><span>${LW.esc(FILMS[c.fid].title)}<br><small class="mute">${c.mode === 'rent' ? 'Aluguel de 7 dias' : 'Compra'}</small></span>
      <span>${LW.money(price(c))} <button class="btn sm" data-act="rm" data-id="${i}" aria-label="Remover ${LW.esc(FILMS[c.fid].title)}">Remover</button></span></div>`).join('')
      + `<p class="line"><b>Total</b><b>${LW.money(total)}</b></p><button class="btn hot" style="width:100%" data-act="checkout">Finalizar pedido</button>`
      : '<p class="mute" style="margin-top:1rem">Seu carrinho está vazio. Escolha um filme no acervo.</p>';
  }
  const cartOpen = open => { $('cart').classList.toggle('open', open); $('cart').setAttribute('aria-hidden', !open); (open ? $('closeCart') : $('openCart')).focus(); };

  function checkout() {
    const m = $('modal');
    if (u.ban) m.innerHTML = '<h2 id="mTitle">Conta bloqueada</h2><p>Há multas pendentes. Quite-as em Minha conta para voltar a alugar e comprar.</p><a class="btn hot" href="conta.html#multas" style="margin-top:1rem">Ver multas</a>';
    else if (!u.cards.length) m.innerHTML = '<h2 id="mTitle">Cadastre um cartão</h2><p>Precisamos de uma forma de pagamento (simulada) para concluir o pedido.</p><a class="btn hot" href="conta.html#cartoes" style="margin-top:1rem">Cadastrar cartão</a>';
    else {
      const days = u.cart.some(c => c.mode === 'rent') ? LW.RULES.pickupRent : LW.RULES.pickupBuy;
      m.innerHTML = `<h2 id="mTitle">Confirmar pedido</h2><label for="card">Pagar com</label>
        <select id="card">${u.cards.map(c => `<option value="${c.id}">${c.brand} final ${c.last4}</option>`).join('')}</select>
        <p style="margin:1rem 0">Retire em <b>${days} dias</b> (até ${LW.fmt(LW.today() + days)}) em:<br><b>${LW.STORE}</b></p>
        <button class="btn hot" data-act="pay">Pagar ${LW.money(u.cart.reduce((s, c) => s + price(c), 0))}</button> <button class="btn" data-act="close">Cancelar</button>`;
    }
    m.showModal();
  }
  function pay() {
    const t = LW.today(), R = LW.RULES;
    u.cart.forEach(c => c.mode === 'rent' ? u.rentals.push({ fid: c.fid, pickup: t + R.pickupRent, due: t + R.pickupRent + R.rentDays, ret: null }) : u.buys.push(c.fid));
    u.cart = []; LW.save(); $('modal').close(); renderCart(); render(); cartOpen(false);
    LW.toast('Pedido confirmado! Veja os prazos de retirada em Minha conta.');
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-act],[data-g]'); if (!b) return;
    if (b.dataset.g) { state.genre = b.dataset.g; document.querySelectorAll('[data-g]').forEach(x => x.setAttribute('aria-pressed', x === b)); return render(); }
    if (b.dataset.act === 'checkout') return checkout();
    const id = +b.dataset.id, f = FILMS[id];
    const add = mode => { u.cart.push({ fid: id, mode }); LW.save(); renderCart(); render(); $('modal').open && $('modal').close(); LW.toast(`${f.title} no carrinho.`); };
    ({
      info: () => { $('modal').innerHTML = `<h2 id="mTitle">${LW.esc(f.title)}</h2><p class="mute">${f.year} · ${LW.esc(f.dir)} · ${f.genre}</p><p style="margin:1rem 0">${LW.esc(f.syn)}</p><div style="display:flex;gap:.5rem;flex-wrap:wrap">${actions(f)}<button class="btn sm" data-act="close">Fechar</button></div>`; $('modal').showModal(); },
      wish: () => { u.wish = u.wish.includes(id) ? u.wish.filter(w => w !== id) : [...u.wish, id]; LW.save(); render(); LW.toast(u.wish.includes(id) ? 'Adicionado à lista de desejos.' : 'Removido da lista de desejos.'); },
      rent: () => add('rent'), buy: () => add('buy'),
      reserve: () => { u.reservations.push(id); LW.save(); render(); $('modal').open && $('modal').close(); LW.toast(`Reservado! Veja em Minha conta quando ${f.title} voltar.`); },
      rm: () => { u.cart.splice(id, 1); LW.save(); renderCart(); render(); },
      pay, close: () => $('modal').close()
    })[b.dataset.act]?.();
  });
  $('q').oninput = e => { state.q = e.target.value; render(); };
  $('onlyWish').onclick = e => { state.wish = !state.wish; e.currentTarget.setAttribute('aria-pressed', state.wish); render(); };
  $('openCart').onclick = () => cartOpen(true); $('closeCart').onclick = () => cartOpen(false);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('cart').classList.contains('open')) cartOpen(false); });
  render(); renderCart();
})();
