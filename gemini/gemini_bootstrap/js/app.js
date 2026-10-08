/**
 * LOST WILD - CINEMA ARCHIVE & RENTAL SYSTEM
 * Bootstrap 5 Version Vanilla JS State Controller
 */

// 1. BANCO DE DADOS LOCAL (20 FILMES CLÁSSICOS & RAROS)
const MOVIES_DATABASE = [
  {
    id: 1,
    title: "Chungking Express",
    director: "Wong Kar-wai",
    year: 1994,
    genre: "Romance",
    rating: "★ 4.9",
    rentPrice: 12.00,
    buyPrice: 48.00,
    rarity: "RARO - CRITERION",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80",
    synopsis: "Duas histórias de amor melancólicas e interligadas no coração vibrante e noturno de Hong Kong."
  },
  {
    id: 2,
    title: "In the Mood for Love",
    director: "Wong Kar-wai",
    year: 2000,
    genre: "Romance",
    rating: "★ 5.0",
    rentPrice: 14.00,
    buyPrice: 55.00,
    rarity: "RESTAURADO 4K",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80",
    synopsis: "Dois vizinhos descobrem que seus respectivos cônjuges estão tendo um caso secreto."
  },
  {
    id: 3,
    title: "Stalker",
    director: "Andrei Tarkovsky",
    year: 1979,
    genre: "Ficção Científica",
    rating: "★ 4.8",
    rentPrice: 10.00,
    buyPrice: 42.00,
    rarity: "SOVIÉTICO RARO",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80",
    synopsis: "Um guia conduz dois homens através de uma área misteriosa conhecida como 'A Zona'."
  },
  {
    id: 4,
    title: "Fallen Angels",
    director: "Wong Kar-wai",
    year: 1995,
    genre: "Crime",
    rating: "★ 4.7",
    rentPrice: 11.00,
    buyPrice: 45.00,
    rarity: "CULT VINTAGE",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80",
    synopsis: "Um assassino de aluguel desiludido tenta se libertar de sua parceira de negócios."
  },
  {
    id: 5,
    title: "Metropolis",
    director: "Fritz Lang",
    year: 1927,
    genre: "Ficção Científica",
    rating: "★ 4.9",
    rentPrice: 9.00,
    buyPrice: 38.00,
    rarity: "EXPRESSIONISMO",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
    synopsis: "Em um futuro distópico, o filho do governante se apaixona por uma trabalhadora ativista."
  },
  {
    id: 6,
    title: "Paris, Texas",
    director: "Wim Wenders",
    year: 1984,
    genre: "Drama",
    rating: "★ 4.8",
    rentPrice: 11.50,
    buyPrice: 46.00,
    rarity: "PALME D'OR",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80",
    synopsis: "Um homem amnésico vaga pelo deserto e tenta se reconectar com seu passado."
  },
  {
    id: 7,
    title: "O Sétimo Selo",
    director: "Ingmar Bergman",
    year: 1957,
    genre: "Drama",
    rating: "★ 4.9",
    rentPrice: 10.00,
    buyPrice: 40.00,
    rarity: "OBRA-PRIMA",
    poster: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?w=500&q=80",
    synopsis: "Um cavaleiro medieval joga xadrez com a Morte enquanto a Peste Negra devasta a Europa."
  },
  {
    id: 8,
    title: "Rashomon",
    director: "Akira Kurosawa",
    year: 1950,
    genre: "Crime",
    rating: "★ 4.8",
    rentPrice: 10.00,
    buyPrice: 41.00,
    rarity: "CLÁSSICO JAPONÊS",
    poster: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=500&q=80",
    synopsis: "Um crime é narrado sob quatro pontos de vista totalmente contraditórios."
  },
  {
    id: 9,
    title: "Suspiria",
    director: "Dario Argento",
    year: 1977,
    genre: "Terror",
    rating: "★ 4.6",
    rentPrice: 12.00,
    buyPrice: 44.00,
    rarity: "GIALLO VINTAGE",
    poster: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&q=80",
    synopsis: "Uma estudante de dança descobre que sua academia abriga um coven de bruxas."
  },
  {
    id: 10,
    title: "Persona",
    director: "Ingmar Bergman",
    year: 1966,
    genre: "Drama",
    rating: "★ 4.9",
    rentPrice: 11.00,
    buyPrice: 42.00,
    rarity: "ED. LIMITADA",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80",
    synopsis: "Uma enfermeira cuida de uma atriz muda e suas mentes começam a se fundir."
  },
  {
    id: 11,
    title: "Blade Runner",
    director: "Ridley Scott",
    year: 1982,
    genre: "Ficção Científica",
    rating: "★ 4.9",
    rentPrice: 13.00,
    buyPrice: 50.00,
    rarity: "FINAL CUT",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80",
    synopsis: "Um detetive caça androids rebeldes em uma Los Angeles futurista e chuvosa."
  },
  {
    id: 12,
    title: "Eraserhead",
    director: "David Lynch",
    year: 1977,
    genre: "Terror",
    rating: "★ 4.5",
    rentPrice: 10.00,
    buyPrice: 39.00,
    rarity: "LENDÁRIO CULT",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80",
    synopsis: "Uma viagem surrealista pela mente de um homem em um mundo industrial."
  },
  {
    id: 13,
    title: "L'Avventura",
    director: "Michelangelo Antonioni",
    year: 1960,
    genre: "Drama",
    rating: "★ 4.6",
    rentPrice: 9.50,
    buyPrice: 38.00,
    rarity: "NEO-REALISMO",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&q=80",
    synopsis: "O desaparecimento de uma mulher leva seu namorado e amiga a uma busca enigmática."
  },
  {
    id: 14,
    title: "O Iluminado",
    director: "Stanley Kubrick",
    year: 1980,
    genre: "Terror",
    rating: "★ 5.0",
    rentPrice: 12.50,
    buyPrice: 49.00,
    rarity: "CLÁSSICO OBRIGATÓRIO",
    poster: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&q=80",
    synopsis: "Uma família se isola em um hotel remoto no inverno sob forças sobrenaturais."
  },
  {
    id: 15,
    title: "Taxi Driver",
    director: "Martin Scorsese",
    year: 1976,
    genre: "Crime",
    rating: "★ 4.9",
    rentPrice: 12.00,
    buyPrice: 47.00,
    rarity: "ANOS 70 CULT",
    poster: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=500&q=80",
    synopsis: "Um motorista de táxi solitário desce à loucura nas ruas de Nova York."
  },
  {
    id: 16,
    title: "8½",
    director: "Federico Fellini",
    year: 1963,
    genre: "Drama",
    rating: "★ 4.8",
    rentPrice: 11.00,
    buyPrice: 43.00,
    rarity: "ITALIANO CLÁSSICO",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80",
    synopsis: "Um cineasta famoso busca inspiração mesclando sonhos, memórias e realidade."
  },
  {
    id: 17,
    title: "Nosferatu",
    director: "F. W. Murnau",
    year: 1922,
    genre: "Terror",
    rating: "★ 4.7",
    rentPrice: 8.50,
    buyPrice: 35.00,
    rarity: "MUTO HISTÓRICO",
    poster: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?w=500&q=80",
    synopsis: "O vampiro Conde Orlok viaja para uma nova cidade espalhando horror e peste."
  },
  {
    id: 18,
    title: "Ikiru (Viver)",
    director: "Akira Kurosawa",
    year: 1952,
    genre: "Drama",
    rating: "★ 4.9",
    rentPrice: 10.50,
    buyPrice: 40.00,
    rarity: "ED. COLECIONADOR",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80",
    synopsis: "Um burocrata terminal descobre o sentido da vida ao criar um parque infantil."
  },
  {
    id: 19,
    title: "Solaris",
    director: "Andrei Tarkovsky",
    year: 1972,
    genre: "Ficção Científica",
    rating: "★ 4.8",
    rentPrice: 11.00,
    buyPrice: 44.00,
    rarity: "CULT SOVIÉTICO",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
    synopsis: "Um cientista investiga fenômenos mentais em uma estação orbital em Solaris."
  },
  {
    id: 20,
    title: "A Viagem de Chihiro",
    director: "Hayao Miyazaki",
    year: 2001,
    genre: "Romance",
    rating: "★ 5.0",
    rentPrice: 13.00,
    buyPrice: 52.00,
    rarity: "ANIME HISTÓRICO",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80",
    synopsis: "Uma garota precisa trabalhar em uma casa de banhos mística para salvar seus pais."
  }
];

// 2. STATE MANAGEMENT
const state = {
  user: JSON.parse(localStorage.getItem('lw_user')) || null,
  cart: JSON.parse(localStorage.getItem('lw_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('lw_wishlist')) || [],
  cards: JSON.parse(localStorage.getItem('lw_cards')) || [],
  rentals: JSON.parse(localStorage.getItem('lw_rentals')) || [],
  fines: JSON.parse(localStorage.getItem('lw_fines')) || [
    { id: 101, movieTitle: "Stalker (1979)", daysLate: 4, amount: 20.00, status: "pending" }
  ],
  authMode: 'login',
  wishlistOnlyFilter: false,
  bsAuthModal: null,
  bsMovieModal: null,
  bsCartOffcanvas: null,
  bsToast: null
};

// 3. MAIN CONTROLLER
const app = {
  init() {
    // Instanciar utilitários Bootstrap
    state.bsAuthModal = new bootstrap.Modal(document.getElementById('auth-modal'));
    state.bsMovieModal = new bootstrap.Modal(document.getElementById('movie-modal'));
    state.bsCartOffcanvas = new bootstrap.Offcanvas(document.getElementById('cartOffcanvas'));
    state.bsToast = new bootstrap.Toast(document.getElementById('app-toast'));

    this.renderHeaderAuth();
    this.renderMovies();
    this.updateCartBadge();
    this.checkUserBanStatus();
  },

  // ROUTER DA SPA
  navigateTo(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('d-none'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active-nav'));

    const target = document.getElementById(`page-${pageId}`);
    const navBtn = document.getElementById(`nav-${pageId}`);

    if (target) target.classList.remove('d-none');
    if (navBtn) navBtn.classList.add('active-nav');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (pageId === 'profile') {
      if (!state.user) {
        this.openAuthModal();
        return;
      }
      this.renderProfileData();
    }
  },

  // RENDERIZAR GRID DE FILMES
  renderMovies() {
    const container = document.getElementById('movies-container');
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    const genreVal = document.getElementById('genre-select').value;

    const filtered = MOVIES_DATABASE.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchVal) || movie.director.toLowerCase().includes(searchVal);
      const matchesGenre = genreVal === 'all' || movie.genre === genreVal;
      const matchesWishlist = !state.wishlistOnlyFilter || state.wishlist.includes(movie.id);
      return matchesSearch && matchesGenre && matchesWishlist;
    });

    container.innerHTML = filtered.map(movie => {
      const isWish = state.wishlist.includes(movie.id);
      return `
        <div class="col">
          <article class="card h-100 bg-brand-card border-brand-teal-subtle movie-card shadow-sm">
            <div class="position-relative ratio ratio-2x3 bg-black overflow-hidden cursor-pointer" onclick="app.openMovieModal(${movie.id})">
              <img src="${movie.poster}" class="card-img-top object-fit-cover" alt="${movie.title}" loading="lazy">
              <span class="position-absolute top-0 start-0 m-2 badge bg-brand-dark border border-warning text-brand-amber text-uppercase font-monospace" style="font-size: 0.65rem;">${movie.rarity}</span>
              <button onclick="event.stopPropagation(); app.toggleWishlist(${movie.id})" class="position-absolute top-0 end-0 m-2 btn btn-dark btn-sm rounded-circle p-1 d-flex align-items-center justify-content-center" style="width: 28px; height: 28px;">
                <i class="bi ${isWish ? 'bi-heart-fill text-brand-orange' : 'bi-heart text-white'}"></i>
              </button>
            </div>
            
            <div class="card-body p-3 d-flex flex-column">
              <h6 class="font-serif fw-bold text-white text-truncate mb-1">${movie.title}</h6>
              <small class="text-slate-400 d-block mb-1">${movie.year} • ${movie.director}</small>
              <div class="text-brand-amber small fw-bold mb-3">${movie.rating}</div>
              
              <div class="mt-auto pt-2 border-top border-secondary-subtle d-flex justify-content-between align-items-center small mb-3">
                <span class="text-brand-teal fw-semibold">R$ ${movie.rentPrice.toFixed(2)} <small class="text-slate-500 fw-normal">/aluguel</small></span>
                <span class="text-slate-400">R$ ${movie.buyPrice.toFixed(2)}</span>
              </div>

              <div class="row g-1">
                <div class="col-6">
                  <button onclick="app.addToCart(${movie.id}, 'rent')" class="btn btn-brand-elevated border-brand-teal-subtle btn-sm w-100">Alugar</button>
                </div>
                <div class="col-6">
                  <button onclick="app.addToCart(${movie.id}, 'buy')" class="btn btn-brand-orange btn-sm w-100 fw-bold">Comprar</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      `;
    }).join('');

    document.getElementById('wishlist-count').innerText = state.wishlist.length;
  },

  filterMovies() {
    this.renderMovies();
  },

  toggleWishlistFilter() {
    state.wishlistOnlyFilter = !state.wishlistOnlyFilter;
    const btn = document.getElementById('btn-wishlist-filter');
    btn.classList.toggle('border-brand-orange', state.wishlistOnlyFilter);
    this.renderMovies();
  },

  toggleWishlist(id) {
    if (state.wishlist.includes(id)) {
      state.wishlist = state.wishlist.filter(item => item !== id);
    } else {
      state.wishlist.push(id);
    }
    localStorage.setItem('lw_wishlist', JSON.stringify(state.wishlist));
    this.renderMovies();
  },

  // DETALHES DO FILME (MODAL)
  openMovieModal(id) {
    const movie = MOVIES_DATABASE.find(m => m.id === id);
    if (!movie) return;

    const modalContent = document.getElementById('movie-modal-content');
    modalContent.innerHTML = `
      <div class="row g-4 items-start">
        <div class="col-12 col-md-5">
          <img src="${movie.poster}" class="img-fluid rounded border border-brand-teal-subtle w-100" alt="${movie.title}">
        </div>
        <div class="col-12 col-md-7">
          <span class="badge bg-brand-dark border border-warning text-brand-amber text-uppercase mb-2">${movie.rarity}</span>
          <h3 class="font-serif fw-bold text-white mb-1">${movie.title}</h3>
          <p class="small text-slate-400 mb-3">${movie.year} • Dir. ${movie.director} • ${movie.genre}</p>
          <p class="text-slate-300 lh-base mb-4">${movie.synopsis}</p>
          <div class="d-flex flex-wrap gap-2">
            <button onclick="app.addToCart(${movie.id}, 'rent'); state.bsMovieModal.hide();" class="btn btn-brand-elevated border-brand-teal-subtle btn-sm fw-bold">Alugar por R$ ${movie.rentPrice.toFixed(2)}</button>
            <button onclick="app.addToCart(${movie.id}, 'buy'); state.bsMovieModal.hide();" class="btn btn-brand-orange btn-sm fw-bold">Comprar por R$ ${movie.buyPrice.toFixed(2)}</button>
          </div>
        </div>
      </div>
    `;
    state.bsMovieModal.show();
  },

  // AUTENTICAÇÃO
  openAuthModal() {
    state.bsAuthModal.show();
  },

  closeAuthModal() {
    state.bsAuthModal.hide();
  },

  switchAuthMode(mode) {
    state.authMode = mode;
    document.getElementById('tab-login-btn').className = mode === 'login' ? 'nav-link active text-brand-orange fw-bold w-100' : 'nav-link text-slate-400 fw-bold w-100';
    document.getElementById('tab-register-btn').className = mode === 'register' ? 'nav-link active text-brand-orange fw-bold w-100' : 'nav-link text-slate-400 fw-bold w-100';
    document.getElementById('group-name').classList.toggle('d-none', mode === 'login');
    document.getElementById('auth-submit-btn').innerText = mode === 'login' ? 'Entrar na Conta' : 'Criar minha Conta';
  },

  loginWithGoogle() {
    state.user = { name: "Usuário Google", email: "google.user@gmail.com" };
    localStorage.setItem('lw_user', JSON.stringify(state.user));
    this.closeAuthModal();
    this.renderHeaderAuth();
    this.showToast("Login com Google efetuado!");
  },

  handleAuthSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('auth-email').value;
    const pwd = document.getElementById('auth-password').value;
    const name = document.getElementById('auth-name').value || "Cliente Lost Wild";

    if (pwd.length < 6) {
      const errBox = document.getElementById('auth-error-msg');
      errBox.innerText = "A senha precisa ter no mínimo 6 caracteres.";
      errBox.classList.remove('d-none');
      return;
    }

    state.user = { name, email };
    localStorage.setItem('lw_user', JSON.stringify(state.user));
    this.closeAuthModal();
    this.renderHeaderAuth();
    this.showToast(`Bem-vindo, ${name}!`);
  },

  logout() {
    state.user = null;
    localStorage.removeItem('lw_user');
    this.renderHeaderAuth();
    this.navigateTo('home');
    this.showToast("Sessão finalizada.");
  },

  renderHeaderAuth() {
    const wrapper = document.getElementById('auth-header-state');
    if (state.user) {
      wrapper.innerHTML = `
        <button onclick="app.navigateTo('profile')" class="btn btn-brand-elevated border-brand-teal-subtle btn-sm text-white fw-medium">
          <i class="bi bi-person me-1"></i> ${state.user.name.split(' ')[0]}
        </button>
      `;
    } else {
      wrapper.innerHTML = `
        <button onclick="app.openAuthModal()" class="btn btn-brand-orange btn-sm fw-bold">Entrar</button>
      `;
    }
  },

  // CARRINHO & CHECKOUT
  addToCart(movieId, type) {
    const movie = MOVIES_DATABASE.find(m => m.id === movieId);
    if (!movie) return;

    state.cart.push({
      cartItemId: Date.now(),
      movieId: movie.id,
      title: movie.title,
      type: type,
      price: type === 'rent' ? movie.rentPrice : movie.buyPrice
    });

    this.saveCart();
    this.showToast(`${movie.title} adicionado ao carrinho!`);
  },

  toggleCart() {
    this.renderCart();
    state.bsCartOffcanvas.toggle();
  },

  renderCart() {
    const container = document.getElementById('cart-items-container');
    if (state.cart.length === 0) {
      container.innerHTML = `<p class="text-center text-slate-500 small py-4">Seu carrinho está vazio.</p>`;
      document.getElementById('cart-total-price').innerText = 'R$ 0,00';
      return;
    }

    let total = 0;
    container.innerHTML = state.cart.map(item => {
      total += item.price;
      return `
        <div class="d-flex align-items-center justify-content-between p-2 mb-2 bg-brand-dark rounded border border-brand-teal-subtle small">
          <div>
            <strong class="text-white d-block">${item.title}</strong>
            <span class="text-slate-400" style="font-size: 0.75rem;">${item.type === 'rent' ? 'Aluguel (Retirada)' : 'Compra Final'}</span>
          </div>
          <div class="d-flex align-items-center gap-2">
            <span class="fw-bold text-white">R$ ${item.price.toFixed(2)}</span>
            <button onclick="app.removeFromCart(${item.cartItemId})" class="btn btn-sm text-danger p-0 border-0 fs-5">&times;</button>
          </div>
        </div>
      `;
    }).join('');

    document.getElementById('cart-total-price').innerText = `R$ ${total.toFixed(2)}`;
  },

  removeFromCart(cartItemId) {
    state.cart = state.cart.filter(i => i.cartItemId !== cartItemId);
    this.saveCart();
    this.renderCart();
  },

  saveCart() {
    localStorage.setItem('lw_cart', JSON.stringify(state.cart));
    this.updateCartBadge();
  },

  updateCartBadge() {
    document.getElementById('cart-count').innerText = state.cart.length;
  },

  checkout() {
    if (!state.user) {
      state.bsCartOffcanvas.hide();
      this.openAuthModal();
      return;
    }

    if (state.cart.length === 0) return;

    state.cart.forEach(item => {
      state.rentals.push({
        id: Date.now() + Math.random(),
        title: item.title,
        type: item.type,
        date: new Date().toLocaleDateString('pt-BR'),
        status: item.type === 'rent' ? 'Reservado para Retirada' : 'Compra Efetuada'
      });
    });

    state.cart = [];
    this.saveCart();
    localStorage.setItem('lw_rentals', JSON.stringify(state.rentals));
    state.bsCartOffcanvas.hide();
    this.navigateTo('profile');
    this.showToast("Pedido confirmado!");
  },

  // PERFIL & MULTAS
  switchProfileTab(tabName) {
    document.querySelectorAll('.profile-tab-pane').forEach(t => t.classList.add('d-none'));
    document.querySelectorAll('.profile-tab').forEach(b => b.classList.remove('active'));

    document.getElementById(`tab-${tabName}`).classList.remove('d-none');
    event.target.classList.add('active');
  },

  renderProfileData() {
    if (!state.user) return;

    document.getElementById('user-display-name').innerText = state.user.name;
    document.getElementById('user-display-email').innerText = state.user.email;
    document.getElementById('user-avatar-initials').innerText = state.user.name.charAt(0).toUpperCase();

    // Render Aluguéis
    const rentalsList = document.getElementById('user-rentals-list');
    if (state.rentals.length === 0) {
      rentalsList.innerHTML = `<p class="small text-slate-500">Sem pedidos recentes.</p>`;
    } else {
      rentalsList.innerHTML = state.rentals.map(r => `
        <div class="d-flex align-items-center justify-content-between p-3 bg-brand-dark border border-brand-teal-subtle rounded small">
          <div>
            <strong class="text-white d-block">${r.title}</strong>
            <span class="text-slate-400">Data: ${r.date} • ${r.type === 'rent' ? 'Aluguel' : 'Compra'}</span>
          </div>
          <span class="badge text-bg-success">${r.status}</span>
        </div>
      `).join('');
    }

    // Render Multas
    const finesList = document.getElementById('user-fines-list');
    const pendingFines = state.fines.filter(f => f.status === 'pending');
    document.getElementById('fines-badge').innerText = pendingFines.length;

    if (state.fines.length === 0) {
      finesList.innerHTML = `<p class="small text-slate-500">Nenhuma multa registrada.</p>`;
    } else {
      finesList.innerHTML = state.fines.map(f => `
        <div class="d-flex align-items-center justify-content-between p-3 bg-brand-dark border-start border-4 ${f.status === 'pending' ? 'border-brand-red' : 'border-success'} rounded-end small">
          <div>
            <strong class="text-white d-block">${f.movieTitle}</strong>
            <span class="text-slate-400">${f.daysLate} dias de atraso • Valor: R$ ${f.amount.toFixed(2)}</span>
          </div>
          ${f.status === 'pending'
            ? `<button onclick="app.payFine(${f.id})" class="btn btn-brand-orange btn-sm fw-bold">Quitar Multa</button>`
            : `<span class="badge text-bg-success">Quitada</span>`
          }
        </div>
      `).join('');
    }

    this.renderCards();
  },

  payFine(fineId) {
    const fine = state.fines.find(f => f.id === fineId);
    if (fine) {
      fine.status = 'paid';
      localStorage.setItem('lw_fines', JSON.stringify(state.fines));
      this.renderProfileData();
      this.checkUserBanStatus();
      this.showToast("Multa quitada!");
    }
  },

  saveCard(e) {
    e.preventDefault();
    const holder = document.getElementById('card-holder').value;
    const number = document.getElementById('card-number').value;

    state.cards.push({
      id: Date.now(),
      holder,
      lastFour: number.slice(-4) || '4242'
    });

    localStorage.setItem('lw_cards', JSON.stringify(state.cards));
    e.target.reset();
    this.renderCards();
    this.showToast("Cartão registrado!");
  },

  renderCards() {
    const container = document.getElementById('saved-cards-container');
    if (state.cards.length === 0) {
      container.innerHTML = `<p class="small text-slate-500">Nenhum cartão cadastrado.</p>`;
      return;
    }

    container.innerHTML = state.cards.map(c => `
      <div class="d-flex align-items-center justify-content-between p-3 bg-brand-dark border border-brand-teal-subtle rounded small">
        <div>
          <strong class="text-white d-block">•••• •••• •••• ${c.lastFour}</strong>
          <span class="text-slate-400">${c.holder}</span>
        </div>
        <button onclick="app.removeCard(${c.id})" class="btn btn-link text-danger p-0 small text-decoration-none">Remover</button>
      </div>
    `).join('');
  },

  removeCard(id) {
    state.cards = state.cards.filter(c => c.id !== id);
    localStorage.setItem('lw_cards', JSON.stringify(state.cards));
    this.renderCards();
  },

  checkUserBanStatus() {
    const criticalFines = state.fines.filter(f => f.status === 'pending' && f.daysLate > 7);
    const banBanner = document.getElementById('ban-banner');
    const statusPill = document.getElementById('account-status-pill');

    if (criticalFines.length > 0) {
      banBanner.classList.remove('d-none');
      if (statusPill) {
        statusPill.innerText = "Bloqueado para Aluguéis";
        statusPill.className = "badge text-bg-danger mt-1";
      }
    } else {
      banBanner.classList.add('d-none');
      if (statusPill) {
        statusPill.innerText = "Conta Regular";
        statusPill.className = "badge text-bg-success mt-1";
      }
    }
  },

  showToast(msg) {
    document.getElementById('toast-message').innerText = msg;
    state.bsToast.show();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  app.init();
});