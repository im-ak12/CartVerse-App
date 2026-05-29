/* ==========================================================================
   CartVerse E-Commerce - Pure JavaScript Dynamic Logic Engine
   Inspired by: Amazon & Flipkart Interactivity Modals
   Developer: Alok Kumar | Roll: 23E51A6606 | Branch: CSM-A
   ========================================================================== */

// --- 1. Programmatic Database of 100 Premium Products ---
const products = [];

const categoriesList = ["electronics", "fashion", "gaming", "home", "accessories"];

// Helper array to programmatically create realistic product items
const namesTemplates = {
    electronics: [
        { name: "Apple iPhone 15 Pro Max (256GB) - Titanium Gray", price: 144900, mrp: 159900, rating: 4.8, img: "images/iphone.jpg" },
        { name: "Samsung Galaxy S24 Ultra (512GB) - Titanium Yellow", price: 129999, mrp: 139999, rating: 4.7, img: "images/galaxy.jpg" },
        { name: "Nokia 105 Classic Single Sim Keypad Cellular", price: 1199, mrp: 1599, rating: 4.2, img: "images/nokia.jpg" },
        { name: "OnePlus 12 (5G, 16GB RAM, 512GB Storage) - Silky Black", price: 64999, mrp: 69999, rating: 4.6, img: "images/oneplus.jpg" },
        { name: "Google Pixel 8 Pro (128GB) - Bay Cyan Blue", price: 93999, mrp: 106999, rating: 4.5, img: "images/pixel.jpg" },
        { name: "Sony WH-1000XM5 Active Noise Cancelling Headphones", price: 29990, mrp: 34990, rating: 4.9, img: "images/sony_headphones.jpg" },
        { name: "MacBook Air M3 Chip (13-inch, 8GB RAM, 256GB SSD)", price: 104900, mrp: 114900, rating: 4.8, img: "images/macbook.jpg" },
        { name: "Canon EOS R50 Mirrorless Camera Content Creator Kit", price: 68990, mrp: 75990, rating: 4.4, img: "images/canon_camera.jpg" }
    ],
    fashion: [
        { name: "Kriska Women Viscose Rayon Solid Maroon Kurta", price: 535, mrp: 2499, rating: 4.2, img: "images/kurta1.jpg" },
        { name: "Janasya Women Crepe Kurta Ethnic Skirt Suit", price: 799, mrp: 2699, rating: 4.1, img: "images/kurta2.jpg" },
        { name: "Adidas Men's Ultraboost Light Performance Running Shoes", price: 14999, mrp: 19999, rating: 4.7, img: "images/adidas_shoes.jpg" },
        { name: "Nike Air Force 1 '07 Premium Retro White Sneaker", price: 9695, mrp: 11995, rating: 4.8, img: "images/nike_sneaker.jpg" },
        { name: "Levi's Men's 511 Slim Fit Stretch Dark Denim Jeans", price: 2199, mrp: 3999, rating: 4.3, img: "images/levis_jeans.jpg" },
        { name: "Ray-Ban Classic Wayfarer Polarized Tech Sunglasses", price: 8590, mrp: 9990, rating: 4.6, img: "images/rayban_glasses.jpg" },
        { name: "Allen Solly Men's Cotton Solid Formal Fit Shirt", price: 1299, mrp: 2299, rating: 4.0, img: "images/formal_shirt.jpg" },
        { name: "Puma Dynamic active Training Track Jacket", price: 1799, mrp: 3499, rating: 4.2, img: "images/track_jacket.jpg" }
    ],
    gaming: [
        { name: "ASUS ROG Zephyrus G14 Gaming Laptop (Ryzen 9, RTX 4060)", price: 149990, mrp: 174990, rating: 4.9, img: "images/gaming_laptop.jpg" },
        { name: "Sony PlayStation 5 Slim Console (825GB Digital Edition)", price: 44990, mrp: 54990, rating: 4.8, img: "images/ps5_console.jpg" },
        { name: "Razer DeathAdder V3 Pro Wireless Ergonomic Gaming Mouse", price: 11999, mrp: 14999, rating: 4.6, img: "images/gaming_mouse.jpg" },
        { name: "HyperX Cloud III Wired spatial sound Gaming Headset", price: 8490, mrp: 9990, rating: 4.5, img: "images/gaming_headset.jpg" },
        { name: "Keychron K2 Mechanical Keyboard (Hot-swappable, Brown Switch)", price: 7999, mrp: 9999, rating: 4.7, img: "images/gaming_keyboard.jpg" },
        { name: "Green Soul Monster Premium Ergonomic High Back Gaming Chair", price: 16499, mrp: 24999, rating: 4.4, img: "images/gaming_chair.jpg" },
        { name: "Nintendo Switch OLED Model Console - Neon Blue/Red", price: 28990, mrp: 34990, rating: 4.6, img: "images/nintendo_switch.jpg" },
        { name: "SteelSeries QcK Heavy XL Micro-Woven Gaming Mousepad", price: 2199, mrp: 2999, rating: 4.3, img: "images/mousepad.jpg" }
    ],
    home: [
        { name: "Philips Hue Smart LED Ambient Bar Table Lamp Light", price: 8999, mrp: 10999, rating: 4.5, img: "images/smart_lamp.jpg" },
        { name: "De'Longhi Dedica Style Manual Pump Espresso Maker", price: 22990, mrp: 29990, rating: 4.7, img: "images/espresso_maker.jpg" },
        { name: "Dyson Pure Cool Link HEPA Air Purifier (Tower Fan)", price: 32900, mrp: 43900, rating: 4.6, img: "images/air_purifier.jpg" },
        { name: "Sleek Modern Nordic Coffee Table (Solid Oak Wood)", price: 11499, mrp: 18999, rating: 4.3, img: "images/coffee_table.jpg" },
        { name: "Deco Jewel Velvet Embroidered Decorative Throw Cushions", price: 899, mrp: 1999, rating: 4.1, img: "images/cushions.jpg" },
        { name: "KENT 16025 Alkaline Mineral RO UV Water Purifier", price: 16490, mrp: 19500, rating: 4.4, img: "images/water_purifier.jpg" },
        { name: "Solis Desk Organizer Modular Accessories Rack", price: 1499, mrp: 2499, rating: 4.2, img: "images/desk_organizer.jpg" },
        { name: "Modern Geometric Ceramic Flower Vase - Minimalist Style", price: 799, mrp: 1499, rating: 4.0, img: "images/flower_vase.jpg" }
    ],
    accessories: [
        { name: "Wildcraft Triton 40L Water-Resistant Travel Backpack", price: 1999, mrp: 3499, rating: 4.3, img: "images/travel_backpack.jpg" },
        { name: "DailyObjects Canvas Messenger Crossbody Bag", price: 1499, mrp: 2999, rating: 4.2, img: "images/messenger_bag.jpg" },
        { name: "Anker PowerCore 20000mAh Ultra-Fast Power Bank", price: 3299, mrp: 4499, rating: 4.7, img: "images/powerbank.jpg" },
        { name: "Sleek Matte Black Stainless Steel Thermos Flask (1L)", price: 999, mrp: 1499, rating: 4.4, img: "images/thermos_flask.jpg" },
        { name: "Nova Premium Titanium Biometric Smart Tracker Ring", price: 15499, mrp: 19999, rating: 4.8, img: "images/smart_ring.jpg" },
        { name: "Urban Forest Vintage Leather Bi-Fold Wallet", price: 899, mrp: 1999, rating: 4.1, img: "images/leather_wallet.jpg" },
        { name: "Victorinox Classic SD Multi-Tool Pocket Keychain Knife", price: 1850, mrp: 2200, rating: 4.6, img: "images/pocket_knife.jpg" },
        { name: "Spigen Rugged Armor Key Organizer Holder", price: 1499, mrp: 1999, rating: 4.3, img: "images/key_organizer.jpg" }
    ]
};

// Populate exactly 100 products programmatically to avoid hardcoding massive lines
function generateProducts() {
    let id = 1;
    // Iterate 20 times over all categories to easily generate exactly 100 high-fidelity products
    for (let i = 0; i < 20; i++) {
        categoriesList.forEach(category => {
            const templateArray = namesTemplates[category];
            const template = templateArray[i % templateArray.length];
            
            // Tweak the name programmatically to avoid duplicates and look completely realistic
            let modifiedName = template.name;
            let priceOffset = (i * 13) % 100; // Small programmatic price variances
            let finalPrice = template.price + priceOffset;
            let finalMrp = template.mrp + priceOffset;
            
            if (i > 0) {
                const suffixes = ["v2", "Pro Edition", "Gen-2", "Ultra-Sleek", "Classic Line", "Signature Series", "Premium Pack", "Special Edition"];
                const suffix = suffixes[(i + id) % suffixes.length];
                modifiedName = `${template.name.split(" - ")[0]} (${suffix})`;
            }

            products.push({
                id: id,
                name: modifiedName,
                category: category,
                price: finalPrice,
                mrp: finalMrp,
                rating: Number((template.rating - (i % 3) * 0.1).toFixed(1)), // Subtle ratings variance
                reviews: 142 + (i * 37) % 5000,
                img: template.img
            });
            id++;
        });
    }
}

// Generate products array database immediately
generateProducts();

// --- Bulletproof dynamic SVG fallback generator (guaranteed to render beautifully offline/online with zero broken requests) ---
function generateProductSvg(name, category) {
    let gradStart, gradEnd, iconClass;
    switch (category) {
        case 'electronics':
            gradStart = '#3b82f6'; gradEnd = '#1d4ed8'; iconClass = '📱';
            break;
        case 'fashion':
            gradStart = '#ec4899'; gradEnd = '#be185d'; iconClass = '👕';
            break;
        case 'gaming':
            gradStart = '#8b5cf6'; gradEnd = '#6d28d9'; iconClass = '🎮';
            break;
        case 'home':
            gradStart = '#10b981'; gradEnd = '#047857'; iconClass = '🛋️';
            break;
        case 'accessories':
            gradStart = '#f59e0b'; gradEnd = '#b45309'; iconClass = '🎒';
            break;
        default:
            gradStart = '#6b7280'; gradEnd = '#374151'; iconClass = '🛍️';
    }

    let shortName = name.split(" - ")[0];
    if (shortName.length > 25) {
        shortName = shortName.slice(0, 22) + "...";
    }

    const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
            <defs>
                <linearGradient id="grad-${gradStart.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${gradStart};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${gradEnd};stop-opacity:1" />
                </linearGradient>
                <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.15"/>
                </filter>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad-${gradStart.replace('#','')})" />
            <path d="M0 40 H400 M0 80 H400 M0 120 H400 M0 160 H400 M0 200 H400 M0 240 H400 M0 280 H400 M0 320 H400 M0 360 H400" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
            <path d="M40 0 V400 M80 0 V400 M120 0 V400 M160 0 V400 M200 0 V400 M240 0 V400 M280 0 V400 M320 0 V400 M360 0 V400" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="5,5" />
            <circle cx="200" cy="180" r="75" fill="rgba(255,255,255,0.15)" filter="url(#shadow)" />
            <text x="200" y="200" font-family="Segoe UI Emoji, Apple Color Emoji, sans-serif" font-size="70" text-anchor="middle" dominant-baseline="central">${iconClass}</text>
            <rect x="130" y="275" width="140" height="24" rx="12" fill="rgba(255,255,255,0.2)" />
            <text x="200" y="291" font-family="'Poppins', sans-serif" font-weight="600" font-size="11" fill="#ffffff" text-anchor="middle" letter-spacing="1.5" style="text-transform:uppercase;">${category}</text>
            <text x="200" y="340" font-family="'Poppins', sans-serif" font-weight="500" font-size="15" fill="#ffffff" text-anchor="middle" filter="url(#shadow)">${shortName}</text>
            <text x="200" y="365" font-family="'Poppins', sans-serif" font-size="11" fill="rgba(255,255,255,0.7)" text-anchor="middle">Premium Quality &bull; CartVerse Pick</text>
        </svg>
    `;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
}

function handleImgError(imgEl, id) {
    const product = products.find(p => p.id === id);
    if (product) {
        imgEl.onerror = null;
        imgEl.src = generateProductSvg(product.name, product.category);
    }
}

// --- 2. Application Core States ---
let cart = [];
let wishlist = [];
let loggedInUser = null;

try {
    cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
} catch (e) {
    console.warn("localStorage access blocked for cart products:", e);
}

try {
    wishlist = JSON.parse(localStorage.getItem("wishlistProducts")) || [];
} catch (e) {
    console.warn("localStorage access blocked for wishlist products:", e);
}

try {
    loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;
} catch (e) {
    console.warn("localStorage access blocked for loggedInUser:", e);
}

let registeredUsers = [];
try {
    registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
} catch (e) {
    console.warn("localStorage access blocked for registeredUsers:", e);
}

let deliveryAddress = {
    name: "Alok Kumar",
    street: "Room 402, Cyber Heights Apartments",
    city: "Hyderabad",
    pincode: "500081"
};

try {
    const savedAddress = JSON.parse(localStorage.getItem("deliveryAddress"));
    if (savedAddress) {
        deliveryAddress = savedAddress;
    }
} catch (e) {
    console.warn("localStorage access blocked for deliveryAddress:", e);
}

if (loggedInUser) {
    deliveryAddress = {
        name: loggedInUser.name,
        street: loggedInUser.street || "Room 402, Cyber Heights Apartments",
        city: loggedInUser.city || "Hyderabad",
        pincode: loggedInUser.pincode || "500081"
    };
}

let currentPage = 1;
const itemsPerPage = 20; // 20 items per page * 5 pages = 100 products!

let filters = {
    search: "",
    category: "all",
    priceMax: 100000,
    minRating: 0,
    departments: ["electronics", "fashion", "gaming", "home", "accessories"]
};

let activeCarouselIndex = 0;

// --- 3. Initial Window Load & Events ---
function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader && loader.style.display !== "none") {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 400);
    }
}

window.addEventListener("load", () => {
    setTimeout(hideLoader, 800);
});

// Fallback safety timeout (2 seconds max loading overlay visibility)
setTimeout(hideLoader, 2000);

document.addEventListener("DOMContentLoaded", () => {
    // Initial renders
    applyInitialTheme();
    updateUserHeader();
    updateDeliveryPin();
    renderProducts();
    updateBadges();
    renderCart();
    renderWishlist();
    
    // Begin slide banners carousel timer loop
    startCarouselAutoPlay();
    
    // Wire up events
    setupEventBindings();
});

// Theme Restorer
function applyInitialTheme() {
    let savedTheme = "light";
    try {
        savedTheme = localStorage.getItem("theme") || "light";
    } catch (e) {
        console.warn("localStorage theme read blocked:", e);
    }
    document.documentElement.className = savedTheme;
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const themeBtn = document.getElementById("themeToggleBtn");
    if (!themeBtn) return;
    if (theme === "dark") {
        themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
}

// --- 4. Core Catalog Layout Engines ---
function renderProducts() {
    const grid = document.getElementById("productCatalogGrid");
    const countsEl = document.getElementById("resultsCount");
    const headingEl = document.getElementById("catalogHeading");
    
    if (!grid) return;
    grid.innerHTML = "";

    // 4.1 Filter arrays matching state triggers
    let filtered = products.filter(p => {
        // Categories strip selection OR department checkbox selection matches
        const matchesStrip = filters.category === "all" || p.category === filters.category;
        const matchesCheckbox = filters.departments.includes(p.category);
        
        // Search text matching
        const matchesSearch = p.name.toLowerCase().includes(filters.search.toLowerCase());
        
        // Price ceiling limits
        const matchesPrice = p.price <= filters.priceMax;
        
        // Minimum rating badge scores
        const matchesRating = p.rating >= filters.minRating;

        return matchesStrip && matchesCheckbox && matchesSearch && matchesPrice && matchesRating;
    });

    // 4.2 Sort results array
    const sortVal = document.getElementById("sortSelect").value;
    if (sortVal === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortVal === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortVal === "alphabetical") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Update catalog top information tags
    if (countsEl) countsEl.innerText = `Showing ${filtered.length} Products`;
    if (headingEl) {
        headingEl.innerText = filters.category === "all" ? "All Products" : `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)} Collections`;
    }

    // Empty catalog fallback template
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-drawer" style="grid-column: 1 / -1; padding: 60px 0;">
                <i class="fa-solid fa-face-frown"></i>
                <h4>No Matching Products Found</h4>
                <p>Try clearing some filters or refining your search parameters.</p>
            </div>
        `;
        document.getElementById("paginationContainer").innerHTML = "";
        return;
    }

    // 4.3 Client-Side Slice Pagination Calculations
    // Pages: 1, 2, 3, 4, 5...
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = Math.max(1, totalPages);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sliced = filtered.slice(startIndex, endIndex);

    // 4.4 Card Grid Injections
    sliced.forEach(product => {
        const inWishlist = wishlist.some(item => item.id === product.id);
        const discountPct = Math.round(((product.mrp - product.price) / product.mrp) * 100);

        const card = document.createElement("div");
        card.className = `product-card ${product.category}`;
        card.innerHTML = `
            <div class="product-card-img-box" onclick="openQuickView(${product.id})">
                <img src="${product.img}" alt="${product.name}" loading="lazy" onerror="handleImgError(this, ${product.id})">
            </div>
            
            <button class="wishlist-heart-btn ${inWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id}, event)" title="Add to Wishlist">
                <i class="fa-regular fa-heart"></i>
            </button>
            
            <div class="product-card-info" onclick="openQuickView(${product.id})">
                <h3 class="product-card-title">${product.name}</h3>
                
                <div class="rating-row">
                    <span class="rating-badge">${product.rating} <i class="fa-solid fa-star"></i></span>
                    <span class="rating-count-text">(${product.reviews.toLocaleString()})</span>
                </div>
                
                <div class="price-row">
                    <span class="card-price">₹${product.price.toLocaleString()}</span>
                    <span class="card-mrp">₹${product.mrp.toLocaleString()}</span>
                    <span class="card-discount">${discountPct}% off</span>
                </div>
                
                <span class="card-deal-tag">Special Price Deal</span>
                
                <button class="product-card-btn" onclick="quickAddToCart(${product.id}, event)">Add To Cart</button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Populate active interactive pills
    renderActiveFilterPills();

    // Populate pagination numbers
    renderPagination(totalPages);
}

// Render dynamic pagination button indicators
function renderPagination(totalPages) {
    const container = document.getElementById("paginationContainer");
    if (!container) return;
    container.innerHTML = "";

    if (totalPages <= 1) return;

    // Previous Button
    const prevBtn = document.createElement("button");
    prevBtn.className = "page-btn page-text-btn";
    prevBtn.innerHTML = `<i class="fa-solid fa-angle-left"></i> Prev`;
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener("click", () => {
        currentPage--;
        renderProducts();
        scrollToCatalogSection();
    });
    container.appendChild(prevBtn);

    // Number Buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.className = `page-btn ${currentPage === i ? 'active' : ''}`;
        pageBtn.innerText = i;
        pageBtn.addEventListener("click", () => {
            currentPage = i;
            renderProducts();
            scrollToCatalogSection();
        });
        container.appendChild(pageBtn);
    }

    // Next Button
    const nextBtn = document.createElement("button");
    nextBtn.className = "page-btn page-text-btn";
    nextBtn.innerHTML = `Next <i class="fa-solid fa-angle-right"></i>`;
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => {
        currentPage++;
        renderProducts();
        scrollToCatalogSection();
    });
    container.appendChild(nextBtn);
}

// Smooth scroll helper to jump user back to catalog starting point
function scrollToCatalogSection() {
    const catalogEl = document.getElementById("shopCatalog");
    if (catalogEl) {
        const offset = 140;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = catalogEl.getBoundingClientRect().top;
        const position = elementRect - bodyRect - offset;
        window.scrollTo({
            top: position,
            behavior: "smooth"
        });
    }
}

// Active Filter Pills Renderer (Ajio/Myntra style)
function renderActiveFilterPills() {
    const pillsRow = document.getElementById("activePillsRow");
    if (!pillsRow) return;
    pillsRow.innerHTML = "";

    // Search query pill
    if (filters.search) {
        createPill(`Search: "${filters.search}"`, () => {
            filters.search = "";
            const searchInput = document.getElementById("searchInput");
            const sideSearch = document.getElementById("sidebarSearch");
            if (searchInput) searchInput.value = "";
            if (sideSearch) sideSearch.value = "";
            document.getElementById("clearSearchBtn").style.display = "none";
            currentPage = 1;
            renderProducts();
        });
    }

    // Category Strip pill
    if (filters.category !== "all") {
        createPill(`Category: ${filters.category}`, () => {
            filters.category = "all";
            const tabs = document.querySelectorAll(".strip-item");
            tabs.forEach(t => t.classList.remove("active"));
            const allTab = document.querySelector('.strip-item[data-category="all"]');
            if (allTab) allTab.classList.add("active");
            currentPage = 1;
            renderProducts();
        });
    }

    // Price Pill
    if (filters.priceMax < 100000) {
        createPill(`Max: ₹${filters.priceMax.toLocaleString()}`, () => {
            filters.priceMax = 100000;
            const slider = document.getElementById("priceRange");
            if (slider) slider.value = 100000;
            document.getElementById("priceLimitVal").innerText = "Max: ₹100,000";
            currentPage = 1;
            renderProducts();
        });
    }

    // Rating Pill
    if (filters.minRating > 0) {
        createPill(`${filters.minRating}★ & Above`, () => {
            filters.minRating = 0;
            const radio = document.querySelector('input[name="ratingFilter"][value="0"]');
            if (radio) radio.checked = true;
            currentPage = 1;
            renderProducts();
        });
    }

    function createPill(text, onClear) {
        const pill = document.createElement("span");
        pill.className = "filter-pill";
        pill.innerHTML = `
            <span>${text}</span>
            <button><i class="fa-solid fa-circle-xmark"></i></button>
        `;
        pill.querySelector("button").addEventListener("click", onClear);
        pillsRow.appendChild(pill);
    }
}

// --- 5. Shopping Cart State Managers ---
function quickAddToCart(productId, event) {
    if (event) event.stopPropagation();
    addToCart(productId);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            qty: 1
        });
    }

    saveState("cart");
    renderCart();
    updateBadges();
    triggerToast(`Added ${product.name.slice(0, 24)}... to Cart!`);
    
    // Open sidebar automatically to provide real commercial feedback
    openDrawer("cartOverlay");
}

function removeItemFromCart(index) {
    cart.splice(index, 1);
    saveState("cart");
    renderCart();
    updateBadges();
    triggerToast("Item removed from Shopping Cart.");
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        removeItemFromCart(index);
    } else {
        saveState("cart");
        renderCart();
        updateBadges();
    }
}

function clearCart() {
    cart = [];
    saveState("cart");
    renderCart();
    updateBadges();
    triggerToast("Shopping Cart cleared successfully.");
}

function renderCart() {
    const cartList = document.getElementById("cartItemsList");
    const subtotalText = document.getElementById("cartSubtotal");
    
    if (!cartList) return;
    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = `
            <div class="empty-drawer">
                <i class="fa-solid fa-cart-flatbed-suitcases"></i>
                <h4>Your cart is empty</h4>
                <p>Navigate the pages to explore and fill your cargo.</p>
            </div>
        `;
        if (subtotalText) subtotalText.innerText = "₹0";
        return;
    }

    let subtotal = 0;
    cart.forEach((item, index) => {
        subtotal += item.price * item.qty;
        
        const row = document.createElement("div");
        row.className = "drawer-item";
        row.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="drawer-item-img" onerror="handleImgError(this, ${item.id})">
            <div class="drawer-item-info">
                <h4 class="drawer-item-title">${item.name}</h4>
                <span class="drawer-item-price">₹${(item.price * item.qty).toLocaleString()}</span>
                
                <div class="drawer-item-actions">
                    <div class="item-qty-control">
                        <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                    </div>
                    
                    <button class="item-del-btn" onclick="removeItemFromCart(${index})">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
        cartList.appendChild(row);
    });

    if (subtotalText) subtotalText.innerText = `₹${subtotal.toLocaleString()}`;
}

// --- 6. Wishlist State Managers ---
function toggleWishlist(productId, event) {
    if (event) event.stopPropagation();
    
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const index = wishlist.findIndex(item => item.id === productId);
    if (index !== -1) {
        // Remove
        wishlist.splice(index, 1);
        triggerToast("Removed from Wishlist.");
    } else {
        // Add
        wishlist.push(product);
        triggerToast("Saved to Wishlist!");
    }

    saveState("wishlist");
    renderProducts();
    renderWishlist();
    updateBadges();
}

function renderWishlist() {
    const list = document.getElementById("wishlistItemsList");
    if (!list) return;
    list.innerHTML = "";

    if (wishlist.length === 0) {
        list.innerHTML = `
            <div class="empty-drawer">
                <i class="fa-regular fa-heart"></i>
                <h4>Your Wishlist is empty</h4>
                <p>Bookmark premium items from cards to inspect them here.</p>
            </div>
        `;
        return;
    }

    wishlist.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "drawer-item";
        row.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="drawer-item-img" onerror="handleImgError(this, ${item.id})">
            <div class="drawer-item-info">
                <h4 class="drawer-item-title">${item.name}</h4>
                <span class="drawer-item-price">₹${item.price.toLocaleString()}</span>
                
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px">
                    <button class="product-card-btn" onclick="moveWishlistToCart(${item.id})" style="padding:6px 12px; font-size:0.75rem; margin:0; width:auto;">
                        Add to Cart
                    </button>
                    <button class="item-del-btn" onclick="toggleWishlist(${item.id})" style="padding:4px">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
        list.appendChild(row);
    });
}

function moveWishlistToCart(productId) {
    addToCart(productId);
    // Remove from wishlist
    const index = wishlist.findIndex(item => item.id === productId);
    if (index !== -1) {
        wishlist.splice(index, 1);
        saveState("wishlist");
        renderProducts();
        renderWishlist();
        updateBadges();
    }
}

function addAllWishlistToCart() {
    if (wishlist.length === 0) return;
    wishlist.forEach(item => {
        const inCart = cart.find(c => c.id === item.id);
        if (inCart) {
            inCart.qty++;
        } else {
            cart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                img: item.img,
                qty: 1
            });
        }
    });
    wishlist = [];
    saveState("cart");
    saveState("wishlist");
    renderProducts();
    renderCart();
    renderWishlist();
    updateBadges();
    triggerToast("All Wishlist items loaded to Cargo!");
    closeDrawer("wishlistOverlay");
    openDrawer("cartOverlay");
}

// Global badges updater
function updateBadges() {
    const cartCountEl = document.getElementById("cartCount");
    const wishlistCountEl = document.getElementById("wishlistCount");
    
    const cartTotalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    
    if (cartCountEl) cartCountEl.innerText = cartTotalCount;
    if (wishlistCountEl) wishlistCountEl.innerText = wishlist.length;
}

// --- 7. Product Quick View modal Dialog ---
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalContent = document.getElementById("qvModalContent");
    if (!modalContent) return;

    const discountPct = Math.round(((product.mrp - product.price) / product.mrp) * 100);
    const inWishlist = wishlist.some(item => item.id === product.id);

    modalContent.innerHTML = `
        <div class="qv-img-box">
            <img src="${product.img}" alt="${product.name}" onerror="handleImgError(this, ${product.id})">
        </div>
        <div class="qv-info">
            <h2 class="qv-title">${product.name}</h2>
            <div class="rating-row" style="margin: 8px 0 16px;">
                <span class="rating-badge">${product.rating} <i class="fa-solid fa-star"></i></span>
                <span class="rating-count-text">(${product.reviews.toLocaleString()} Customer Ratings & Reviews)</span>
            </div>
            
            <div class="price-row" style="margin-bottom: 20px;">
                <span class="card-price" style="font-size: 1.6rem;">₹${product.price.toLocaleString()}</span>
                <span class="card-mrp" style="font-size: 1.1rem;">₹${product.mrp.toLocaleString()}</span>
                <span class="card-discount" style="font-size: 1.1rem;">${discountPct}% off</span>
            </div>
            
            <hr>
            
            <p class="qv-desc">
                Experience ultra-premium packaging and commercial design with the new ${product.name}. Engineered for maximum durability and top performance. Complete with standard manufacturer warranty.
            </p>
            
            <div class="qv-actions">
                <button class="btn-qv-cart" onclick="quickViewAddToCart(${product.id})">
                    <i class="fa-solid fa-cart-plus"></i> Add Cargo to Cart
                </button>
                <button class="btn-qv-wishlist ${inWishlist ? 'active' : ''}" onclick="quickViewToggleWishlist(${product.id}, this)">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>
        </div>
    `;

    openModal("quickViewOverlay");
}

function quickViewAddToCart(productId) {
    addToCart(productId);
    closeModal("quickViewOverlay");
}

function quickViewToggleWishlist(productId, buttonEl) {
    toggleWishlist(productId);
    buttonEl.classList.toggle("active");
}

// --- 8. Simulated AWS Checkout Sandbox Flow ---
function startCheckout() {
    if (cart.length === 0) {
        triggerToast("Your cart is empty!");
        return;
    }

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    
    // Set pricing subtotals dynamically inside simulated modals
    document.getElementById("coSubtotal").innerText = `₹${subtotal.toLocaleString()}`;
    document.getElementById("coTotal").innerText = `₹${subtotal.toLocaleString()}`;
    document.getElementById("coPayTotal").innerText = `₹${subtotal.toLocaleString()}`;
    document.getElementById("invoiceTotal").innerText = `₹${subtotal.toLocaleString()}`;

    // Pre-fill fields dynamically from the active delivery location pin
    document.getElementById("coName").value = deliveryAddress.name;
    document.getElementById("coStreet").value = deliveryAddress.street;
    document.getElementById("coCity").value = deliveryAddress.city;
    document.getElementById("coPincode").value = deliveryAddress.pincode;

    setCheckoutStep(1);
    openModal("checkoutOverlay");
}

function setCheckoutStep(stepNum) {
    // Hide all step panels and indicators
    document.querySelectorAll(".checkout-step-panel").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".prog-step").forEach(s => s.classList.remove("active"));

    // Activate current
    document.getElementById(`checkoutStepPanel${stepNum}`).classList.add("active");
    for (let i = 1; i <= stepNum; i++) {
        document.getElementById(`progStep${i}`).classList.add("active");
    }
}

function handleShippingSubmit() {
    setCheckoutStep(2);
}

function handlePaymentAuthorize() {
    const authBtn = document.getElementById("btnPaymentAuthorize");
    const originalText = authBtn.innerHTML;
    
    // Trigger simulated server connection state
    authBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing AWS sandbox gateway...`;
    authBtn.disabled = true;

    setTimeout(() => {
        // Complete mock authorization callback
        authBtn.innerHTML = originalText;
        authBtn.disabled = false;
        
        // Generate a random mock invoice tracking code
        const randomInvoiceCode = `AWS-CV-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
        document.getElementById("invoiceId").innerText = randomInvoiceCode;
        
        // Write dynamic shipping fields to final taxonomy receipt
        document.getElementById("invoiceRecipient").innerText = deliveryAddress.name;
        document.getElementById("invoiceAddress").innerText = `${deliveryAddress.street}, ${deliveryAddress.city} ${deliveryAddress.pincode}`;
        
        // Dynamic dates
        const dateObj = new Date();
        const dateString = `${String(dateObj.getDate()).padStart(2,'0')}/${String(dateObj.getMonth()+1).padStart(2,'0')}/${dateObj.getFullYear()}`;
        document.getElementById("invoiceDate").innerText = dateString;

        setCheckoutStep(3);
    }, 2000);
}

// --- 9. POPUP Authentication Systems (Login & Register) ---
function setAuthPanel(panelName) {
    document.querySelectorAll(".auth-tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".auth-panel").forEach(p => p.classList.remove("active"));

    if (panelName === "login") {
        document.getElementById("tabLoginBtn").classList.add("active");
        document.getElementById("loginPanel").classList.add("active");
    } else {
        document.getElementById("tabRegisterBtn").classList.add("active");
        document.getElementById("registerPanel").classList.add("active");
    }
}

function handleLoginSubmit() {
    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPass").value;
    
    // Check in simulated database
    const user = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (user) {
        if (user.pass !== pass) {
            triggerToast("Error: Incorrect password!");
            return;
        }
        loggedInUser = user;
    } else {
        // Dynamic Guest account creation fallback if email not pre-registered
        const namePart = email.split("@")[0];
        const cleanName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        loggedInUser = {
            name: cleanName,
            email: email,
            street: "Room 402, Cyber Heights Apartments",
            city: "Hyderabad",
            pincode: "500081"
        };
    }
    
    try {
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    } catch (e) {
        console.warn("localStorage loggedInUser write blocked:", e);
    }
    updateUserHeader();
    
    // Automatically sync both greeting name and delivery pin address details immediately!
    deliveryAddress = {
        name: loggedInUser.name,
        street: loggedInUser.street || "Room 402, Cyber Heights Apartments",
        city: loggedInUser.city || "Hyderabad",
        pincode: loggedInUser.pincode || "500081"
    };
    updateDeliveryPin();
    saveAddressState();
    
    closeModal("authOverlay");
    resetLoginForms();
    triggerToast(`Welcome back, ${loggedInUser.name}!`);
}

function handleRegisterSubmit() {
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const street = document.getElementById("regStreet").value.trim();
    const city = document.getElementById("regCity").value.trim();
    const pincode = document.getElementById("regPincode").value.trim();
    const pass = document.getElementById("regPass").value;
    const confirm = document.getElementById("regConfirm").value;

    if (pass !== confirm) {
        triggerToast("Error: Passwords do not match!");
        return;
    }

    if (registeredUsers.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        triggerToast("Error: Email is already registered!");
        return;
    }

    const newUser = { name, email, street, city, pincode, pass };
    registeredUsers.push(newUser);
    
    try {
        localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    } catch (e) {
        console.warn("localStorage registeredUsers write blocked:", e);
    }

    loggedInUser = newUser;
    try {
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    } catch (e) {
        console.warn("localStorage loggedInUser write blocked:", e);
    }
    updateUserHeader();
    
    // Automatically sync both greeting name and delivery pin address details immediately!
    deliveryAddress = { name, street, city, pincode };
    updateDeliveryPin();
    saveAddressState();
    
    closeModal("authOverlay");
    resetLoginForms();
    triggerToast(`Welcome, ${name}!`);
}

function updateUserHeader() {
    const userMenuBtn = document.getElementById("userMenuBtn");
    if (!userMenuBtn) return;
    
    const actionLine1 = userMenuBtn.querySelector(".action-line1");
    const actionLine2 = userMenuBtn.querySelector(".action-line2");
    
    if (loggedInUser) {
        if (actionLine1) actionLine1.innerText = `Hello, ${loggedInUser.name}`;
        if (actionLine2) actionLine2.innerHTML = `Profile Active <i class="fa-solid fa-caret-down"></i>`;
    } else {
        if (actionLine1) actionLine1.innerText = `Hello, Sign In`;
        if (actionLine2) actionLine2.innerHTML = `Account & Lists <i class="fa-solid fa-caret-down"></i>`;
    }
}

function resetLoginForms() {
    document.getElementById("loginForm").reset();
    document.getElementById("registerForm").reset();
}

// --- 9.5 Set Delivery Location Custom Systems ---
function updateDeliveryPin() {
    const pinRecipient = document.getElementById("pinRecipient");
    const pinLocation = document.getElementById("pinLocation");
    
    if (pinRecipient) {
        pinRecipient.innerText = `Deliver to ${deliveryAddress.name}`;
    }
    if (pinLocation) {
        pinLocation.innerText = `${deliveryAddress.city} ${deliveryAddress.pincode}`;
    }
}

function openLocationModal() {
    const locName = document.getElementById("locName");
    const locStreet = document.getElementById("locStreet");
    const locCity = document.getElementById("locCity");
    const locPincode = document.getElementById("locPincode");
    
    if (locName) locName.value = deliveryAddress.name;
    if (locStreet) locStreet.value = deliveryAddress.street;
    if (locCity) locCity.value = deliveryAddress.city;
    if (locPincode) locPincode.value = deliveryAddress.pincode;
    
    openModal("locationOverlay");
}

function handleLocationSubmit() {
    const name = document.getElementById("locName").value.trim();
    const street = document.getElementById("locStreet").value.trim();
    const city = document.getElementById("locCity").value.trim();
    const pincode = document.getElementById("locPincode").value.trim();
    
    deliveryAddress = { name, street, city, pincode };
    saveAddressState();
    updateDeliveryPin();
    
    closeModal("locationOverlay");
    triggerToast(`Location successfully set for ${name}!`);
}

// --- 10. Drawer & Modal Toggle Actions ---
function openDrawer(id) {
    document.getElementById(id).classList.add("active");
}

function closeDrawer(id) {
    document.getElementById(id).classList.remove("active");
}

function openModal(id) {
    document.getElementById(id).classList.add("active");
}

function closeModal(id) {
    document.getElementById(id).classList.remove("active");
}

// --- 11. Custom Banner Carousel AutoPlay Loop ---
function showCarouselSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".carousel-dots .dot");
    
    if (!slides.length) return;
    
    if (index >= slides.length) activeCarouselIndex = 0;
    else if (index < 0) activeCarouselIndex = slides.length - 1;
    else activeCarouselIndex = index;

    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[activeCarouselIndex].classList.add("active");
    dots[activeCarouselIndex].classList.add("active");
}

let carouselTimer;
function startCarouselAutoPlay() {
    clearInterval(carouselTimer);
    carouselTimer = setInterval(() => {
        showCarouselSlide(activeCarouselIndex + 1);
    }, 5000);
}

// --- 12. Floating Toast alerts ---
function triggerToast(text) {
    const toast = document.getElementById("toastNotification");
    const textEl = document.getElementById("toastText");
    if (!toast || !textEl) return;

    textEl.innerText = text;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}

// --- 13. DOM Event Bindings ---
function setupEventBindings() {
    // 13.1 Search action keys
    document.getElementById("searchInput").addEventListener("keyup", (e) => {
        const val = e.target.value;
        document.getElementById("clearSearchBtn").style.display = val.length > 0 ? "block" : "none";
        
        // Live search filters keyup
        filters.search = val;
        currentPage = 1;
        renderProducts();
    });

    document.getElementById("clearSearchBtn").addEventListener("click", () => {
        document.getElementById("searchInput").value = "";
        document.getElementById("sidebarSearch").value = "";
        document.getElementById("clearSearchBtn").style.display = "none";
        filters.search = "";
        currentPage = 1;
        renderProducts();
    });

    document.getElementById("searchSubmitBtn").addEventListener("click", () => {
        scrollToCatalogSection();
    });

    // 13.2 Sidebar Filters binding
    document.getElementById("sidebarSearch").addEventListener("keyup", (e) => {
        filters.search = e.target.value;
        document.getElementById("searchInput").value = e.target.value;
        document.getElementById("clearSearchBtn").style.display = e.target.value.length > 0 ? "block" : "none";
        currentPage = 1;
        renderProducts();
    });

    document.getElementById("priceRange").addEventListener("input", (e) => {
        const val = Number(e.target.value);
        filters.priceMax = val;
        document.getElementById("priceLimitVal").innerText = `Max: ₹${val.toLocaleString()}`;
        currentPage = 1;
        renderProducts();
    });

    document.querySelectorAll('input[name="ratingFilter"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            filters.minRating = Number(e.target.value);
            currentPage = 1;
            renderProducts();
        });
    });

    // Departments checkbox checks
    const deptCheckboxes = document.querySelectorAll(".dept-checkbox");
    deptCheckboxes.forEach(box => {
        box.addEventListener("change", () => {
            const checked = Array.from(deptCheckboxes)
                                 .filter(b => b.checked)
                                 .map(b => b.value);
            filters.departments = checked;
            currentPage = 1;
            renderProducts();
        });
    });

    // Reset filters
    document.getElementById("clearAllFiltersBtn").addEventListener("click", () => {
        filters.search = "";
        filters.category = "all";
        filters.priceMax = 100000;
        filters.minRating = 0;
        filters.departments = ["electronics", "fashion", "gaming", "home", "accessories"];

        // Reset DOM elements values
        document.getElementById("searchInput").value = "";
        document.getElementById("sidebarSearch").value = "";
        document.getElementById("clearSearchBtn").style.display = "none";
        document.getElementById("priceRange").value = 100000;
        document.getElementById("priceLimitVal").innerText = "Max: ₹100,000";
        document.querySelector('input[name="ratingFilter"][value="0"]').checked = true;
        deptCheckboxes.forEach(b => b.checked = true);

        // Reset Category Strip pills active
        document.querySelectorAll(".strip-item").forEach(t => t.classList.remove("active"));
        const allTab = document.querySelector('.strip-item[data-category="all"]');
        if (allTab) allTab.classList.add("active");

        currentPage = 1;
        renderProducts();
        triggerToast("All catalog filters cleared!");
    });

    // 13.3 Header actions triggers
    document.getElementById("userMenuBtn").addEventListener("click", () => {
        setAuthPanel("login");
        openModal("authOverlay");
    });

    document.getElementById("deliveryPinBtn").addEventListener("click", openLocationModal);

    document.getElementById("wishlistToggleBtn").addEventListener("click", () => {
        openDrawer("wishlistOverlay");
    });

    document.getElementById("cartToggleBtn").addEventListener("click", () => {
        openDrawer("cartOverlay");
    });

    // Drawers close clicks
    document.getElementById("cartCloseBtn").addEventListener("click", () => closeDrawer("cartOverlay"));
    document.getElementById("wishlistCloseBtn").addEventListener("click", () => closeDrawer("wishlistOverlay"));
    
    // Cart operations buttons
    document.getElementById("clearCartBtn").addEventListener("click", clearCart);
    document.getElementById("addAllWishlistToCartBtn").addEventListener("click", addAllWishlistToCart);
    document.getElementById("checkoutBtn").addEventListener("click", startCheckout);

    // Modal close clicks
    document.getElementById("qvCloseBtn").addEventListener("click", () => closeModal("quickViewOverlay"));
    document.getElementById("authCloseBtn").addEventListener("click", () => closeModal("authOverlay"));
    document.getElementById("checkoutCloseBtn").addEventListener("click", () => closeModal("checkoutOverlay"));
    document.getElementById("locCloseBtn").addEventListener("click", () => closeModal("locationOverlay"));

    // 13.4 Banner Carousel controls
    document.getElementById("carouselPrevBtn").addEventListener("click", () => {
        showCarouselSlide(activeCarouselIndex - 1);
        startCarouselAutoPlay();
    });

    document.getElementById("carouselNextBtn").addEventListener("click", () => {
        showCarouselSlide(activeCarouselIndex + 1);
        startCarouselAutoPlay();
    });

    document.querySelectorAll(".carousel-dots .dot").forEach(dot => {
        dot.addEventListener("click", (e) => {
            const idx = Number(e.target.dataset.index);
            showCarouselSlide(idx);
            startCarouselAutoPlay();
        });
    });

    document.querySelectorAll(".scroll-to-catalog").forEach(btn => {
        btn.addEventListener("click", scrollToCatalogSection);
    });

    // 13.5 Theme switches toggles
    document.getElementById("themeToggleBtn").addEventListener("click", () => {
        const currentTheme = document.documentElement.className === "dark" ? "light" : "dark";
        document.documentElement.className = currentTheme;
        try {
            localStorage.setItem("theme", currentTheme);
        } catch (e) {
            console.warn("localStorage theme write blocked:", e);
        }
        updateThemeIcon(currentTheme);
        triggerToast(`Switched theme to ${currentTheme.toUpperCase()} mode!`);
    });



    // 13.6 Category strip clicks
    const stripItems = document.querySelectorAll(".strip-item");
    stripItems.forEach(item => {
        item.addEventListener("click", (e) => {
            stripItems.forEach(t => t.classList.remove("active"));
            item.classList.add("active");
            
            const category = item.dataset.category;
            filters.category = category;
            currentPage = 1;
            renderProducts();
            scrollToCatalogSection();
        });
    });

    // 13.7 Modal form submissions bindings
    document.getElementById("tabLoginBtn").addEventListener("click", () => setAuthPanel("login"));
    document.getElementById("tabRegisterBtn").addEventListener("click", () => setAuthPanel("register"));

    document.getElementById("loginForm").addEventListener("submit", handleLoginSubmit);
    document.getElementById("registerForm").addEventListener("submit", handleRegisterSubmit);
    document.getElementById("locationForm").addEventListener("submit", handleLocationSubmit);

    // 13.8 Checkout flow panels control
    document.getElementById("checkoutFormStep1").addEventListener("submit", handleShippingSubmit);
    document.getElementById("checkoutFormStep2").addEventListener("submit", handlePaymentAuthorize);
    document.getElementById("btnPaymentBack").addEventListener("click", () => setCheckoutStep(1));
    document.getElementById("btnCheckoutFinish").addEventListener("click", () => {
        closeModal("checkoutOverlay");
        // Empty cart on order confirmation success
        cart = [];
        saveState("cart");
        renderCart();
        updateBadges();
    });

    // 13.9 Custom Back to Top button scroll triggers
    window.addEventListener("scroll", () => {
        const btn = document.getElementById("backToTopBtn");
        if (window.scrollY > 300) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    });

    document.getElementById("backToTopBtn").addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 13.10 Newsletter subscription button
    document.getElementById("newsletterSubscribeBtn").addEventListener("click", () => {
        const email = document.getElementById("newsletterEmail").value.trim();
        if (email === "") {
            alert("Please provide a valid email address.");
        } else {
            alert("🎉 Welcome to the CartVerse Elite Circle! Real-time sales warnings will route to your inbox.");
            document.getElementById("newsletterEmail").value = "";
        }
    });

    // 13.11 logo click resets
    document.getElementById("logoBtn").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.getElementById("clearAllFiltersBtn").click();
    });

    // 13.12 Close modals clicking outside card content
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            e.target.classList.remove("active");
        }
    });
}

// 14. Helper LocalStorage Utilities
function saveState(key) {
    try {
        localStorage.setItem(`${key}Products`, JSON.stringify(window[key]));
    } catch (e) {
        console.warn(`Failed to save ${key} to localStorage:`, e);
    }
}

function saveAddressState() {
    try {
        localStorage.setItem("deliveryAddress", JSON.stringify(deliveryAddress));
    } catch (e) {
        console.warn("Failed to save deliveryAddress to localStorage:", e);
    }
}

// Greet console verification loads
console.log("🚀 CartVerse Loaded Successfully");
