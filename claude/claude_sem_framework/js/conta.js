/* Perfil: aluguéis, reservas, compras, multas (com bloqueio) e cartões fictícios. */
(() => {
  const u = LW.boot(); if (!u) return;
  LW.chrome('conta');
  const $ = id => document.getElementById(id);
  const F = id => FILMS[id], t = () => LW.today();
  let tab = (location.hash || '#alugueis').slice(1);
  const cardOpts = () => u.cards.map(c => `<option value="${c.id}">${c.brand} final ${c.last4}</option>`).join('');
  const list = (items, empty) => items.length ? items.join('') : `<p class="mute">${empty}</p>`;

  function head() {
    const p = LW.sync();
    $('who').textContent = u.name; $('mail').textContent = u.email;
    $('banBox').innerHTML = u.ban ? `<div class="alert" role="alert"><b>Conta bloqueada para novos aluguéis e compras.</b> Suas multas somam ${LW.money(p.total)} (limite: ${LW.money(LW.RULES.limit)}) ou há atraso acima de ${LW.RULES.maxDays} dias. Devolva os filmes e quite tudo na aba Multas para liberar a conta.</div>`
      : p.total ? `<div class="alert">Você tem ${LW.money(p.total)} em multas. Ao chegar a ${LW.money(LW.RULES.limit)}, a conta é bloqueada.</div>` : '';
  }
  const views = {
    alugueis() {
      const now = t();
      const rows = u.rentals.map((r, i) => ({ ...r, i })).filter(r => !r.ret).map(r => {
        const late = r.due < now, wait = r.pickup > now;
        return `<div class="line"><span><b>${LW.esc(F(r.fid).title)}</b><br><small class="mute">${wait ? `Retirar até ${LW.fmt(r.pickup)} · ${LW.STORE}` : `Devolver até ${LW.fmt(r.due)}`}</small></span>
        <span>${late ? `<span class="badge red">${now - r.due} d de atraso</span>` : `<span class="badge">${wait ? 'Aguardando retirada' : `${r.due - now} d restantes`}</span>`} ${wait ? '' : `<button class="btn sm" data-act="back" data-i="${r.i}">Devolver</button>`}</span></div>`;
      });
      const others = FILMS.filter(f => f.out).map(f => `<div class="line"><span>${LW.esc(f.title)}</span><span class="badge red">volta em ${f.out} d</span></div>`);
      return `<div class="cols"><div><h2>Comigo agora</h2>${list(rows, 'Nenhum aluguel ativo.')}<h2 style="margin-top:2rem">Minhas reservas</h2>
        ${list(u.reservations.map((id, i) => `<div class="line"><span>${LW.esc(F(id).title)}<br><small class="mute">${F(id).out ? `Disponível em ${F(id).out} dias` : 'Já disponível para alugar'}</small></span><button class="btn sm" data-act="unres" data-i="${i}">Cancelar</button></div>`), 'Sem reservas.')}</div>
        <div><h2>Minhas compras</h2>${list(u.buys.map(id => `<div class="line"><span>${LW.esc(F(id).title)}</span><span class="badge">Retirar na loja</span></div>`), 'Nenhuma compra ainda.')}
        <h2 style="margin-top:2rem">Alugados por outros</h2>${others.join('')}</div></div>`;
    },
    multas() {
      const p = LW.pending(), paid = u.fines.filter(f => f.paid);
      const open = p.open.map(f => `<div class="line"><span>${LW.esc(F(f.fid).title)}<br><small class="mute">${f.days} dias de atraso, ainda não devolvido</small></span><span><b>${LW.money(f.amount)}</b> <button class="btn sm" data-act="back" data-i="${f.idx}">Devolver</button></span></div>`);
      const stored = p.stored.map(f => `<div class="line"><span>${LW.esc(F(f.fid).title)}<br><small class="mute">${f.days} dias de atraso</small></span><b>${LW.money(f.amount)}</b></div>`);
      const payBox = p.stored.length ? (u.cards.length ? `<label for="fc">Pagar com</label><select id="fc">${cardOpts()}</select><button class="btn hot" style="margin-top:1rem" data-act="payfine">Pagar ${LW.money(p.stored.reduce((s, f) => s + f.amount, 0))}</button>` : '<p>Cadastre um cartão na aba Cartões para pagar.</p>') : '';
      return `<div class="cols"><div><h2>Pendentes</h2>${list([...open, ...stored], 'Nenhuma multa pendente. Obrigado por devolver em dia!')}${payBox}
        <h2 style="margin-top:2rem">Quitadas</h2>${list(paid.map(f => `<div class="line"><span>${LW.esc(F(f.fid).title)}</span><span>${LW.money(f.amount)} · ${LW.fmt(f.day)}</span></div>`), 'Sem multas quitadas.')}</div>
        <div><h2>Tabela de valores</h2><table><caption class="small mute" style="text-align:left;padding-bottom:.5rem">Cobrança por dia de atraso, por filme</caption><tr><th>Situação</th><th>Valor</th></tr>
        <tr><td>1 a 3 dias</td><td>R$ 2,00 por dia</td></tr><tr><td>A partir do 4º dia</td><td>R$ 4,00 por dia</td></tr>
        <tr><td>Multas somam ${LW.money(LW.RULES.limit)} ou mais</td><td>Conta bloqueada</td></tr><tr><td>Mais de ${LW.RULES.maxDays} dias de atraso</td><td>Conta bloqueada</td></tr></table></div></div>`;
    },
    cartoes() {
      return `<div class="cols"><div><h2>Adicionar cartão</h2><form id="cf" novalidate><label for="cn">Número do cartão</label><input id="cn" inputmode="numeric" autocomplete="cc-number" placeholder="0000 0000 0000 0000">
        <label for="cm">Nome impresso</label><input id="cm" autocomplete="cc-name"><label for="ce">Validade (MM/AA)</label><input id="ce" autocomplete="cc-exp" placeholder="12/29">
        <label for="cv">CVV</label><input id="cv" inputmode="numeric" maxlength="4" autocomplete="cc-csc"><p class="err" id="cerr" role="alert"></p><button class="btn hot">Salvar cartão (simulado)</button></form></div>
        <div><h2>Meus cartões</h2>${list(u.cards.map((c, i) => `<div style="margin-bottom:1rem"><div class="cc"><span>${c.brand}</span><b>•••• •••• •••• ${c.last4}</b><span>${LW.esc(c.name)} · ${c.exp}</span></div><button class="btn sm" style="margin-top:.5rem" data-act="rmcard" data-i="${i}">Remover</button></div>`), 'Nenhum cartão cadastrado.')}</div></div>`;
    }
  };
  function show(name) {
    tab = views[name] ? name : 'alugueis'; head();
    document.querySelectorAll('[data-t]').forEach(b => b.setAttribute('aria-selected', b.dataset.t === tab));
    $('view').innerHTML = views[tab]();
    const f = $('cf'); if (f) f.onsubmit = addCard;
  }
  function addCard(e) {
    e.preventDefault();
    const n = $('cn').value.replace(/\D/g, '');
    const err = n.length !== 16 ? 'O número precisa ter 16 dígitos.' : !$('cm').value.trim() ? 'Informe o nome impresso no cartão.'
      : !/^(0[1-9]|1[0-2])\/\d{2}$/.test($('ce').value) ? 'Validade no formato MM/AA, como 12/29.' : !/^\d{3,4}$/.test($('cv').value) ? 'O CVV tem 3 ou 4 dígitos.' : '';
    if (err) { $('cerr').textContent = err; return; }
    u.cards.push({ id: Date.now(), brand: n[0] === '4' ? 'Visa' : n[0] === '5' ? 'Mastercard' : 'Cartão', last4: n.slice(-4), name: $('cm').value.trim(), exp: $('ce').value });
    LW.save(); show('cartoes'); LW.toast('Cartão salvo. Nenhum dado real é armazenado.');
  }
  const actions = {
    back(i) {
      const r = u.rentals[i], late = t() - r.due; r.ret = t();
      if (late > 0) u.fines.push({ id: Date.now(), fid: r.fid, days: late, amount: LW.fineFor(late), paid: false, day: t() });
      LW.save(); show(tab); LW.toast(late > 0 ? 'Devolvido com atraso. A multa está pendente.' : 'Devolução registrada. Obrigado!');
    },
    unres(i) { u.reservations.splice(i, 1); LW.save(); show(tab); },
    rmcard(i) { u.cards.splice(i, 1); LW.save(); show(tab); },
    payfine() { u.fines.forEach(f => { f.paid = true; }); LW.save(); show('multas'); LW.toast(u.ban ? 'Ainda há multas em aberto.' : 'Multas quitadas. Conta liberada!'); }
  };
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-act],[data-t]'); if (!b) return;
    if (b.dataset.t) { location.hash = b.dataset.t; return show(b.dataset.t); }
    actions[b.dataset.act]?.(+b.dataset.i);
  });
  $('skip').onclick = () => { u.offset += 7; LW.save(); show(tab); LW.toast('Passaram 7 dias.'); };
  show(tab);
})();
