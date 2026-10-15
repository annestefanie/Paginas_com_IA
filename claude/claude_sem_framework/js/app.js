/* Núcleo compartilhado: sessão, usuários, multas, UI comum. Dados ficam no localStorage (demo). */
const LW = (() => {
  const KEY = { users: 'lw_users', session: 'lw_session' };
  const RULES = { limit: 50, maxDays: 14, rentDays: 7, pickupRent: 3, pickupBuy: 5 };
  const STORE = 'Rua dos Projetores, 27 – Loja 3, Brasília-DF (endereço fictício)';
  const root = document.body.dataset.root || '';
  const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
  const write = (k, v) => localStorage.setItem(k, JSON.stringify(v));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const money = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  /* btoa quebra com acentos/emoji; esta versão aceita qualquer caractere e é igual ao btoa para ASCII */
  const enc = s => btoa(unescape(encodeURIComponent(s)));
  let cur = null;
  /* btoa puro quebra com acentos na senha; isto converte para UTF-8 antes */
  const hash = s => btoa(unescape(encodeURIComponent(s)));
  const storageOk = () => { try { localStorage.setItem('lw_t', '1'); localStorage.removeItem('lw_t'); return true; } catch { return false; } };

  const today = () => Math.floor(Date.now() / 864e5) + (cur ? cur.offset : 0);
  const fmt = d => new Date(d * 864e5).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  const fineFor = n => (n <= 3 ? n * 2 : 6 + (n - 3) * 4);
  const save = () => { const u = read(KEY.users, {}); u[cur.email] = cur; write(KEY.users, u); };

  function seed(name, email, pass) {
    const d = Math.floor(Date.now() / 864e5);
    return { name, email, pass: enc(pass), ban: false, offset: 0, wish: [], cart: [], reservations: [], buys: [], cards: [],
      rentals: [{ fid: 13, pickup: d - 11, due: d - 4, ret: null }, { fid: 2, pickup: d - 2, due: d + 5, ret: null }],
      fines: [{ id: 1, fid: 1, days: 2, amount: 4, paid: true, day: d - 30 }] };
  }
  function register(name, email, pass) {
    const users = read(KEY.users, {});
    if (users[email]) return 'Já existe uma conta com este e-mail. Tente entrar.';
    users[email] = seed(name, email, pass); write(KEY.users, users); write(KEY.session, email); return null;
  }
  function login(email, pass) {
    const u = read(KEY.users, {})[email];
    if (!u || u.pass !== enc(pass)) return 'E-mail ou senha incorretos. Confira os dados e tente de novo.';
    write(KEY.session, email); return null;
  }
  const hasSession = () => !!read(KEY.users, {})[read(KEY.session, '')];
  function pending() {
    const t = today();
    const open = cur.rentals.map((r, idx) => ({ ...r, idx })).filter(r => !r.ret && r.due < t)
      .map(r => ({ idx: r.idx, fid: r.fid, days: t - r.due, amount: fineFor(t - r.due) }));
    const stored = cur.fines.filter(f => !f.paid);
    const total = open.reduce((s, f) => s + f.amount, 0) + stored.reduce((s, f) => s + f.amount, 0);
    return { open, stored, total, maxDays: Math.max(0, ...open.map(f => f.days)) };
  }
  function sync() { const p = pending(); cur.ban = p.total >= RULES.limit || p.maxDays > RULES.maxDays; save(); return p; }
  function boot(needAuth = true) {
    cur = read(KEY.users, {})[read(KEY.session, '')] || null;
    if (needAuth && !cur) { location.href = root + 'index.html'; return null; }
    if (cur) sync();
    return cur;
  }
  const logout = () => { localStorage.removeItem(KEY.session); location.href = root + 'index.html'; };

  function poster(f, extra = '') { return `<div class="poster ${f.p}" ${extra}><b>${esc(f.title)}</b><i>${f.year}</i></div>`; }
  function toast(msg) {
    let t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role', 'status'); document.body.append(t); }
    t.textContent = msg; t.classList.add('on'); clearTimeout(t.h); t.h = setTimeout(() => t.classList.remove('on'), 3200);
  }
  function chrome(active) {
    const link = (h, l, k) => `<a href="${root}${h}" ${active === k ? 'aria-current="page"' : ''}>${l}</a>`;
    document.body.insertAdjacentHTML('afterbegin', `<a class="skip" href="#main">Pular para o conteúdo</a>
      <header class="top"><div class="wrap"><a class="logo" href="${root}pages/loja.html" aria-label="Lost Wild, início">lost wild</a>
      <nav aria-label="Principal">${link('pages/loja.html', 'Acervo', 'loja')}${link('pages/loja.html#sobre', 'Sobre nós', 'sobre')}${link('pages/conta.html', 'Minha conta', 'conta')}
      <button id="openCart" aria-controls="cart">Carrinho<span id="cartN">${cur.cart.length}</span></button><button id="out">Sair</button></nav></div></header>`);
    document.body.insertAdjacentHTML('beforeend', `<footer class="foot"><div class="wrap">Lost Wild · Retirada na loja: ${STORE}. Pagamentos e cartões são simulados.</div></footer>`);
    document.getElementById('out').onclick = logout;
  }
  const cartCount = () => { const n = document.getElementById('cartN'); if (n) n.textContent = cur.cart.length; };
  return { RULES, STORE, esc, money, today, fmt, fineFor, save, register, login, hasSession, storageOk, pending, sync, boot, logout, poster, toast, chrome, cartCount };
})();