(() => {
  "use strict";
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const STORE = "lostwild.demo.v1";
  const ADDRESS = "Rua das Acácias, 127 — Asa Norte, Brasília, DF";
  const movies = [
    {id:1,title:"Paris, Texas",year:1984,director:"Wim Wenders",genre:"Drama",runtime:"2h 25min",format:["dvd","online"],rent:8,buy:29,tag:"CINEMA DE AUTOR",desc:"Um homem reaparece no deserto e tenta reconstruir os laços com a família. Uma viagem silenciosa sobre memória, distância e pertencimento.",color:"#9d5c42",image:"photo-1485846234645-a62644f84728"},
    {id:2,title:"In the Mood for Love",year:2000,director:"Wong Kar-wai",genre:"Romance",runtime:"1h 38min",format:["dvd","online"],rent:9,buy:34,tag:"ESSENCIAL",desc:"Dois vizinhos descobrem uma conexão inesperada em meio a corredores estreitos, silêncios e encontros adiados.",color:"#7d3025",image:"photo-1517604931442-7e0c8ed2963c"},
    {id:3,title:"Stalker",year:1979,director:"Andrei Tarkovsky",genre:"Ficção científica",runtime:"2h 43min",format:["dvd"],rent:10,buy:39,tag:"CÓPIA RARA",desc:"Três homens atravessam uma paisagem proibida em busca de um lugar que promete realizar desejos.",color:"#355b4a",image:"photo-1440404653325-ab127d49abc1"},
    {id:4,title:"Chungking Express",year:1994,director:"Wong Kar-wai",genre:"Crime",runtime:"1h 42min",format:["dvd","online"],rent:8,buy:32,tag:"CULT FAVORITO",desc:"Dois policiais solitários cruzam caminhos numa Hong Kong elétrica, colorida e cheia de encontros improváveis.",color:"#1e6660",image:"photo-1489599849927-2ee91cede3ba"},
    {id:5,title:"The 400 Blows",year:1959,director:"François Truffaut",genre:"Drama",runtime:"1h 39min",format:["dvd","online"],rent:7,buy:27,tag:"NOUVELLE VAGUE",desc:"Um retrato delicado da infância inquieta de um garoto que tenta encontrar seu lugar no mundo.",color:"#a88d5c",image:"photo-1478720568477-152d9b164e26"},
    {id:6,title:"Suspiria",year:1977,director:"Dario Argento",genre:"Terror",runtime:"1h 39min",format:["dvd"],rent:9,buy:33,tag:"MEIA-NOITE",desc:"Uma jovem chega a uma academia de dança onde a beleza das cores esconde uma força sinistra.",color:"#8f2019",image:"photo-1509248961158-e54f6934749c"},
    {id:7,title:"The Apartment",year:1960,director:"Billy Wilder",genre:"Comédia",runtime:"2h 5min",format:["dvd","online"],rent:7,buy:25,tag:"CLÁSSICO",desc:"Um funcionário empresta seu apartamento aos chefes e acaba envolvido numa história de afeto e solidão.",color:"#667e72",image:"photo-1514306191717-452ec28c7814"},
    {id:8,title:"Brazil",year:1985,director:"Terry Gilliam",genre:"Ficção científica",runtime:"2h 23min",format:["dvd","online"],rent:9,buy:31,tag:"DISTOPIA",desc:"Um burocrata sonhador tenta escapar de um sistema absurdo, opressor e cheio de pequenas engrenagens.",color:"#b16a3e",image:"photo-1518929458119-e5bf444c30f4"},
    {id:9,title:"The Seventh Seal",year:1957,director:"Ingmar Bergman",genre:"Drama",runtime:"1h 36min",format:["dvd"],rent:8,buy:30,tag:"PATRIMÔNIO",desc:"Um cavaleiro desafia a Morte para uma partida de xadrez enquanto procura sentido em um mundo em crise.",color:"#7b817a",image:"photo-1518709268805-4e9042af9f23"},
    {id:10,title:"Rear Window",year:1954,director:"Alfred Hitchcock",genre:"Suspense",runtime:"1h 52min",format:["dvd","online"],rent:8,buy:29,tag:"SUSPENSE",desc:"Preso em casa, um fotógrafo passa a observar seus vizinhos — até suspeitar que testemunhou um crime.",color:"#416d78",image:"photo-1500530855697-b586d89ba3ee"},
    {id:11,title:"Wings of Desire",year:1987,director:"Wim Wenders",genre:"Fantasia",runtime:"2h 8min",format:["dvd","online"],rent:9,buy:32,tag:"POESIA VISUAL",desc:"Um anjo observa a vida cotidiana de Berlim e começa a desejar as imperfeições de ser humano.",color:"#8a8a7b",image:"photo-1470252649378-9c29740c9fa8"},
    {id:12,title:"Cléo from 5 to 7",year:1962,director:"Agnès Varda",genre:"Drama",runtime:"1h 30min",format:["dvd"],rent:8,buy:28,tag:"NOUVELLE VAGUE",desc:"Em tempo quase real, uma cantora atravessa Paris enquanto espera notícias que podem mudar sua vida.",color:"#d0a45c",image:"photo-1497366754035-f200968a6e72"},
    {id:13,title:"Akira",year:1988,director:"Katsuhiro Otomo",genre:"Animação",runtime:"2h 4min",format:["dvd","online"],rent:9,buy:35,tag:"ANIME CLÁSSICO",desc:"Em Neo-Tóquio, uma experiência secreta desencadeia poderes perigosos e uma corrida contra o caos.",color:"#b83e2c",image:"photo-1519608487953-e999c86e7455"},
    {id:14,title:"The Thing",year:1982,director:"John Carpenter",genre:"Terror",runtime:"1h 49min",format:["dvd","online"],rent:9,buy:34,tag:"TERROR CÓSMICO",desc:"Uma equipe isolada na Antártida enfrenta uma criatura capaz de imitar qualquer forma de vida.",color:"#8eb3b7",image:"photo-1518837695005-2083093ee35b"},
    {id:15,title:"Do the Right Thing",year:1989,director:"Spike Lee",genre:"Drama",runtime:"2h",format:["dvd","online"],rent:8,buy:30,tag:"CINEMA SOCIAL",desc:"Num dia quente no Brooklyn, tensões antigas vêm à superfície em uma comunidade vibrante.",color:"#b54a2d",image:"photo-1519608487953-e999c86e7455"},
    {id:16,title:"The Princess Bride",year:1987,director:"Rob Reiner",genre:"Aventura",runtime:"1h 38min",format:["dvd","online"],rent:7,buy:27,tag:"FAVORITO DE CASA",desc:"Uma aventura de capa e espada, humor e romance contada como uma história que passa de geração em geração.",color:"#597b56",image:"photo-1470252649378-9c29740c9fa8"},
    {id:17,title:"Eternal Sunshine",year:2004,director:"Michel Gondry",genre:"Romance",runtime:"1h 48min",format:["dvd","online"],rent:9,buy:32,tag:"CORAÇÃO PARTIDO",desc:"Um casal tenta apagar as lembranças de um relacionamento e descobre o que vale a pena preservar.",color:"#528e91",image:"photo-1470770841072-f978cf4d019e"},
    {id:18,title:"The Wicker Man",year:1973,director:"Robin Hardy",genre:"Terror",runtime:"1h 28min",format:["dvd"],rent:9,buy:36,tag:"CÓPIA RARA",desc:"Um policial chega a uma ilha remota para investigar um desaparecimento e encontra costumes inquietantes.",color:"#b5a04f",image:"photo-1500534623283-312aede485b7"},
    {id:19,title:"Cinema Paradiso",year:1988,director:"Giuseppe Tornatore",genre:"Drama",runtime:"2h 4min",format:["dvd","online"],rent:8,buy:30,tag:"CARTA DE AMOR",desc:"Um cineasta relembra a infância e a amizade com o projecionista de seu pequeno cinema local.",color:"#a66b3e",image:"photo-1489599849927-2ee91cede3ba"},
    {id:20,title:"House",year:1977,director:"Nobuhiko Obayashi",genre:"Fantasia",runtime:"1h 28min",format:["dvd"],rent:10,buy:37,tag:"EXPERIMENTAL",desc:"Um grupo de garotas visita uma casa de campo onde o horror se mistura a uma imaginação visual sem limites.",color:"#9b3d55",image:"photo-1509248961158-e54f6934749c"}
  ];
  const posterImages = {
    1:"photo-1485846234645-a62644f84728",2:"photo-1517604931442-7e0c8ed2963c",3:"photo-1440404653325-ab127d49abc1",
    4:"photo-1489599849927-2ee91cede3ba",5:"photo-1478720568477-152d9b164e27",6:"photo-1509248961158-e54f6934749c",
    7:"photo-1514306191717-452ec28c7814",8:"photo-1518929458119-e5bf444c30f4",9:"photo-1518709268805-4e9042af9f23",
    10:"photo-1500530855697-b586d89ba3ee",11:"photo-1470252649378-9c29740c9fa8",12:"photo-1497366754035-f200968a6e72",
    13:"photo-1519608487953-e999c86e7455",14:"photo-1518837695005-2083093ee35b",15:"photo-1519608487953-e999c86e7455",
    16:"photo-1470252649378-9c29740c9fa8",17:"photo-1470770841072-f978cf4d019e",18:"photo-1500534623283-312aede485b7",
    19:"photo-1489599849927-2ee91cede3ba",20:"photo-1509248961158-e54f6934749c"
  };
  const defaultState = () => ({user:null,cart:[],rentals:[],fines:[],cards:[],wishlist:[],requests:[],banned:false});
  let state = loadState();
  let activeFormat = "all";
  let isRegister = false;

  function loadState() {
    try { return {...defaultState(), ...JSON.parse(localStorage.getItem(STORE) || "{}")}; }
    catch { return defaultState(); }
  }
  function saveState() { localStorage.setItem(STORE, JSON.stringify(state)); }
  function toast(message) { const node=$("#toast"); node.textContent=message; node.hidden=false; clearTimeout(toast.timer); toast.timer=setTimeout(()=>node.hidden=true,3400); }
  function safe(value) { return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch])); }
  function posterUrl(movie) { return `https://images.unsplash.com/${posterImages[movie.id] || movie.image}?auto=format&fit=crop&w=700&q=80`; }
  function posterMarkup(movie, compact=false) {
    return `<div class="poster-art" style="background-image:linear-gradient(145deg,${movie.color}55,transparent 55%),url('${posterUrl(movie)}')"></div>`;
  }
  function showAuth(register=false) {
    isRegister=register; $("#authScreen").hidden=false; $("#appScreen").hidden=true;
    $("#loginTab").classList.toggle("active",!register); $("#registerTab").classList.toggle("active",register);
    $("#loginTab").setAttribute("aria-selected",String(!register)); $("#registerTab").setAttribute("aria-selected",String(register));
    $("#authTitle").textContent=register?"Vamos abrir sua estante.":"Que bom ter você aqui.";
    $("#authSubtitle").textContent=register?"Crie sua conta para reservar os filmes que encontrar.":"Entre para encontrar seu próximo filme favorito.";
    $("#authName").hidden=!register; $("#nameLabel").hidden=!register;
    $("#authName").required=register; $("#authPassword").autocomplete=register?"new-password":"current-password";
    $("#passwordHint").textContent=register?"Use pelo menos 8 caracteres, incluindo uma letra e um número.":"Use pelo menos 8 caracteres. Nunca reutilize uma senha importante neste protótipo.";
    $("#authSubmit").innerHTML=register?"Criar minha conta <span aria-hidden=\"true\">↗</span>":"Entrar no acervo <span aria-hidden=\"true\">↗</span>";
    $("#authError").hidden=true;
  }
  function enterApp() { $("#authScreen").hidden=true; $("#appScreen").hidden=false; updateNav(); renderFilms(); renderProfile(); renderFines(); renderPayments(); renderCartCount(); showView("home"); }
  function logout() { state.user=null; saveState(); showAuth(false); $("#authPassword").value=""; toast("Você saiu da sua conta neste navegador."); }
  function updateNav(){ $("#fineNavCount").textContent=state.fines.filter(f=>!f.paid).length; }
  function showView(view) {
    const valid=["home","profile","fines","payments","about"];
    if(!valid.includes(view)) view="home";
    $$(".page-view").forEach(el=>el.hidden=true);
    const target=$("#page"+view.charAt(0).toUpperCase()+view.slice(1)); if(target) target.hidden=false;
    $$(".nav-link").forEach(el=>el.classList.toggle("active",el.dataset.view===view));
    $("#mobileNav").classList.add("hidden"); $("#mobileMenu").setAttribute("aria-expanded","false");
    if(view==="profile")renderProfile(); if(view==="fines")renderFines(); if(view==="payments")renderPayments();
    window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
  }
  function renderFilms() {
    const query=$("#searchInput").value.trim().toLocaleLowerCase("pt-BR"), genre=$("#genreFilter").value;
    const filtered=movies.filter(m=>(`${m.title} ${m.director} ${m.year} ${m.genre}`.toLocaleLowerCase("pt-BR").includes(query))&&(genre==="all"||m.genre===genre)&&(activeFormat==="all"||m.format.includes(activeFormat)));
    $("#resultsCount").textContent=`${filtered.length} FILME${filtered.length===1?"":"S"} ENCONTRADO${filtered.length===1?"":"S"}`;
    $("#emptyResults").classList.toggle("hidden",filtered.length>0);
    $("#filmGrid").innerHTML=filtered.map(m=>`<article class="film-card" data-id="${m.id}">
      <button class="poster block w-full text-left" data-detail="${m.id}" aria-label="Ver detalhes de ${safe(m.title)}">
        ${posterMarkup(m)}<span class="poster-index">${String(m.id).padStart(2,"0")} / LW</span><span class="poster-format">${m.format.includes("dvd")?"DVD":"ONLINE"}</span>
        <span class="poster-copy"><span class="poster-year">${m.year} · ${safe(m.genre.toUpperCase())}</span><h3>${safe(m.title)}</h3></span>
      </button>
      <button class="heart-btn" data-wish="${m.id}" aria-label="${state.wishlist.includes(m.id)?"Remover":"Adicionar"} ${safe(m.title)} ${state.wishlist.includes(m.id)?"da":"à"} lista de desejos" aria-pressed="${state.wishlist.includes(m.id)}">♡</button>
      <div class="film-meta"><p>${safe(m.director)}</p><span class="film-price">${money(m.rent)}</span></div>
      <div class="film-actions"><button class="rent-btn" data-add="${m.id}" data-kind="Aluguel">Alugar</button><button data-add="${m.id}" data-kind="Compra">Comprar ${money(m.buy)}</button></div>
    </article>`).join("");
  }
  function filmById(id){return movies.find(m=>m.id===Number(id));}
  function openDetail(id){
    const m=filmById(id); if(!m)return;
    $("#filmDetail").innerHTML=`<img class="detail-poster" src="${posterUrl(m)}" alt="Imagem ilustrativa para ${safe(m.title)}"><div class="detail-copy"><p class="eyebrow">${safe(m.tag)} · ${m.year}</p><h2 class="mt-3">${safe(m.title)}</h2><p class="mt-3">${safe(m.desc)}</p><div class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-paper/50"><span>${safe(m.director)}</span><span>${safe(m.genre)}</span><span>${m.runtime}</span></div><div class="detail-options"><button data-add="${m.id}" data-kind="Aluguel">Alugar DVD / online<strong>${money(m.rent)} · 7 dias</strong></button><button data-add="${m.id}" data-kind="Compra">Comprar<strong>${money(m.buy)} · ficar com o filme</strong></button></div><p class="mt-5 text-xs">DVDs para retirada em até 2 dias: ${ADDRESS}.</p></div>`;
    $("#filmDialog").showModal();
  }
  function addToCart(id,kind) {
    const m=filmById(id); if(!m)return;
    if(state.banned&&kind==="Aluguel"){toast("Novos aluguéis estão suspensos. Consulte a seção Multas.");return;}
    const key=`${m.id}-${kind}`;
    const existing=state.cart.find(x=>x.key===key);
    if(existing)existing.qty+=1;else state.cart.push({key,id:m.id,kind,qty:1});
    saveState();renderCartCount();toast(`${m.title} foi adicionado à sacola.`);
    if($("#filmDialog").open)$("#filmDialog").close();
  }
  function renderCartCount(){const count=state.cart.reduce((n,i)=>n+i.qty,0);$("#cartCount").textContent=count;$("#cartDialogCount").textContent=`${count} ITEM${count===1?"":"S"}`;}
  function openCart(){
    $("#cartItems").innerHTML=state.cart.length?state.cart.map(item=>{const m=filmById(item.id);const price=item.kind==="Compra"?m.buy:m.rent;return `<div class="cart-item"><img class="cart-thumb" src="${posterUrl(m)}" alt=""><div class="cart-item-copy"><h3>${safe(m.title)}</h3><p>${item.kind} · ${item.kind==="Aluguel"?"7 dias de acesso":"compra demonstrativa"} · ${money(price)} × ${item.qty}</p></div><strong class="text-sm">${money(price*item.qty)}</strong><button class="remove-item" data-remove="${safe(item.key)}" aria-label="Remover ${safe(m.title)}">Remover</button></div>`;}).join(""):`<div class="py-10 text-center"><p class="font-serif text-2xl">Sua sacola está vazia.</p><p class="mt-2 text-sm text-paper/50">Tem muita história esperando por você.</p></div>`;
    const total=state.cart.reduce((sum,item)=>{const m=filmById(item.id);return sum+(item.kind==="Compra"?m.buy:m.rent)*item.qty;},0);
    $("#cartTotal").textContent=money(total);$("#checkoutButton").disabled=!state.cart.length;$("#checkoutButton").classList.toggle("opacity-40",!state.cart.length);$("#cartDialog").showModal();
  }
  function checkout(){
    if(!state.cart.length)return;
    if(!state.cards.length){$("#cartDialog").close();showView("payments");toast("Adicione um método de pagamento fictício antes de concluir.");return;}
    const now=Date.now();
    state.cart.forEach(item=>{const m=filmById(item.id);for(let i=0;i<item.qty;i++)state.rentals.unshift({id:crypto.randomUUID?crypto.randomUUID():String(now+Math.random()),movieId:m.id,title:m.title,kind:item.kind,status:item.kind==="Aluguel"?"Reservado":"Comprado",date:now,due:item.kind==="Aluguel"?now+7*86400000:null,paid:item.kind==="Compra",pickup:item.kind==="Aluguel"?ADDRESS:null});});
    state.cart=[];saveState();$("#cartDialog").close();renderCartCount();renderProfile();toast(`Pedido confirmado! Retirada disponível por 2 dias em ${ADDRESS}`);showView("profile");
  }
  function toggleWish(id){
    id=Number(id);const m=filmById(id);if(state.wishlist.includes(id)){state.wishlist=state.wishlist.filter(n=>n!==id);toast("Removido da sua lista de desejos.");}else{state.wishlist.push(id);toast(`${m.title} salvo na sua lista de desejos.`);}saveState();renderFilms();renderProfile();
  }
  function renderProfile(){
    if(!state.user)return;
    $("#profileEmail").textContent=state.user.email;$("#activeRentals").textContent=state.rentals.filter(r=>r.status==="Reservado"||r.status==="Alugado").length;
    $("#reservationCount").textContent=state.rentals.filter(r=>r.status==="Reservado").length;$("#wishlistCount").textContent=state.wishlist.length;
    $("#rentalList").innerHTML=state.rentals.length?state.rentals.map(r=>`<div class="list-row"><div><h3>${safe(r.title)}</h3><p>${safe(r.kind)} · ${new Date(r.date).toLocaleDateString("pt-BR")}${r.due?` · Devolver até ${new Date(r.due).toLocaleDateString("pt-BR")}`:""}</p>${r.pickup?`<p>Retirada: ${ADDRESS} · disponível por 2 dias após confirmação</p>`:""}</div><div class="text-right"><span class="status-tag ${r.status==="Reservado"?"":"warn"}">${safe(r.status.toUpperCase())}</span>${r.status==="Reservado"?`<button class="small-action mt-3 block" data-picked="${safe(r.id)}">Confirmar retirada</button>`:""}</div></div>`).join(""):`<div class="py-12 text-center"><p class="font-serif text-2xl">Sua estante ainda está vazia.</p><button class="small-action mt-3" data-view="home">Encontrar um filme</button></div>`;
  }
  function renderFines(){
    const pending=state.fines.filter(f=>!f.paid),paid=state.fines.filter(f=>f.paid);
    $("#pendingFineTotal").textContent=money(pending.reduce((s,f)=>s+f.amount,0));$("#paidFineTotal").textContent=money(paid.reduce((s,f)=>s+f.amount,0));
    const overdue=state.rentals.filter(r=>r.status==="Alugado"&&r.due<Date.now()).length;
    state.banned=pending.some(f=>Date.now()-f.created>14*86400000)||overdue>=3;saveState();
    $("#accountStatus").textContent=state.banned?"Restrita":"Regular";$("#accountStatusNote").textContent=state.banned?"Novos aluguéis suspensos":"Sem restrições";$("#fineNavCount").textContent=pending.length;
    $("#fineList").innerHTML=state.fines.length?state.fines.map(f=>`<div class="list-row"><div><h3>${safe(f.reason)}</h3><p>${new Date(f.created).toLocaleDateString("pt-BR")} · ${safe(f.note||"Cobrança demonstrativa")}</p></div><div class="text-right"><strong class="block text-sm">${money(f.amount)}</strong><span class="status-tag ${f.paid?"":"warn"} mt-2">${f.paid?"QUITADA":"PENDENTE"}</span>${!f.paid?`<button class="small-action mt-3 block" data-payfine="${safe(f.id)}">Quitar (demo)</button><button class="small-action mt-2 block" data-dispute="${safe(f.id)}">Contestar</button>`:""}</div></div>`).join(""):`<div class="py-12 text-center"><p class="font-serif text-2xl">Nenhuma multa registrada.</p><p class="mt-2 text-sm text-paper/50">Continue aproveitando os filmes sem preocupação.</p></div>`;
    updateNav();
  }
  function renderPayments(){
    $("#paymentCount").textContent=`${state.cards.length} CARTÃO${state.cards.length===1?"":"ÕES"}`;
    $("#paymentList").innerHTML=state.cards.length?state.cards.map(c=>`<div class="list-row"><div class="flex items-center gap-4"><div class="grid h-12 w-16 place-items-center border border-white/15 font-mono text-xs text-mist">CARD</div><div><h3>${safe(c.label||"Meu cartão")}</h3><p>•••• •••• •••• ${safe(c.last4)} · ${safe(c.expiry)}</p></div></div><button class="small-action" data-deletecard="${safe(c.id)}">Remover</button></div>`).join(""):`<p class="py-10 text-center text-sm text-paper/50">Nenhum método cadastrado.</p>`;
  }
  function submitAuth(event){
    event.preventDefault();const email=$("#authEmail").value.trim().toLowerCase(),password=$("#authPassword").value,name=$("#authName").value.trim();const error=$("#authError");
    const fail=message=>{error.textContent=message;error.hidden=false;};
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){fail("Informe um e-mail válido.");return;}
    if(password.length<8){fail("A senha precisa ter pelo menos 8 caracteres.");return;}
    if(isRegister){
      if(name.length<2){fail("Informe seu nome (pelo menos 2 caracteres).");return;}
      if(!/[A-Za-zÀ-ÿ]/.test(password)||!/[0-9]/.test(password)){fail("Inclua ao menos uma letra e um número na senha.");return;}
      if(state.user&&state.user.email===email){fail("Este e-mail já está conectado neste protótipo. Entre em vez de criar outra conta.");return;}
      state.user={name,email,passwordDemo:password};saveState();enterApp();toast(`Conta demonstrativa criada. Olá, ${name}!`);
    }else{
      if(state.user&&state.user.email===email&&state.user.passwordDemo===password){enterApp();toast(`Bem-vinda(o) de volta, ${state.user.name}.`);return;}
      fail("Não encontramos essa combinação nesta sessão do navegador. Crie uma conta ou use o login demo do Google.");
    }
  }
  function googleDemo(){state.user={name:"Visitante Lost Wild",email:"visitante@lostwild.demo",passwordDemo:null,provider:"google-demo"};saveState();enterApp();toast("Sessão demonstrativa iniciada. Login real do Google não está conectado.");}
  function addFine(reason,amount,note=""){state.fines.unshift({id:String(Date.now()+Math.random()),reason,amount,created:Date.now(),paid:false,note});saveState();renderFines();}
  function init(){
    $("#loginTab").addEventListener("click",()=>showAuth(false));$("#registerTab").addEventListener("click",()=>showAuth(true));
    $("#authForm").addEventListener("submit",submitAuth);$("#googleLogin").addEventListener("click",googleDemo);
    $("#togglePassword").addEventListener("click",()=>{const input=$("#authPassword"),visible=input.type==="password";input.type=visible?"text":"password";$("#togglePassword").textContent=visible?"Ocultar":"Mostrar";});
    $("#searchInput").addEventListener("input",renderFilms);$("#genreFilter").addEventListener("change",renderFilms);
    $$(".filter-pill").forEach(b=>b.addEventListener("click",()=>{activeFormat=b.dataset.format;$$(".filter-pill").forEach(x=>x.classList.toggle("active",x===b));renderFilms();}));
    document.addEventListener("click",event=>{
      const view=event.target.closest("[data-view]");if(view){event.preventDefault();showView(view.dataset.view);}
      const detail=event.target.closest("[data-detail]");if(detail)openDetail(detail.dataset.detail);
      const add=event.target.closest("[data-add]");if(add)addToCart(add.dataset.add,add.dataset.kind);
      const wish=event.target.closest("[data-wish]");if(wish)toggleWish(wish.dataset.wish);
      const remove=event.target.closest("[data-remove]");if(remove){state.cart=state.cart.filter(i=>i.key!==remove.dataset.remove);saveState();renderCartCount();openCart();}
      const picked=event.target.closest("[data-picked]");if(picked){const rental=state.rentals.find(r=>r.id===picked.dataset.picked);if(rental){rental.status="Alugado";rental.pickup=null;saveState();renderProfile();toast("Retirada registrada. Prazo de devolução: 7 dias.");}}
      const payfine=event.target.closest("[data-payfine]");if(payfine){const f=state.fines.find(x=>x.id===payfine.dataset.payfine);if(f){f.paid=true;saveState();renderFines();toast("Multa marcada como quitada (simulação).");}}
      const dispute=event.target.closest("[data-dispute]");if(dispute){const f=state.fines.find(x=>x.id===dispute.dataset.dispute);if(f){const reason=prompt("Conte brevemente por que deseja contestar esta cobrança:");if(reason&&reason.trim()){f.note=`Contestação aberta: ${reason.trim()}`;saveState();renderFines();toast("Contestação registrada. A cobrança deve ficar em revisão.");}}}
      const del=event.target.closest("[data-deletecard]");if(del){state.cards=state.cards.filter(c=>c.id!==del.dataset.deletecard);saveState();renderPayments();toast("Método fictício removido.");}
    });
    $("#openCart").addEventListener("click",openCart);$("#checkoutButton").addEventListener("click",checkout);
    $("#mobileMenu").addEventListener("click",()=>{const nav=$("#mobileNav"),open=nav.classList.toggle("hidden")===false;$("#mobileMenu").setAttribute("aria-expanded",String(open));});
    ["logoutButton","profileLogout","footerLogout","mobileLogout"].forEach(id=>$("#"+id).addEventListener("click",logout));
    $("#wishForm").addEventListener("submit",e=>{e.preventDefault();const title=$("#wishTitle").value.trim();if(title.length<2){toast("Escreva o nome de um filme.");return;}state.requests.unshift({title,date:Date.now()});saveState();$("#wishTitle").value="";toast(`Pedido recebido: “${title}”. Obrigado por ajudar nosso acervo!`);});
    $("#fineHelp").addEventListener("click",()=>toast("Use “Contestar” no item correspondente. Em um serviço real, a equipe revisaria a cobrança antes de qualquer bloqueio."));
    $("#paymentForm").addEventListener("submit",e=>{
      e.preventDefault();const name=$("#cardName").value.trim(),digits=$("#cardNumber").value.replace(/\D/g,""),expiry=$("#cardExpiry").value.trim(),label=$("#cardLabel").value.trim();
      if(digits.length!==16){toast("Digite 16 dígitos fictícios. Não use cartão real.");return;}
      if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)){toast("Use a validade no formato MM/AA.");return;}
      state.cards.push({id:String(Date.now()),name,label:label||"Meu cartão",last4:digits.slice(-4),expiry});saveState();e.target.reset();renderPayments();toast("Cartão fictício cadastrado. Nenhuma cobrança foi feita.");
    });
    $("#cardNumber").addEventListener("input",e=>{const digits=e.target.value.replace(/\D/g,"").slice(0,16);e.target.value=digits.replace(/(.{4})/g,"$1 ").trim();});
    $("#cardExpiry").addEventListener("input",e=>{let v=e.target.value.replace(/\D/g,"").slice(0,4);if(v.length>2)v=v.slice(0,2)+"/"+v.slice(2);e.target.value=v;});
    $("#filmDialog").addEventListener("click",e=>{if(e.target===$("#filmDialog"))$("#filmDialog").close();});
    $("#cartDialog").addEventListener("click",e=>{if(e.target===$("#cartDialog"))$("#cartDialog").close();});
    if(state.user)enterApp();else showAuth(false);
  }
  init();
})();