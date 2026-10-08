/* LOST WILD — protótipo funcional local. Não processa pagamentos reais. */
(() => {
  "use strict";

  const STORE = {
    users: "lw_users", session: "lw_session", wishlist: "lw_wishlist",
    cart: "lw_cart", orders: "lw_orders", fines: "lw_fines", cards: "lw_cards"
  };
  const films = [
    {id:1,title:"Casablanca",year:1942,director:"Michael Curtiz",genre:"Romance",format:"DVD + online",rent:8.9,buy:29.9,availability:"Raridade",colors:["#6b7b70","#293b3d"],description:"Uma despedida, uma cidade em suspenso e um dos romances mais lembrados do cinema."},
    {id:2,title:"Cidadão Kane",year:1941,director:"Orson Welles",genre:"Drama",format:"DVD",rent:7.9,buy:27.9,availability:"DVD raro",colors:["#b78c62","#3c342e"],description:"Um magnata morre e deixa uma palavra que ninguém consegue esquecer."},
    {id:3,title:"A Noite dos Mortos-Vivos",year:1968,director:"George A. Romero",genre:"Terror",format:"DVD + online",rent:8.9,buy:25.9,availability:"Cult",colors:["#5b6a51","#252c28"],description:"O terror independente que mudou para sempre o gênero."},
    {id:4,title:"A Regra do Jogo",year:1939,director:"Jean Renoir",genre:"Drama",format:"Online",rent:6.9,buy:22.9,availability:"Joia escondida",colors:["#a78c76","#51443c"],description:"Uma reunião elegante revela as contradições de uma sociedade inteira."},
    {id:5,title:"Cantando na Chuva",year:1952,director:"Gene Kelly, Stanley Donen",genre:"Musical",format:"DVD + online",rent:8.9,buy:29.9,availability:"Favorito",colors:["#6e9d9a","#314c54"],description:"Hollywood aprende a falar — e cantar — em uma nova era."},
    {id:6,title:"Rashomon",year:1950,director:"Akira Kurosawa",genre:"Mistério",format:"DVD",rent:9.9,buy:32.9,availability:"DVD raro",colors:["#b4a16e","#55513b"],description:"Quatro versões de um acontecimento. Qual delas é a verdade?"},
    {id:7,title:"A Felicidade Não se Compra",year:1946,director:"Frank Capra",genre:"Drama",format:"DVD + online",rent:7.9,buy:26.9,availability:"Clássico",colors:["#7f8a76","#3e4a43"],description:"Uma pequena cidade lembra a um homem o valor invisível de sua vida."},
    {id:8,title:"A Paixão de Joana d'Arc",year:1928,director:"Carl Theodor Dreyer",genre:"Drama",format:"Online",rent:6.9,buy:24.9,availability:"Cinema mudo",colors:["#b9b4a7","#55534f"],description:"Rostos, silêncio e uma das experiências mais intensas do cinema mudo."},
    {id:9,title:"Janela Indiscreta",year:1954,director:"Alfred Hitchcock",genre:"Suspense",format:"DVD + online",rent:8.9,buy:29.9,availability:"Clássico",colors:["#6e8290","#303c49"],description:"Uma janela, um vizinho suspeito e a curiosidade que não deixa dormir."},
    {id:10,title:"O Sétimo Selo",year:1957,director:"Ingmar Bergman",genre:"Drama",format:"DVD",rent:9.9,buy:31.9,availability:"DVD raro",colors:["#8c938a","#323833"],description:"Um cavaleiro joga xadrez com a morte em uma jornada filosófica."},
    {id:11,title:"A Princesa e o Plebeu",year:1953,director:"William Wyler",genre:"Romance",format:"DVD + online",rent:7.9,buy:27.9,availability:"Clássico",colors:["#bd9870","#755746"],description:"Um dia em Roma vira uma lembrança para a vida inteira."},
    {id:12,title:"Metrópolis",year:1927,director:"Fritz Lang",genre:"Ficção científica",format:"Online",rent:6.9,buy:24.9,availability:"Cinema mudo",colors:["#8c7f75","#373a3d"],description:"Uma cidade futurista dividida entre quem pensa e quem constrói."},
    {id:13,title:"O Terceiro Homem",year:1949,director:"Carol Reed",genre:"Noir",format:"DVD",rent:9.9,buy:33.9,availability:"DVD raro",colors:["#71806c","#2b3531"],description:"Viena, sombras longas e um amigo que talvez não seja quem parece."},
    {id:14,title:"Quanto Mais Quente Melhor",year:1959,director:"Billy Wilder",genre:"Comédia",format:"DVD + online",rent:8.9,buy:29.9,availability:"Favorito",colors:["#c28b65","#744b40"],description:"Dois músicos em fuga encontram abrigo em uma banda feminina."},
    {id:15,title:"A Doce Vida",year:1960,director:"Federico Fellini",genre:"Drama",format:"Online",rent:7.9,buy:28.9,availability:"Joia escondida",colors:["#9b8b78","#4d4840"],description:"Noites romanas e a busca por algo que a fama não consegue preencher."},
    {id:16,title:"Os Sete Samurais",year:1954,director:"Akira Kurosawa",genre:"Aventura",format:"DVD + online",rent:10.9,buy:34.9,availability:"DVD raro",colors:["#a5a078","#4a5040"],description:"Uma aldeia contrata guerreiros para enfrentar uma ameaça iminente."},
    {id:17,title:"O Mágico de Oz",year:1939,director:"Victor Fleming",genre:"Fantasia",format:"DVD + online",rent:8.9,buy:28.9,availability:"Clássico",colors:["#8ca99b","#475f54"],description:"Uma estrada amarela, amigos improváveis e a vontade de voltar para casa."},
    {id:18,title:"A Embriaguez do Sucesso",year:1957,director:"Alexander Mackendrick",genre:"Noir",format:"DVD",rent:8.9,buy:30.9,availability:"Joia escondida",colors:["#8b7774","#433b40"],description:"O lado sombrio da imprensa nova-iorquina em um noir afiado."},
    {id:19,title:"Tempos Modernos",year:1936,director:"Charlie Chaplin",genre:"Comédia",format:"Online",rent:6.9,buy:22.9,availability:"Cinema mudo",colors:["#b1a38b","#5c564b"],description:"Uma comédia física e humana sobre máquinas, trabalho e dignidade."},
    {id:20,title:"O Anjo Azul",year:1930,director:"Josef von Sternberg",genre:"Drama",format:"DVD",rent:8.9,buy:28.9,availability:"DVD raro",colors:["#8c7775","#403a3a"],description:"Um professor respeitável cruza o caminho de uma cantora de cabaré."}
  ];

  const get = key => { try { return JSON.parse(localStorage.getItem(STORE[key])) ?? null; } catch { return null; } };
  const set = (key, value) => localStorage.setItem(STORE[key], JSON.stringify(value));
  const currentUser = () => {
    const email = get("session");
    return email ? (get("users") || []).find(u => u.email === email) || null : null;
  };
  const money = value => value.toLocaleString("pt-BR", {style:"currency",currency:"BRL"});
  const dateText = value => new Date(value).toLocaleDateString("pt-BR");
  const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const toast = message => {
    let region = document.querySelector(".toast-region");
    if (!region) { region = document.createElement("div"); region.className = "toast-region"; region.setAttribute("aria-live","polite"); document.body.append(region); }
    const item = document.createElement("div"); item.className = "toast"; item.textContent = message; region.append(item);
    window.setTimeout(() => item.remove(), 3500);
  };
  const requireAuth = () => {
    if (!currentUser()) { location.href = "../index.html"; return false; }
    return true;
  };
  const seedUserData = email => {
    if (!get("wishlist")) set("wishlist", {});
    if (!get("cart")) set("cart", []);
    if (!get("orders")) set("orders", []);
    if (!get("fines")) set("fines", {});
    if (!get("cards")) set("cards", {});
    const fines = get("fines");
    if (!fines[email]) fines[email] = [
      {id:"F-001",description:"Atraso na devolução — Casablanca",amount:4.5,status:"quitada",date:"2026-09-02"},
      {id:"F-002",description:"Atraso na devolução — Metrópolis",amount:9.0,status:"pendente",date:"2026-10-01"}
    ];
    set("fines", fines);
  };

  // Auth page
  const authForm = document.querySelector("#authForm");
  if (authForm) {
    let mode = "login";
    const tabs = [...document.querySelectorAll("[data-auth-mode]")];
    const title = document.querySelector("#authTitle");
    const intro = document.querySelector("#authIntro");
    const nameInput = document.querySelector("#authName");
    const nameLabel = document.querySelector("#nameLabel");
    const emailInput = document.querySelector("#authEmail");
    const passInput = document.querySelector("#authPassword");
    const error = document.querySelector("#authError");
    const submit = document.querySelector("#authSubmit");
    const hint = document.querySelector("#passwordHint");
    const setMode = next => {
      mode = next;
      tabs.forEach(tab => { const active = tab.dataset.authMode === mode; tab.classList.toggle("active",active); tab.setAttribute("aria-selected",String(active)); });
      const signup = mode === "signup";
      nameInput.classList.toggle("hidden",!signup); nameLabel.classList.toggle("hidden",!signup);
      nameInput.required = signup; passInput.autocomplete = signup ? "new-password" : "current-password";
      title.innerHTML = signup ? "Vamos abrir<br>essa sessão." : "Que bom ter você<br>por aqui.";
      intro.textContent = signup ? "Crie sua conta e comece sua coleção de histórias favoritas." : "Entre para descobrir raridades, salvar desejos e continuar de onde a última sessão parou.";
      submit.innerHTML = signup ? "Criar minha conta <span aria-hidden=\"true\">↗</span>" : "Entrar na locadora <span aria-hidden=\"true\">↗</span>";
      hint.textContent = signup ? "Use 8 caracteres ou mais. Prefira uma senha única." : "Use pelo menos 8 caracteres.";
      error.textContent = "";
    };
    tabs.forEach(tab => tab.addEventListener("click", () => setMode(tab.dataset.authMode)));
    document.querySelectorAll("[data-toggle-password]").forEach(btn => btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.togglePassword);
      const visible = input.type === "text"; input.type = visible ? "password" : "text";
      btn.textContent = visible ? "ver" : "ocultar"; btn.setAttribute("aria-label", visible ? "Mostrar senha" : "Ocultar senha");
    }));
    authForm.addEventListener("submit", event => {
      event.preventDefault(); error.textContent = "";
      const email = emailInput.value.trim().toLowerCase(), password = passInput.value;
      if (!emailInput.validity.valid) { error.textContent = "Digite um e-mail válido."; emailInput.focus(); return; }
      if (password.length < 8) { error.textContent = "Sua senha precisa ter pelo menos 8 caracteres."; passInput.focus(); return; }
      const users = get("users") || [];
      if (mode === "signup") {
        const name = nameInput.value.trim();
        if (name.length < 2) { error.textContent = "Conte pra gente seu nome (pelo menos 2 letras)."; nameInput.focus(); return; }
        if (users.some(u => u.email === email)) { error.textContent = "Já existe uma conta com esse e-mail. Tente entrar."; return; }
        users.push({name,email,password,createdAt:new Date().toISOString(),banned:false});
        set("users",users); set("session",email); seedUserData(email); location.href = "pages/home.html";
      } else {
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) { error.textContent = "E-mail ou senha incorretos. Confira os dados e tente novamente."; return; }
        if (user.banned) { error.textContent = "Sua conta está temporariamente bloqueada por pendências. Consulte o atendimento."; return; }
        set("session",email); seedUserData(email); location.href = "pages/home.html";
      }
    });
    document.querySelector("#googleLogin").addEventListener("click", () => {
      const email = "visitante@lostwild.demo";
      const users = get("users") || [];
      if (!users.some(u => u.email === email)) users.push({name:"Visitante Lost Wild",email,password:"demo-google-login",createdAt:new Date().toISOString(),banned:false});
      set("users",users); set("session",email); seedUserData(email);
      toast("Entrada demonstrativa concluída."); window.setTimeout(() => location.href = "pages/home.html", 350);
    });
  }

  // Shared app header
  const user = currentUser();
  if (document.body.dataset.appPage) {
    if (!requireAuth()) return;
    seedUserData(user.email);
    document.querySelectorAll("[data-user-name]").forEach(el => el.textContent = user.name.split(" ")[0]);
    document.querySelectorAll("[data-logout]").forEach(btn => btn.addEventListener("click", () => { localStorage.removeItem(STORE.session); location.href = "../index.html"; }));
    document.querySelectorAll("[data-cart-open]").forEach(btn => btn.addEventListener("click", openCart));
  }

  function getWishlist() { const all = get("wishlist") || {}; return all[user.email] || []; }
  function saveWishlist(list) { const all = get("wishlist") || {}; all[user.email] = list; set("wishlist",all); }
  function getOrders() { const all = get("orders") || {}; return all[user.email] || []; }
  function saveOrders(list) { const all = get("orders") || {}; all[user.email] = list; set("orders",all); }
  function getFines() { const all = get("fines") || {}; return all[user.email] || []; }
  function saveFines(list) { const all = get("fines") || {}; all[user.email] = list; set("fines",all); }
  function getCards() { const all = get("cards") || {}; return all[user.email] || []; }
  function saveCards(list) { const all = get("cards") || {}; all[user.email] = list; set("cards",all); }
  function getCart() { return get("cart") || []; }
  function saveCart(list) { set("cart",list); updateCartCount(); }
  function updateCartCount() { document.querySelectorAll("[data-cart-count]").forEach(el => el.textContent = getCart().length); }
  updateCartCount();

  function posterMarkup(film) {
    const bg = `linear-gradient(145deg, ${film.colors[0]}, ${film.colors[1]})`;
    return `<div class="poster" style="--poster-bg:${bg}" aria-label="Arte gráfico inspirado em ${escapeHTML(film.title)}">
      <div class="poster-top"><span>LW / ${String(film.id).padStart(2,"0")}</span><span>${film.year}</span></div>
      <div class="poster-title">${escapeHTML(film.title)}</div>
      <div class="poster-bottom"><span>LOST WILD</span><span>${escapeHTML(film.genre.toUpperCase())}</span></div>
    </div>`;
  }
  function movieCard(film) {
    const wished = getWishlist().includes(film.id);
    return `<article class="movie-card">
      <div class="poster-holder" style="position:relative">${posterMarkup(film)}
        <button class="wish-button" type="button" data-wish="${film.id}" aria-label="${wished ? "Remover dos desejos" : "Adicionar aos desejos"}: ${escapeHTML(film.title)}" aria-pressed="${wished}">${wished ? "♥" : "♡"}</button>
      </div>
      <div class="movie-meta">
        <div class="movie-title-row"><h3>${escapeHTML(film.title)}</h3><span class="movie-year">${film.year}</span></div>
        <p class="movie-sub">${escapeHTML(film.director)} · <span class="tag">${escapeHTML(film.availability)}</span></p>
        <div class="movie-actions"><button class="button button-dark" type="button" data-add-cart="${film.id}" data-kind="aluguel">Alugar ${money(film.rent)}</button><button class="button button-light" type="button" data-add-cart="${film.id}" data-kind="compra" aria-label="Comprar ${escapeHTML(film.title)}">Comprar</button></div>
      </div>
    </article>`;
  }
  function bindMovieActions() {
    document.querySelectorAll("[data-wish]").forEach(btn => btn.addEventListener("click", () => {
      const id = Number(btn.dataset.wish), list = getWishlist();
      saveWishlist(list.includes(id) ? list.filter(x => x !== id) : [...list,id]);
      btn.setAttribute("aria-pressed",String(!list.includes(id)));
      btn.textContent = list.includes(id) ? "♡" : "♥";
      btn.setAttribute("aria-label",`${list.includes(id) ? "Adicionar aos desejos" : "Remover dos desejos"}: ${films.find(f=>f.id===id).title}`);
      toast(list.includes(id) ? "Removido da sua lista de desejos." : "Salvo na sua lista de desejos.");
    }));
    document.querySelectorAll("[data-add-cart]").forEach(btn => btn.addEventListener("click", () => {
      const film = films.find(f => f.id === Number(btn.dataset.addCart));
      const cart = getCart(); cart.push({id:film.id,kind:btn.dataset.kind}); saveCart(cart);
      toast(`${film.title} adicionado à sacola.`); if (btn.dataset.quickCheckout === "true") openCart();
    }));
  }

  const catalog = document.querySelector("#movieGrid");
  if (catalog) {
    const search = document.querySelector("#movieSearch"), filter = document.querySelector("#genreFilter"), sort = document.querySelector("#sortFilter");
    let wishOnly = false;
    const render = () => {
      let list = [...films];
      const q = search.value.trim().toLocaleLowerCase("pt-BR");
      if (q) list = list.filter(f => `${f.title} ${f.director} ${f.genre} ${f.year} ${f.availability}`.toLocaleLowerCase("pt-BR").includes(q));
      if (filter.value !== "todos") list = list.filter(f => f.genre === filter.value);
      if (wishOnly) list = list.filter(f => getWishlist().includes(f.id));
      if (sort.value === "nome") list.sort((a,b)=>a.title.localeCompare(b.title,"pt-BR"));
      if (sort.value === "ano") list.sort((a,b)=>a.year-b.year);
      if (sort.value === "preco") list.sort((a,b)=>a.rent-b.rent);
      catalog.innerHTML = list.length ? list.map(movieCard).join("") : `<div class="empty-state"><strong>Nenhum filme por aqui.</strong><br>Tente outra busca ou explore todos os clássicos.</div>`;
      document.querySelector("#catalogCount").textContent = `${list.length} ${list.length === 1 ? "filme" : "filmes"}`;
      bindMovieActions();
    };
    search.addEventListener("input",render); filter.addEventListener("change",render); sort.addEventListener("change",render);
    document.querySelector("#wishFilter").addEventListener("click", event => { wishOnly = !wishOnly; event.currentTarget.setAttribute("aria-pressed",String(wishOnly)); event.currentTarget.textContent = wishOnly ? "♥ Ver catálogo todo" : "♡ Minha lista de desejos"; render(); });
    render();
  }

  function openModal(content) {
    const old = document.querySelector(".modal-backdrop"); if (old) old.remove();
    const wrap = document.createElement("div"); wrap.className = "modal-backdrop"; wrap.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">${content}</section>`;
    wrap.addEventListener("click",e=>{if(e.target===wrap)wrap.remove();}); document.body.append(wrap);
    const close = wrap.querySelector("[data-modal-close]"); if(close) close.addEventListener("click",()=>wrap.remove());
    const first = wrap.querySelector("button,input"); if(first) first.focus();
    return wrap;
  }
  function openCart() {
    const cart = getCart();
    if (!cart.length) { openModal(`<div class="modal-head"><div><p class="eyebrow">SUA SACOLA</p><h2 id="modalTitle">Ainda está vazia.</h2></div><button class="icon-button" data-modal-close aria-label="Fechar">×</button></div><p>Tem muita história esperando por você no catálogo.</p><div class="modal-actions"><button class="button button-dark" data-modal-close>Continuar explorando</button></div>`); return; }
    const lines = cart.map((item,i)=>{const f=films.find(x=>x.id===item.id);return `<div class="cart-line"><div><strong>${escapeHTML(f.title)}</strong><small>${item.kind==="aluguel"?"Aluguel por 7 dias":"Compra digital / DVD"}</small><button type="button" class="text-button" data-remove-cart="${i}" style="border:0;background:none;padding:3px 0;color:#9c4e39;text-decoration:underline;font-size:.75rem">Remover</button></div><strong>${money(item.kind==="aluguel"?f.rent:f.buy)}</strong></div>`;}).join("");
    const total = cart.reduce((sum,item)=>{const f=films.find(x=>x.id===item.id);return sum+(item.kind==="aluguel"?f.rent:f.buy);},0);
    const wrap = openModal(`<div class="modal-head"><div><p class="eyebrow">SUA SACOLA</p><h2 id="modalTitle">Uma sessão começa aqui.</h2></div><button class="icon-button" data-modal-close aria-label="Fechar">×</button></div><div>${lines}</div><div class="data-row"><strong>Total</strong><strong class="amount">${money(total)}</strong></div><p>Checkout demonstrativo. Nenhum pagamento real será feito.</p><div class="modal-actions"><button class="button button-light" data-modal-close>Continuar vendo</button><button class="button button-dark" id="checkoutButton">Confirmar pedido ↗</button></div>`);
    wrap.querySelectorAll("[data-remove-cart]").forEach(btn=>btn.addEventListener("click",()=>{const c=getCart();c.splice(Number(btn.dataset.removeCart),1);saveCart(c);wrap.remove();openCart();}));
    wrap.querySelector("#checkoutButton").addEventListener("click",()=>checkout(wrap));
  }
  function checkout(wrap) {
    const cart=getCart(), cards=getCards();
    if (!cards.length) {
      wrap.querySelector(".modal").innerHTML = `<div class="modal-head"><div><p class="eyebrow">SÓ MAIS UMA COISA</p><h2 id="modalTitle">Como prefere pagar?</h2></div><button class="icon-button" data-modal-close aria-label="Fechar">×</button></div><p>Cadastre um método fictício de pagamento antes de concluir. Você pode usar qualquer número de cartão de teste.</p><div class="modal-actions"><a class="button button-dark" href="payments.html">Cadastrar pagamento</a><button class="button button-light" data-modal-close>Voltar à sacola</button></div>`;
      wrap.querySelector("[data-modal-close]").addEventListener("click",()=>wrap.remove()); return;
    }
    const now=new Date();
    const orders=getOrders();
    cart.forEach((item,index)=>{const f=films.find(x=>x.id===item.id);orders.unshift({orderId:`LW-${Date.now().toString().slice(-6)}-${index+1}`,filmId:f.id,kind:item.kind,date:now.toISOString(),due:new Date(now.getTime()+7*86400000).toISOString(),status:item.kind==="aluguel"?"Aguardando retirada":"Compra confirmada",price:item.kind==="aluguel"?f.rent:f.buy});});
    saveOrders(orders);saveCart([]);
    wrap.querySelector(".modal").innerHTML = `<div class="modal-head"><div><p class="eyebrow">PEDIDO CONFIRMADO</p><h2 id="modalTitle">Sua próxima sessão já tem endereço.</h2></div><button class="icon-button" data-modal-close aria-label="Fechar">×</button></div><p>Pedido registrado com sucesso no protótipo. Para itens em DVD, retire em até <strong>7 dias</strong> no endereço fictício:</p><div class="panel"><strong>Lost Wild — Arquivo de Cinema</strong><br>CLS 214, Bloco C, Loja 08<br>Asa Sul · Brasília — DF<br><span class="field-hint">Seg–Sáb, 10h às 19h · leve o código do pedido</span></div><p>Pedidos de aluguel devem ser devolvidos em 7 dias. As regras de atraso aparecem na área de multas.</p><div class="modal-actions"><a class="button button-dark" href="profile.html">Ver meus pedidos</a><button class="button button-light" data-modal-close>Fechar</button></div>`;
    wrap.querySelector("[data-modal-close]").addEventListener("click",()=>wrap.remove());
  }

  // Profile
  const orderList=document.querySelector("#orderList");
  if(orderList) {
    const orders=getOrders(), active=orders.filter(o=>o.kind==="aluguel"&&o.status!=="Devolvido");
    document.querySelector("#profileName").textContent=user.name;
    document.querySelector("#profileEmail").textContent=user.email;
    document.querySelector("#statRentals").textContent=active.length;
    document.querySelector("#statWishlist").textContent=getWishlist().length;
    document.querySelector("#statFines").textContent=money(getFines().filter(f=>f.status==="pendente").reduce((s,f)=>s+f.amount,0));
    orderList.innerHTML=orders.length?orders.map(o=>{const f=films.find(x=>x.id===o.filmId);return `<div class="data-row"><div class="data-main"><strong>${escapeHTML(f.title)}</strong><span>${o.kind==="aluguel"?"Aluguel · ":"Compra · "}${dateText(o.date)} · ${escapeHTML(o.orderId)}</span>${o.kind==="aluguel"&&o.status!=="Devolvido"?`<span>Retirada/devolução prevista: ${dateText(o.due)}</span>`:""}</div><div style="text-align:right"><span class="status ${o.status==="Aguardando retirada"?"warning":""}">${escapeHTML(o.status)}</span><div class="amount" style="margin-top:7px">${money(o.price)}</div>${o.kind==="aluguel"&&o.status!=="Devolvido"?`<button class="button button-light" style="margin-top:8px;min-height:32px;padding:5px 9px;font-size:.72rem" data-return="${escapeHTML(o.orderId)}">Devolver DVD</button>`:""}</div></div>`;}).join(""):`<div class="empty-state">Sua estante ainda está vazia. Escolha um filme para começar.</div>`;
    orderList.querySelectorAll("[data-return]").forEach(btn=>btn.addEventListener("click",()=>{const list=getOrders();const item=list.find(o=>o.orderId===btn.dataset.return);if(item){item.status="Devolvido";saveOrders(list);toast("Devolução registrada. Obrigado por cuidar do acervo!");location.reload();}}));
    const wishlist=document.querySelector("#wishlistList"), wished=films.filter(f=>getWishlist().includes(f.id));
    wishlist.innerHTML=wished.length?wished.map(f=>`<div class="data-row"><div class="data-main"><strong>${escapeHTML(f.title)}</strong><span>${f.year} · ${escapeHTML(f.genre)}</span></div><button class="button button-light" data-wish-remove="${f.id}">Remover</button></div>`).join(""):`<p class="field-hint">Ainda não salvou nenhum filme. Use o coração no catálogo para guardar seus achados.</p>`;
    wishlist.querySelectorAll("[data-wish-remove]").forEach(btn=>btn.addEventListener("click",()=>{saveWishlist(getWishlist().filter(id=>id!==Number(btn.dataset.wishRemove)));location.reload();}));
  }

  // Fines and fair account restriction
  const fineRows=document.querySelector("#fineRows");
  if(fineRows) {
    const fines=getFines(), pending=fines.filter(f=>f.status==="pendente"), total=pending.reduce((s,f)=>s+f.amount,0);
    document.querySelector("#fineTotal").textContent=money(total);
    document.querySelector("#finePendingCount").textContent=pending.length;
    fineRows.innerHTML=fines.length?fines.map(f=>`<div class="data-row"><div class="data-main"><strong>${escapeHTML(f.description)}</strong><span>${escapeHTML(f.id)} · ${dateText(f.date)}</span></div><div style="text-align:right"><span class="status ${f.status==="pendente"?"warning":""}">${f.status==="pendente"?"Pendente":"Quitada"}</span><div class="amount" style="margin-top:6px">${money(f.amount)}</div>${f.status==="pendente"?`<button class="button button-dark" style="margin-top:8px;min-height:33px;padding:5px 10px;font-size:.73rem" data-pay-fine="${escapeHTML(f.id)}">Quitar multa</button>`:""}</div></div>`).join(""):`<p>Nenhuma multa registrada. Que bom!</p>`;
    fineRows.querySelectorAll("[data-pay-fine]").forEach(btn=>btn.addEventListener("click",()=>{if(!getCards().length){toast("Cadastre um método de pagamento antes de quitar multas.");location.href="payments.html";return;}const list=getFines();const f=list.find(x=>x.id===btn.dataset.payFine);f.status="quitada";f.paidAt=new Date().toISOString();saveFines(list);toast("Multa quitada no modo demonstrativo.");location.reload();}));
    const users=get("users")||[], myUser=users.find(u=>u.email===user.email);
    const policy=document.querySelector("#accountStatus");
    if(pending.length>=3 || total>=50) {
      myUser.banned=true; set("users",users);
      policy.innerHTML=`<span class="status warning">Conta bloqueada</span><p>Há ${pending.length} multas pendentes, totalizando ${money(total)}. Para evitar bloqueio indevido, o protótipo usa estes limites: 3 multas pendentes ou R$ 50,00 em aberto. Procure o atendimento para contestar ou regularizar.</p>`;
    } else {
      policy.innerHTML=`<span class="status">Conta ativa</span><p>Seu acesso permanece ativo. A conta só é bloqueada automaticamente no protótipo com 3 multas pendentes ou saldo pendente igual ou superior a R$ 50,00. Você pode contestar uma cobrança antes de pagar.</p>`;
    }
    const dispute=document.querySelector("#disputeForm");
    dispute.addEventListener("submit",e=>{e.preventDefault();const desc=dispute.querySelector("textarea").value.trim();if(desc.length<10){toast("Explique um pouco melhor sua contestação.");return;}toast("Contestação registrada no protótipo. Nossa equipe fictícia retornaria por e-mail.");dispute.reset();});
  }

  // Payment methods
  const cardList=document.querySelector("#cardList");
  if(cardList) {
    const renderCards=()=>{const cards=getCards();cardList.innerHTML=cards.length?cards.map(c=>`<div class="payment-card"><div class="payment-brand">${escapeHTML(c.brand)}</div><div class="payment-info"><strong>${escapeHTML(c.label)} •••• ${escapeHTML(c.last4)}</strong><span>${escapeHTML(c.holder)} · validade ${escapeHTML(c.expiry)}</span></div><button class="button button-light" data-delete-card="${escapeHTML(c.id)}">Remover</button></div>`).join(""):`<div class="empty-state">Nenhum método cadastrado. Adicione um cartão fictício para concluir pedidos de teste.</div>`;
      cardList.querySelectorAll("[data-delete-card]").forEach(btn=>btn.addEventListener("click",()=>{saveCards(getCards().filter(c=>c.id!==btn.dataset.deleteCard));renderCards();toast("Método removido.");}));};
    renderCards();
    document.querySelector("#paymentForm").addEventListener("submit",e=>{e.preventDefault();const form=e.currentTarget, holder=form.holder.value.trim(), number=form.cardNumber.value.replace(/\D/g,""), expiry=form.expiry.value.trim(), cvv=form.cvv.value.trim();
      if(holder.length<2){toast("Informe o nome do titular.");return;}
      if(number.length<13||number.length>19){toast("Use um número fictício de 13 a 19 dígitos.");return;}
      if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)){toast("Validade no formato MM/AA.");return;}
      if(!/^\d{3,4}$/.test(cvv)){toast("CVV fictício deve ter 3 ou 4 dígitos.");return;}
      const cards=getCards();cards.push({id:`CARD-${Date.now()}`,brand:"TESTE",label:"Cartão demonstrativo",last4:number.slice(-4),holder,expiry});saveCards(cards);form.reset();renderCards();toast("Método fictício salvo com segurança apenas no navegador.");
    });
  }

  // About page uses shared navigation only.
})();