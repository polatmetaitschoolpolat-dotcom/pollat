document.addEventListener("DOMContentLoaded", () => {
  // 1. MAHSULOTLAR BAZASI (Barcha 7 kategoriya)
  const menuData = [
    // HOT-DOG
    {
      id: 1,
      name: "Qirollik Hot-Dog",
      category: "hotdog",
      catLabel: "Hot-dog",
      price: 18000,
      desc: "Ikki sosiskali, pishloqli sous, tuzlangan bodring va xirildoq piyoz.",
      img: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Andijon Chili Hot-Dog",
      category: "hotdog",
      catLabel: "Hot-dog",
      price: 21000,
      desc: "Mol go‘shtli sosiska, achchiq xalapenyo va maxsus tomat sousi.",
      img: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Pishloqli Klassik Hot-Dog",
      category: "hotdog",
      catLabel: "Hot-dog",
      price: 15000,
      desc: "Yumshoq bulochka, dudlangan sosiska, xantal va mayonez.",
      img: "https://images.unsplash.com/photo-1627054248949-21f77275a15f?auto=format&fit=crop&w=600&q=80"
    },

    // LAVASH
    {
      id: 4,
      name: "Tandirda Pishgan Mol Go‘shtli Lavash",
      category: "lavash",
      catLabel: "Lavash",
      price: 32000,
      desc: "Sarxil mol go‘shti, chipslar, pomidor, bodring va oq sarimsoqli sous.",
      img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      name: "Pishloqli Tovuq Lavash",
      category: "lavash",
      catLabel: "Lavash",
      price: 29000,
      desc: "Grilda pishgan tovuq filesi, eritilgan chedder pishlog‘i va sabzavotlar.",
      img: "https://images.unsplash.com/photo-1562059390-a761a084768e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      name: "Achchiq Big Lavash",
      category: "lavash",
      catLabel: "Lavash",
      price: 35000,
      desc: "Katta porsiya mol go‘shti, chili sousi, fri kartoshka va yangi ko‘katlar.",
      img: "https://images.unsplash.com/photo-1642783944285-b33b18ef6c3b?auto=format&fit=crop&w=600&q=80"
    },

    // PITSA
    {
      id: 7,
      name: "Pepperoni Pitsa (33 sm)",
      category: "pizza",
      catLabel: "Pitsa",
      price: 68000,
      desc: "Dudlangan kolbasa, mo‘l motsarella pishlog‘i va italyan tomat sousi.",
      img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      name: "Go‘shtli Assorti Pitsa (33 sm)",
      category: "pizza",
      catLabel: "Pitsa",
      price: 78000,
      desc: "Mol go‘shti, tovuq go‘shti, qo‘ziqorin, zaytun va motsarella.",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 9,
      name: "Margarita Pitsa (33 sm)",
      category: "pizza",
      catLabel: "Pitsa",
      price: 55000,
      desc: "Klassik italyan xamiri, yangi pomidorlar, rayhon va motsarella.",
      img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
    },

    // BURGER
    {
      id: 10,
      name: "Andijon Double Cheese Burger",
      category: "burger",
      catLabel: "Burger",
      price: 36000,
      desc: "2 ta 100% mol go‘shtli kotlet, ikki qavat chedder pishlog‘i va maxsus sous.",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 11,
      name: "Crispy Chicken Burger",
      category: "burger",
      catLabel: "Burger",
      price: 27000,
      desc: "Qarsildoq tovuq filesi, aysberg salati va krem-pishloqli sous.",
      img: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 12,
      name: "BBQ Bacon Burger",
      category: "burger",
      catLabel: "Burger",
      price: 34000,
      desc: "Mol go‘shtli kotlet, qovurilgan piyoz halqalari va tutunli BBQ sous.",
      img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80"
    },

    // DONAR
    {
      id: 13,
      name: "Turkcha Donar Kebab (Bulochkada)",
      category: "donar",
      catLabel: "Donar",
      price: 30000,
      desc: "Ko‘mirda pishgan mol go‘shti, karam salati, pomidor va maxsus qizil sous.",
      img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 14,
      name: "Tarelka Donar (Fri bilan)",
      category: "donar",
      catLabel: "Donar",
      price: 42000,
      desc: "Katta porsiya donar go‘shti, kartoshka fri, guruch va yangi sabzavotlar.",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80"
    },

    // GAZLI ICHIMLIKLAR
    {
      id: 15,
      name: "Coca-Cola 0.5L (Muzdek)",
      category: "gazli",
      catLabel: "Gazli ichimlik",
      price: 8000,
      desc: "Taomlar bilan ajoyib uyg‘unlashuvchi klassik gazli ichimlik.",
      img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 16,
      name: "Fanta Apelsin 0.5L",
      category: "gazli",
      catLabel: "Gazli ichimlik",
      price: 8000,
      desc: "Yorqin apelsin ta’mli salqin gazli ichimlik.",
      img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 17,
      name: "Sprite Limon-Laym 0.5L",
      category: "gazli",
      catLabel: "Gazli ichimlik",
      price: 8000,
      desc: "Tetiklantiruvchi limon va laym ta’mli gazli ichimlik.",
      img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80"
    },

    // GAZSIZ ICHIMLIKLAR
    {
      id: 18,
      name: "Tabiiy Apelsin Sharbati 0.3L",
      category: "gazsiz",
      catLabel: "Gazsiz ichimlik",
      price: 12000,
      desc: "Yangi siqilgan vitaminlarga boy tabiiy apelsin sharbati.",
      img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 19,
      name: "Muzdek Limonli Choy (Ice Tea)",
      category: "gazsiz",
      catLabel: "Gazsiz ichimlik",
      price: 10000,
      desc: "Ko‘k choy, yangi limon bo‘laklari va yalpiz barglari bilan.",
      img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 20,
      name: "Olcha Kompot (Uy usulida) 0.5L",
      category: "gazsiz",
      catLabel: "Gazsiz ichimlik",
      price: 9000,
      desc: "Andijon bog‘larining sarxil olchasidan tayyorlangan salqin ichimlik.",
      img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80"
    },

    // MAXSUS COMBO (Aksiya tugmasi uchun)
    {
      id: 99,
      name: "Combo: 2 ta Katta Lavash + 1L Cola",
      category: "lavash",
      catLabel: "Combo Aksiya",
      price: 69000,
      desc: "2 ta mol go‘shtli lavash va 1L Coca-Cola + bepul yetkazib berish.",
      img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // HOLAT (STATE)
  let currentCategory = "all";
  let searchQuery = "";
  let cart = JSON.parse(localStorage.getItem("andijon_cart")) || [];
  let currentUser = JSON.parse(localStorage.getItem("andijon_user")) || null;
  let authMode = "login";

  // DOM ELEMENTLAR
  const menuGrid = document.getElementById("menuGrid");
  const emptySearch = document.getElementById("emptySearch");
  const categoryTabs = document.getElementById("categoryTabs");
  const searchInput = document.getElementById("searchInput");

  const overlay = document.getElementById("overlay");
  const cartDrawer = document.getElementById("cartDrawer");
  const openCartBtn = document.getElementById("openCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartItemsEl = document.getElementById("cartItems");
  const cartCountEl = document.getElementById("cartCount");
  const cartTotalEl = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("checkoutBtn");

  const checkoutModal = document.getElementById("checkoutModal");
  const closeCheckoutBtn = document.getElementById("closeCheckoutBtn");
  const checkoutForm = document.getElementById("checkoutForm");
  const checkoutTotalText = document.getElementById("checkoutTotalText");

  const authModal = document.getElementById("authModal");
  const openAuthBtn = document.getElementById("openAuthBtn");
  const closeAuthBtn = document.getElementById("closeAuthBtn");
  const authBtnText = document.getElementById("authBtnText");
  const authForm = document.getElementById("authForm");
  const authTabs = document.querySelectorAll(".auth-tab");
  const regNameGroup = document.getElementById("regNameGroup");
  const authModalTitle = document.getElementById("authModalTitle");
  const authSubmitBtn = document.getElementById("authSubmitBtn");

  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinks = document.getElementById("navLinks");
  const toastContainer = document.getElementById("toastContainer");

  // YORDAMCHI FUNKSIYALAR
  function formatPrice(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so‘m";
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
  }

  function closeAllOverlays() {
    overlay.classList.add("hidden");
    cartDrawer.classList.remove("open");
    checkoutModal.classList.add("hidden");
    authModal.classList.add("hidden");
  }

  // MENYUNI CHIZISH
  function renderMenu() {
    const filtered = menuData.filter((item) => {
      if (item.id === 99 && currentCategory !== "all" && currentCategory !== "lavash") return false;
      const matchesCat = currentCategory === "all" || item.category === currentCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });

    menuGrid.innerHTML = "";

    if (filtered.length === 0) {
      emptySearch.classList.remove("hidden");
      return;
    }

    emptySearch.classList.add("hidden");

    filtered.forEach((item) => {
      const card = document.createElement("div");
      card.className = "food-card";
      card.innerHTML = `
        <div class="food-img-wrap">
          <img src="${item.img}" alt="${item.name}" loading="lazy" />
          <span class="cat-badge">${item.catLabel}</span>
        </div>
        <div class="food-body">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="food-footer">
            <span class="price">${formatPrice(item.price)}</span>
            <button class="add-btn" data-id="${item.id}">
              <i class="fa-solid fa-plus"></i> Savatga
            </button>
          </div>
        </div>
      `;
      menuGrid.appendChild(card);
    });
  }

  // SAVATCHA LOGIKASI
  function saveCart() {
    localStorage.setItem("andijon_cart", JSON.stringify(cart));
  }

  function addToCart(id) {
    const product = menuData.find((p) => p.id === id);
    if (!product) return;

    const existing = cart.find((item) => item.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    saveCart();
    renderCart();
    showToast(`✅ "${product.name}" savatchaga qo‘shildi!`);
  }

  function updateQty(id, delta) {
    const index = cart.findIndex((item) => item.id === id);
    if (index === -1) return;

    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }

    saveCart();
    renderCart();
  }

  function removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
    saveCart();
    renderCart();
  }

  function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function renderCart() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountEl.textContent = totalCount;

    const totalSum = getCartTotal();
    cartTotalEl.textContent = formatPrice(totalSum);
    checkoutTotalText.textContent = formatPrice(totalSum);

    if (cart.length === 0) {
      cartItemsEl.innerHTML = `
        <div style="text-align:center; padding: 50px 10px; color: #6c757d;">
          <i class="fa-solid fa-basket-shopping" style="font-size: 2.5rem; margin-bottom: 10px; color: #ff4500;"></i>
          <p>Savatchangiz hozircha bo‘sh</p>
        </div>
      `;
      return;
    }

    cartItemsEl.innerHTML = cart
      .map(
        (item) => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}" />
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <span>${formatPrice(item.price * item.qty)}</span>
          </div>
          <div class="qty-controls">
            <button class="qty-btn" data-action="dec" data-id="${item.id}">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
          </div>
          <button class="remove-item" data-action="del" data-id="${item.id}" title="O‘chirish">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `
      )
      .join("");
  }

  // FOYDALANUVCHI (AUTH) HOLATI
  function updateAuthUI() {
    if (currentUser) {
      authBtnText.textContent = `${currentUser.name} (Chiqish)`;
    } else {
      authBtnText.textContent = "Kirish";
    }
  }

  // EVENT LISTENERS
  categoryTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;

    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    renderMenu();
  });

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    renderMenu();
  });

  menuGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-btn");
    if (!btn) return;
    addToCart(Number(btn.dataset.id));
  });

  document.getElementById("addComboBtn").addEventListener("click", () => {
    addToCart(99);
  });

  document.getElementById("heroPromoBtn").addEventListener("click", () => {
    document.getElementById("promo").scrollIntoView({ behavior: "smooth" });
  });

  openCartBtn.addEventListener("click", () => {
    closeAllOverlays();
    overlay.classList.remove("hidden");
    cartDrawer.classList.add("open");
  });

  closeCartBtn.addEventListener("click", closeAllOverlays);
  overlay.addEventListener("click", closeAllOverlays);

  cartItemsEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const action = btn.dataset.action;

    if (action === "inc") updateQty(id, 1);
    if (action === "dec") updateQty(id, -1);
    if (action === "del") removeItem(id);
  });

  // BUYURTMA BERISH OYNASI
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("⚠️ Avval savatchaga taom qo‘shing!");
      return;
    }
    cartDrawer.classList.remove("open");
    checkoutModal.classList.remove("hidden");
    if (currentUser) {
      document.getElementById("orderName").value = currentUser.name;
      document.getElementById("orderPhone").value = currentUser.phone;
    }
  });

  closeCheckoutBtn.addEventListener("click", closeAllOverlays);

  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("orderName").value.trim();
    const address = document.getElementById("orderAddress").value.trim();

    cart = [];
    saveCart();
    renderCart();
    checkoutForm.reset();
    closeAllOverlays();
    showToast(`🎉 Rahmat, ${name}! Buyurtmangiz "${address}" manziliga yuborildi!`);
  });

  // RO'YXATDAN O'TISH / KIRISH OYNASI
  openAuthBtn.addEventListener("click", () => {
    if (currentUser) {
      currentUser = null;
      localStorage.removeItem("andijon_user");
      updateAuthUI();
      showToast("👋 Tizimdan chiqdingiz.");
      return;
    }
    closeAllOverlays();
    overlay.classList.remove("hidden");
    authModal.classList.remove("hidden");
  });

  closeAuthBtn.addEventListener("click", closeAllOverlays);

  authTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      authTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      authMode = tab.dataset.auth;

      if (authMode === "register") {
        regNameGroup.classList.remove("hidden");
        document.getElementById("authNameInput").required = true;
        authModalTitle.textContent = "Ro‘yxatdan o‘tish";
        authSubmitBtn.textContent = "Ro‘yxatdan o‘tish";
      } else {
        regNameGroup.classList.add("hidden");
        document.getElementById("authNameInput").required = false;
        authModalTitle.textContent = "Tizimga kirish";
        authSubmitBtn.textContent = "Kirish";
      }
    });
  });

  authForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const phone = document.getElementById("authPhoneInput").value.trim();
    const nameInput = document.getElementById("authNameInput").value.trim();
    const displayName = authMode === "register" && nameInput ? nameInput : "Mijoz";

    currentUser = { name: displayName, phone };
    localStorage.setItem("andijon_user", JSON.stringify(currentUser));
    updateAuthUI();
    authForm.reset();
    closeAllOverlays();
    showToast(`🎉 Xush kelibsiz, ${displayName}!`);
  });

  // MOBIL GAMBURGER MENYU
  hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      navLinks.classList.remove("active");
    });
  });

  // BOSHLANG'ICH YUKLASH
  renderMenu();
  renderCart();
  updateAuthUI();
});