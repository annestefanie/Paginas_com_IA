/**
 * LOST WILD - CINEMA ARCHIVE & RENTAL SYSTEM
 * Vanilla JS Application
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
    rarity: "RARO - ED. CRITERION",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80",
    synopsis: "Duas histórias de amor melancólicas e interligadas no coração vibrante de Hong Kong."
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
    synopsis: "Dois vizinhos descobrem que seus respectivos cônjuges estão tendo um caso."
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
    rarity: "CLÁSSICO SOVIÉTICO",
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
    synopsis: "Um assassino de aluguel desiludido tenta se libertar da sua parceira de negócios."
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
    synopsis: "Em um futuro distópico, o filho do governante se apaixona por uma profetiza da classe trabalhadora."
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
    synopsis: "Um homem amnésico vaga pelo deserto e tenta se reconectar com seu irmão e filho."
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
    rarity: "MUNDIAL RARO",
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
    synopsis: "O assassinato de um samurai é narrado sob quatro pontos de vista totalmente opostos."
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
    synopsis: "Uma estudante de dança americana se junta a uma prestigiada academia alemã com segredos sombrios."
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
    rarity: "OBRA-PRIMA",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80",
    synopsis: "Uma enfermeira cuida de uma atriz muta e suas identidades começam a se fundir."
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
    rarity: "CUT DO DIRETOR",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80",
    synopsis: "Um caçador de recompensas deve rastrear e exterminar quatro replicantes fugitivos."
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
    synopsis: "Henry Spencer tenta navegar em sua paisagem industrial e em sua paternidade assustadora."
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
    synopsis: "Uma mulher desaparece durante uma viagem de barco pelo Mediterrâneo."
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
    synopsis: "Uma família se isola em um hotel remoto no inverno onde uma presença sinistra influencia o pai."
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
    synopsis: "Um veterano mentalmente instável trabalha como motorista de táxi na Nova York noturna."
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
    synopsis: "Um diretor de cinema sufocado se retira em suas memórias e fantasias."
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
    synopsis: "O vampiro Conde Orlok se apaixona pela esposa do seu agente imobiliário."
  },
  {
    id: 18,
    title: "A Vontade de Vencer",
    director: "Akira Kurosawa",
    year: 1952,
    genre: "Drama",
    rating: "★ 4.9",
    rentPrice: 10.50,
    buyPrice: 40.00,
    rarity: "ED. COLECIONADOR",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80",
    synopsis: "Um burocrata decide construir um parque infantil ao descobrir uma doença terminal."
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
    rarity: "FICÇÃO FILOSÓFICA",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80",
    synopsis: "Un psicólogo é enviado para uma estação espacial orbitando um planeta misterioso."
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
    synopsis: "Uma garota se vê presa em um mundo governado por deuses, espíritos e feitiços."
  }
];

// 2. ESTADO DA APLICAÇÃO (STATE MANAGEMENT)
const state = {
  user: JSON.parse(localStorage.getItem('lw_user')) || null,
  cart: JSON.parse(localStorage.getItem('lw_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('lw_wishlist')) || [],
  cards: JSON.parse(localStorage.getItem('lw_cards')) || [],
  rentals: JSON.parse(localStorage.getItem('lw_rentals')) || [],
  fines: JSON.parse(localStorage.getItem('lw_fines')) || [
    { id: 101, movieTitle: "Stalker (1979)", daysLate: 4, amount: 20.00, status: "pending" }
  ],
  authMode: 'login', // 'login' ou 'register'
  wishlistOnlyFilter: false
};

// 3. CONTROLADOR PRINCIPAL (APP MODULE)
const app = {
  init() {
    this.renderHeaderAuth();
    this.renderMovies();
    this.updateCartBadge();
    this.checkUserBanStatus();
  },

  // NAVEGAÇÃO ENTRE PÁGINAS (SPA)
  navigateTo(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));

    const target = document.getElementById(`page-${pageId}`);
    if (target) {
      target.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (pageId === 'profile') {
      if (!state.user) {
        this.openAuthModal();
        return;
      }
      this.renderProfileData();
    }
  },

  // RENDERIZAR CATALOGO
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
        <article class="movie-card">
          <div class="poster-wrapper" onclick="app.openMovieModal(${movie.id})">
            <img class="poster-img" src="${movie.poster}" alt="${movie.title}" loading="lazy">
            <span class="movie-tag-rarity">${movie.rarity}</span>
            <button class="btn-wishlist ${isWish ? 'active' : ''}" onclick="event.stopPropagation(); app.toggleWishlist(${movie.id})">
              ${isWish ? '♥' : '♡'}
            </button>
          </div>
          <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-meta">${movie.year} • Dir. ${movie.director}</p>
            <div class="movie-rating">${movie.rating}</div>
            
            <div class="movie-prices">
              <div>
                <span class="price-rent">R$ ${movie.rentPrice.toFixed(2)}</span> <small>/ aluguel</small>
              </div>
              <div>
                <span class="price-buy">R$ ${movie.buyPrice.toFixed(2)}</span> <small>/ compra</small>
              </div>
            </div>

            <div class="card-actions">
              <button class="btn-secondary" onclick="app.addToCart(${movie.id}, 'rent')">Alugar</button>
              <button class="btn-primary" onclick="app.addToCart(${movie.id}, 'buy')">Comprar</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    document.getElementById('wishlist-count').innerText = state.wishlist.length;
  },

  filterMovies() {
    this.renderMovies();
  },

  toggleWishlistFilter() {
    state.wishlistOnlyFilter = !state.wishlistOnlyFilter;
    document.getElementById('btn-wishlist-filter').classList.toggle('active', state.wishlistOnlyFilter);
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

  // MODAL DE DETALHES DO FILME
  openMovieModal(id) {
    const movie = MOVIES_DATABASE.find(m => m.id === id);
    if (!movie) return;

    const modalContent = document.getElementById('movie-modal-content');
    modalContent.innerHTML = `
      <div style="display: grid; grid-template-columns: 200px 1fr; gap: 1.5rem; align-items: start;">
        <img src="${movie.poster}" style="width: 100%; border-radius: var(--radius-sm);" alt="${movie.title}">
        <div>
          <span style="color: var(--color-accent); font-size: 0.8rem; font-weight: bold;">${movie.rarity}</span>
          <h2 style="font-family: var(--font-serif); font-size: 1.8rem; margin: 0.2rem 0;">${movie.title}</h2>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">Lançamento: ${movie.year} | Direção: ${movie.director} | Gênero: ${movie.genre}</p>
          <p style="margin-bottom: 1.5rem;">${movie.synopsis}</p>
          <div style="display: flex; gap: 1rem;">
            <button class="btn-secondary" onclick="app.addToCart(${movie.id}, 'rent'); app.closeMovieModal();">Alugar por R$ ${movie.rentPrice.toFixed(2)}</button>
            <button class="btn-primary" onclick="app.addToCart(${movie.id}, 'buy'); app.closeMovieModal();">Comprar DVD por R$ ${movie.buyPrice.toFixed(2)}</button>
          </div>
        </div>
      </div>
    `;
    document.getElementById('movie-modal').classList.remove('hidden');
  },

  closeMovieModal() {
    document.getElementById('movie-modal').classList.add('hidden');
  },

  // AUTENTICAÇÃO E MODAL
  openAuthModal() {
    document.getElementById('auth-modal').classList.remove('hidden');
  },

  closeAuthModal() {
    document.getElementById('auth-modal').classList.add('hidden');
  },

  switchAuthMode(mode) {
    state.authMode = mode;
    document.getElementById('tab-login-btn').classList.toggle('active', mode === 'login');
    document.getElementById('tab-register-btn').classList.toggle('active', mode === 'register');
    document.getElementById('group-name').style.display = mode === 'register' ? 'block' : 'none';
    document.getElementById('auth-submit-btn').innerText = mode === 'login' ? 'Entrar na Conta' : 'Criar minha Conta';
  },

  loginWithGoogle() {
    state.user = { name: "Usuário Google", email: "google.user@gmail.com" };
    localStorage.setItem('lw_user', JSON.stringify(state.user));
    this.closeAuthModal();
    this.renderHeaderAuth();
    this.showToast("Login com Google efetuado com sucesso!");
  },

  handleAuthSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('auth-email').value;
    const pwd = document.getElementById('auth-password').value;
    const name = document.getElementById('auth-name').value || "Cliente Lost Wild";

    if (pwd.length < 6) {
      document.getElementById('auth-error-msg').innerText = "A senha deve conter no mínimo 6 caracteres.";
      document.getElementById('auth-error-msg').classList.remove('hidden');
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
    this.showToast("Sessão encerrada.");
  },

  renderHeaderAuth() {
    const wrapper = document.getElementById('auth-header-state');
    if (state.user) {
      wrapper.innerHTML = `
        <button class="btn-secondary" onclick="app.navigateTo('profile')">
          👤 ${state.user.name.split(' ')[0]}
        </button>
      `;
    } else {
      wrapper.innerHTML = `
        <button class="btn-primary" onclick="app.openAuthModal()">Entrar</button>
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
      type: type, // 'rent' ou 'buy'
      price: type === 'rent' ? movie.rentPrice : movie.buyPrice
    });

    this.saveCart();
    this.showToast(`${movie.title} adicionado ao carrinho!`);
  },

  toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('hidden');
    this.renderCart();
  },

  renderCart() {
    const container = document.getElementById('cart-items-container');
    if (state.cart.length === 0) {
      container.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 2rem;">Seu carrinho está vazio.</p>`;
      document.getElementById('cart-total-price').innerText = 'R$ 0,00';
      return;
    }

    let total = 0;
    container.innerHTML = state.cart.map(item => {
      total += item.price;
      return `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem;">
          <div>
            <strong>${item.title}</strong>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${item.type === 'rent' ? 'Aluguel (Retirada)' : 'Compra Final'}</div>
          </div>
          <div>
            <span style="font-weight: bold; margin-right: 0.5rem;">R$ ${item.price.toFixed(2)}</span>
            <button onclick="app.removeFromCart(${item.cartItemId})" style="color: var(--color-red);">&times;</button>
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
      this.toggleCart();
      this.openAuthModal();
      return;
    }

    if (state.cart.length === 0) return;

    // Transfere o carrinho para os aluguéis/compras do usuário
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
    this.toggleCart();
    this.navigateTo('profile');
    this.showToast("Pedido confirmado! Verifique os detalhes na sua conta.");
  },

  // PERFIL DO USUÁRIO & MULTAS
  switchProfileTab(tabName) {
    document.querySelectorAll('.tab-pane').forEach(t => t.classList.add('hidden'));
    document.querySelectorAll('.profile-tab').forEach(b => b.classList.remove('active'));

    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
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
      rentalsList.innerHTML = `<p style="color: var(--text-muted);">Você ainda não possui nenhum aluguel ou compra ativa.</p>`;
    } else {
      rentalsList.innerHTML = state.rentals.map(r => `
        <div class="rental-item-card">
          <div>
            <strong>${r.title}</strong>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Data do Pedido: ${r.date} • Tipo: ${r.type === 'rent' ? 'Aluguel' : 'Compra'}</div>
          </div>
          <span class="status-pill pill-active">${r.status}</span>
        </div>
      `).join('');
    }

    // Render Multas
    const finesList = document.getElementById('user-fines-list');
    const pendingFines = state.fines.filter(f => f.status === 'pending');
    document.getElementById('fines-badge').innerText = pendingFines.length;

    if (state.fines.length === 0) {
      finesList.innerHTML = `<p style="color: var(--text-muted);">Nenhuma multa pendente no seu histórico.</p>`;
    } else {
      finesList.innerHTML = state.fines.map(f => `
        <div class="rental-item-card" style="border-left: 3px solid ${f.status === 'pending' ? 'var(--color-red)' : 'var(--color-accent)'}">
          <div>
            <strong>${f.movieTitle}</strong>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${f.daysLate} dias de atraso • Valor: R$ ${f.amount.toFixed(2)}</div>
          </div>
          ${f.status === 'pending' 
            ? `<button class="btn-primary" onclick="app.payFine(${f.id})">Quitar Multa</button>`
            : `<span style="color: #81e6d9; font-size: 0.85rem; font-weight: bold;">Paga</span>`
          }
        </div>
      `).join('');
    }

    // Render Cartões
    this.renderCards();
  },

  payFine(fineId) {
    const fine = state.fines.find(f => f.id === fineId);
    if (fine) {
      fine.status = 'paid';
      localStorage.setItem('lw_fines', JSON.stringify(state.fines));
      this.renderProfileData();
      this.checkUserBanStatus();
      this.showToast("Multa quitada com sucesso!");
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
    this.showToast("Cartão cadastrado com sucesso!");
  },

  renderCards() {
    const container = document.getElementById('saved-cards-container');
    if (state.cards.length === 0) {
      container.innerHTML = `<p style="color: var(--text-muted);">Nenhum cartão cadastrado.</p>`;
      return;
    }

    container.innerHTML = state.cards.map(c => `
      <div class="rental-item-card">
        <div>
          <strong>•••• •••• •••• ${c.lastFour}</strong>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${c.holder}</div>
        </div>
        <button onclick="app.removeCard(${c.id})" style="color: var(--color-red); font-size: 0.85rem;">Remover</button>
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
      banBanner.classList.remove('hidden');
      if (statusPill) {
        statusPill.innerText = "Conta Suspensa para Novos Aluguéis";
        statusPill.className = "status-pill pill-banned";
      }
    } else {
      banBanner.classList.add('hidden');
      if (statusPill) {
        statusPill.innerText = "Conta Regular";
        statusPill.className = "status-pill pill-active";
      }
    }
  },

  // UTILS
  showToast(msg) {
    const toast = document.getElementById('toast');
    toast.innerText = msg;
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  }
};

// INICIALIZAR APLICAÇÃO AO CARREGAR O DOM
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});