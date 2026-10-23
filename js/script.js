/* =====================================================
   DASTARKHWAN ZAIQA — script.js
   Cards dynamic hain: MENU array se JS khud banata hai.
   ===================================================== */

/* ---------- 1. SITE SETTINGS (apni details yahan badlein) ---------- */
const SITE = {
  name: "Dastarkhwan Zaiqa",
  usePhotos: true,                          // true = internet ki food photos, false = hamari illustrations
  whatsapp: "923286754385",                 // WhatsApp number (country code ke saath, bina +)
  phoneShow: "0328-6754385",                // jo number screen par dikhana hai
  instagram: "https://www.instagram.com/muhammadarslan25971/",
  address: "Military Road, Sukkur, Sindh, Pakistan",  // <-- dukaan ka address
  mapQuery: "Military Road, Sukkur, Pakistan",   // <-- Google map is jagah ko dikhaye ga
  hours: "12:00 PM – 12:00 AM (Daily)",
  delivery: 150,                            // delivery charges (Rs.)
  freeAbove: 3000,                          // is raqam se upar delivery free
  /* payment methods ki details (customer ko popup mein dikhti hain) */
  pay: {
    "Cash on Delivery": { icon: "fa-money-bill-wave", short: "COD", need: null,
      steps: ["Pay the rider in cash when your order arrives.", "We will call or WhatsApp you to confirm your order."] },
    "JazzCash": { icon: "fa-mobile-screen", short: "JazzCash", need: "Transaction ID (TID)",
      rows: [["Account Title", "Dastarkhwan Zaiqa"], ["JazzCash Number", "0328-6754385"]],
      steps: ["Open your JazzCash app and choose Send Money.", "Send the amount shown below to the number above.", "Enter the Transaction ID below."] },
    "EasyPaisa": { icon: "fa-wallet", short: "EasyPaisa", need: "Transaction ID (TID)",
      rows: [["Account Title", "Dastarkhwan Zaiqa"], ["EasyPaisa Number", "0328-6754385"]],
      steps: ["Open your EasyPaisa app and choose Send Money.", "Send the amount shown below to the number above.", "Enter the Transaction ID below."] },
    "Bank Transfer": { icon: "fa-building-columns", short: "Bank", need: "Reference No.",
      rows: [["Bank", "Meezan Bank"], ["Account Title", "Dastarkhwan Zaiqa"], ["Account No.", "0000-0000000000"], ["IBAN", "PK00MEZN0000000000000000"]],
      steps: ["Transfer the amount to the account above using your bank app.", "Enter the reference number below."] }
  }
};

/* ---------- 2. MENU DATA (naya dish add karna ho to yahan ek line badhayein) ---------- */
const MENU = [
 {
  "id": "chicken-biryani",
  "name": "Chicken Biryani",
  "cat": "Rice",
  "price": 650,
  "rating": 4.8,
  "tag": "Popular",
  "desc": "Aromatic basmati layered with spiced chicken, fried onions and fresh mint.",
  "img": "biryani.jpg",
  "kw": "biryani"
 },
 {
  "id": "sindhi-biryani",
  "name": "Sindhi Biryani",
  "cat": "Rice",
  "price": 780,
  "rating": 4.9,
  "tag": "Spicy",
  "desc": "Fiery Sindhi-style biryani with potatoes, plums and bold masala.",
  "img": "sindhi.jpg",
  "kw": "biryani,rice"
 },
 {
  "id": "mutton-pulao",
  "name": "Mutton Pulao",
  "cat": "Rice",
  "price": 950,
  "rating": 4.7,
  "tag": "",
  "desc": "Slow-cooked yakhni pulao with tender mutton and golden fried onions.",
  "img": "mutton-palao.jpg",
  "kw": "pilaf"
 },
 {
  "id": "chicken-karahi",
  "name": "Chicken Karahi",
  "cat": "Karahi",
  "price": 1450,
  "rating": 4.9,
  "tag": "Popular",
  "desc": "Wok-fired chicken in tomato, ginger and green chilli, finished with coriander.",
  "img": "karahi.jpg",
  "kw": "curry"
 },
 {
  "id": "mutton-namkeen-karahi",
  "name": "Mutton Namkeen Karahi",
  "cat": "Karahi",
  "price": 2400,
  "rating": 4.8,
  "tag": "Chef's Pick",
  "desc": "Pure desi ghee mutton karahi, simple, rich and full of flavour.",
  "img": "namkeen.jpg",
  "kw": "lamb,curry"
 },
 {
  "id": "nihari",
  "name": "Beef Nihari",
  "cat": "Karahi",
  "price": 1100,
  "rating": 4.7,
  "tag": "",
  "desc": "Overnight slow-cooked beef shank in a velvety, spiced gravy.",
  "img": "nehari.jpg",
  "kw": "stew"
 },
 {
  "id": "chicken-tikka-platter",
  "name": "Chicken Tikka Platter",
  "cat": "BBQ",
  "price": 1250,
  "rating": 4.8,
  "tag": "Popular",
  "desc": "Charcoal grilled chicken tikka with onion rings, lemon and mint chutney.",
  "img": "chikan.jpg",
  "kw": "tikka"
 },
 {
  "id": "seekh-kabab-platter",
  "name": "Seekh Kabab Platter",
  "cat": "BBQ",
  "price": 1100,
  "rating": 4.7,
  "tag": "",
  "desc": "Juicy minced beef seekh kababs, hand-rolled and grilled over coal.",
  "img": "tikka.jpg",
  "kw": "kebab"
 },
 {
  "id": "malai-boti",
  "name": "Malai Boti",
  "cat": "BBQ",
  "price": 1350,
  "rating": 4.9,
  "tag": "New",
  "desc": "Creamy marinated chicken boti, soft, smoky and melt-in-mouth.",
  "img": "malai-boti.jpg",
  "kw": "bbq"
 },
 {
  "id": "garlic-butter-naan",
  "name": "Garlic Butter Naan",
  "cat": "Bread",
  "price": 120,
  "rating": 4.6,
  "tag": "",
  "desc": "Tandoor-fresh naan brushed with garlic butter and coriander.",
  "img": "naan.jpg",
  "kw": "naan"
 },
 {
  "id": "creamy-chicken-pasta",
  "name": "Creamy Chicken Pasta",
  "cat": "Pasta",
  "price": 950,
  "rating": 4.6,
  "tag": "",
  "desc": "Silky white sauce pasta with grilled chicken and parmesan.",
  "img": "pasta.jpg",
  "kw": "pasta"
 },
 {
  "id": "spaghetti-rosa",
  "name": "Spaghetti Rosa",
  "cat": "Pasta",
  "price": 890,
  "rating": 4.5,
  "tag": "New",
  "desc": "Spaghetti in a tangy tomato-cream rosa sauce with fresh basil.",
  "img": "spa.jpg",
  "kw": "spaghetti"
 },

// I  leave work hear  
 {
  "id": "gulab-jamun",
  "name": "Gulab Jamun",
  "cat": "Desserts",
  "price": 350,
  "rating": 4.8,
  "tag": "Popular",
  "desc": "Warm khoya dumplings soaked in cardamom sugar syrup.",
  "img": "gulaab.jpg",
  "kw": "gulabjamun"
 },
 {
  "id": "rice-kheer",
  "name": "Rice Kheer",
  "cat": "Desserts",
  "price": 300,
  "rating": 4.7,
  "tag": "",
  "desc": "Creamy rice pudding with saffron, almonds and pistachios.",
  "img": "kheer.jpg",
  "kw": "ricepudding"
 },
 {
  "id": "gajar-halwa",
  "name": "Gajar Halwa",
  "cat": "Desserts",
  "price": 400,
  "rating": 4.8,
  "tag": "",
  "desc": "Slow-cooked carrot halwa in desi ghee with dry fruits.",
  "img": "gajer.jpg",
  "kw": "halwa"
 },
 {
  "id": "mango-lassi",
  "name": "Mango Lassi",
  "cat": "Drinks",
  "price": 280,
  "rating": 4.7,
  "tag": "",
  "desc": "Chilled thick lassi blended with ripe mango pulp.",
  "img": "mango.jpg",
  "kw": "lassi"
 },
 {
  "id": "kashmiri-chai",
  "name": "Kashmiri Chai",
  "cat": "Drinks",
  "price": 250,
  "rating": 4.6,
  "tag": "",
  "desc": "Pink noon chai with cardamom, finished with crushed pistachio.",
  "img": "kash.jpg",
  "kw": "chai"
 },
 {
  "id": "rooh-afza-sharbat",
  "name": "Rooh Afza Sharbat",
  "cat": "Drinks",
  "price": 220,
  "rating": 4.5,
  "tag": "",
  "desc": "Rose-scented classic sharbat served ice cold with mint.",
  "img": "roohafza.jpg",
  "kw": "juice"
 }
];

/* ---------- 3. CHHOTE HELPERS ---------- */
/* IMAGE: asli food photo (internet se). Apni photo lagani ho to MENU mein us dish par  "photo": "images/meri-photo.jpg"  likh dein.
   Photo load na ho to hamari illustration (images/ folder) khud aa jati hai. */
const photo = m => m.photo || (SITE.usePhotos ? `https://loremflickr.com/640/640/${m.kw}?lock=${MENU.indexOf(m) + 11}` : "images/" + m.img);
const imgTag = (m, cls = "") => `<img ${cls ? `class="${cls}" ` : ""}src="${photo(m)}" alt="${m.name}" loading="lazy" onerror="this.onerror=null;this.src='images/${m.img}'">`;
const setImg = (el, m) => { if (!el) return; el.onerror = () => { el.onerror = null; el.src = "images/" + m.img; }; el.src = photo(m); };
const $ = (s, el = document) => el.querySelector(s);                 // ek element dhoondo
const $$ = (s, el = document) => [...el.querySelectorAll(s)];       // saare elements dhoondo
const rs = n => "Rs. " + Number(n).toLocaleString("en-US");          // 1450 -> Rs. 1,450
const stars = n => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));
const CATS = [...new Set(MENU.map(m => m.cat))];                     // categories automatic
const CAT_ICON = { BBQ: "fa-fire-flame-curved", Karahi: "fa-bowl-food", Rice: "fa-bowl-rice", Bread: "fa-bread-slice", Pasta: "fa-utensils", Desserts: "fa-ice-cream", Drinks: "fa-martini-glass-citrus" };

/* ---------- 4. CARD BANANE WALA FUNCTION (ek dish = ek card) ---------- */
function cardHTML(m, i = 0, big = false) {
  return `
  <!-- CARD: ${m.name} -->
  <article class="card${big ? " big" : ""}" style="--i:${i}">
    <div class="c-img">${imgTag(m)}${m.tag ? `<span class="c-tag">${m.tag}</span>` : ""}</div>
    <div class="c-body">
      <span class="c-cat">${m.cat}</span>
      <h3>${m.name}</h3>
      <p>${m.desc}</p>
      <div class="c-meta"><span class="stars">${stars(m.rating)}</span><b class="c-price">${rs(m.price)}</b></div>
      <button class="btn btn-sm" data-order="${m.id}"><i class="fa-solid fa-bag-shopping"></i> Order Now</button>
    </div>
  </article>`;
}
/* cards ki list kisi box mein daalta hai (bento = true to kuch cards bare banate hain) */
function renderCards(box, list, bento = false) {
  box.innerHTML = list.length
    ? list.map((m, i) => cardHTML(m, i, bento && list.length > 5 && i % 7 === 0)).join("")
    : `<p class="empty">No dishes found. Try searching for something else.</p>`;
}

/* ---------- 5. NAVBAR + BACK TO TOP BUTTON ---------- */
function initNav() {
  /* Back to top: 300px scroll ke baad button dikhta hai, click par page seedha upar chala jata hai */
  const up = $("#toTop");
  if (up) {
    window.addEventListener("scroll", () => up.classList.toggle("show", window.scrollY > 300), { passive: true });
    up.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const b = $("#burger"), m = $("#menu");
  if (b) b.onclick = () => m.classList.toggle("open");
  $$("#menu a").forEach(a => a.addEventListener("click", () => m.classList.remove("open")));
}

/* ---------- 6. HOME: HERO SLIDER (3 slides, khud badalte hain) ---------- */
const HERO = [
  { id: "sindhi-biryani", t: "Where Taste Meets <em>Tradition</em>", p: "Authentic desi flavours, slow-cooked with love and served with royal dastarkhwan style." },
  { id: "chicken-karahi", t: "Sizzling <em>Karahi</em>, Desi Style", p: "Wok-fired in pure desi masala. Piping hot, served straight to your table." },
  { id: "malai-boti", t: "Charcoal Grilled <em>Perfection</em>", p: "Creamy malai boti, smoky tikka and fresh naan. The real taste of BBQ." }
];
function initHero() {
  const box = $("#hero"); if (!box) return;
  /* har slide ka HTML: left text, right dish image + steam */
  box.innerHTML = HERO.map((h, i) => {
    const m = MENU.find(x => x.id === h.id);
    return `<div class="h-slide${i ? "" : " on"}"><div class="h-in">
      <div class="h-txt"><small>Welcome to ${SITE.name}</small><h1>${h.t}</h1><p>${h.p}</p>
        <div class="h-btns"><button class="btn" data-order="${m.id}"><i class="fa-solid fa-bag-shopping"></i> Order ${m.name}</button><a class="btn btn-o" href="menu.html">View Menu</a></div></div>
      <div class="h-dish"><i class="steam"></i><i class="steam"></i><i class="steam"></i>${imgTag(m)}</div>
    </div></div>`;
  }).join("") +
  /* neeche arrows + dots */
  `<div class="h-ctrl"><button class="h-arrow" id="hPrev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>
   <div class="h-dots">${HERO.map((_, i) => `<button class="h-dot${i ? "" : " on"}" data-i="${i}" aria-label="Slide ${i + 1}"></button>`).join("")}</div>
   <button class="h-arrow" id="hNext" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button></div>`;
  let cur = 0, timer;
  const go = n => {
    cur = (n + HERO.length) % HERO.length;
    $$(".h-slide", box).forEach((s, i) => s.classList.toggle("on", i === cur));
    $$(".h-dot", box).forEach((d, i) => d.classList.toggle("on", i === cur));
  };
  const auto = () => { clearInterval(timer); timer = setInterval(() => go(cur + 1), 6000); };
  $("#hPrev").onclick = () => { go(cur - 1); auto(); };
  $("#hNext").onclick = () => { go(cur + 1); auto(); };
  $$(".h-dot", box).forEach(d => d.onclick = () => { go(+d.dataset.i); auto(); });
  auto();
}

/* ---------- 7. HOME: baaki sections (featured, signature cards, categories, chef) ---------- */
function initHome() {
  /* Featured banner: Chef's Pick wali dish */
  const f = $("#featured");
  if (f) {
    const m = MENU.find(x => x.tag === "Chef's Pick") || MENU[0];
    f.innerHTML = `<div class="f-img">${imgTag(m)}</div>
      <div><small>Chef's Signature</small><h2>${m.name}</h2><p>${m.desc}</p><span class="f-price">${rs(m.price)}</span>
      <button class="btn" data-order="${m.id}"><i class="fa-solid fa-bag-shopping"></i> Order Now</button></div>`;
  }
  /* Signature dishes: Popular tag wale pehle 4 cards */
  const s = $("#signature");
  if (s) renderCards(s, MENU.filter(m => m.tag === "Popular").slice(0, 4));
  /* Category tiles */
  const c = $("#catRow");
  if (c) c.innerHTML = CATS.map(k => `<a class="cat-tile" href="menu.html?cat=${k}"><i class="fa-solid ${CAT_ICON[k] || "fa-utensils"}"></i><b>${k}</b><span>${MENU.filter(m => m.cat === k).length} dishes</span></a>`).join("");
  /* Chef preview: 2 images */
  const a = $("#chefA"), b = $("#chefB");
  setImg(a, MENU.find(x => x.id === "sindhi-biryani"));
  setImg(b, MENU.find(x => x.id === "gulab-jamun"));
  setImg($("#aboutImg"), MENU.find(x => x.id === "mutton-namkeen-karahi"));   // about page ki image
}

/* ---------- 8. STATS: numbers 0 se ginti shuru karte hain ---------- */
function initStats() {
  const vals = { dishes: MENU.length, cats: CATS.length, from: Math.min(...MENU.map(m => m.price)), free: SITE.freeAbove };
  $$("[data-stat]").forEach(el => {
    const end = vals[el.dataset.stat]; if (end === undefined) return;
    const run = () => { let n = 0; const step = Math.max(1, Math.ceil(end / 40));
      const t = setInterval(() => { n = Math.min(end, n + step); el.textContent = n.toLocaleString("en-US"); if (n >= end) clearInterval(t); }, 30); };
    new IntersectionObserver((e, o) => { if (e[0].isIntersecting) { run(); o.disconnect(); } }).observe(el);
  });
}

/* ---------- 9. MENU PAGE: filter + search + sort ---------- */
function initMenu() {
  const grid = $("#menuGrid"); if (!grid) return;
  let cat = new URLSearchParams(location.search).get("cat") || "All";
  const chips = $("#chips"), q = $("#q"), sort = $("#sort");
  const draw = () => {
    let list = MENU.filter(m => (cat === "All" || m.cat === cat) && (m.name + m.desc + m.cat).toLowerCase().includes(q.value.trim().toLowerCase()));
    if (sort.value === "low") list.sort((a, b) => a.price - b.price);
    if (sort.value === "high") list.sort((a, b) => b.price - a.price);
    if (sort.value === "rate") list.sort((a, b) => b.rating - a.rating);
    renderCards(grid, list, true);
    $$(".chip", chips).forEach(c => c.classList.toggle("on", c.dataset.c === cat));
    $("#count").textContent = list.length + " dishes";
  };
  chips.innerHTML = ["All", ...CATS].map(k => `<button class="chip" data-c="${k}">${k}</button>`).join("");
  chips.onclick = e => { const b = e.target.closest(".chip"); if (b) { cat = b.dataset.c; draw(); } };
  q.oninput = draw; sort.onchange = draw; draw();
}

/* ---------- 10. GALLERY: masonry + lightbox ---------- */
function initGallery() {
  const g = $("#gallery"); if (!g) return;
  const shapes = ["tall", "sq", "wide", "sq", "tall", "wide", "sq", "tall"];       // alag alag size = mix look
  g.innerHTML = MENU.map((m, i) => `<div class="g-item ${shapes[i % shapes.length]}" data-id="${m.id}">${imgTag(m)}<span>${m.name}</span></div>`).join("");
  const lb = $("#lb");
  g.onclick = e => {
    const it = e.target.closest(".g-item"); if (!it) return;
    const m = MENU.find(x => x.id === it.dataset.id);
    setImg($("#lbImg"), m); $("#lbName").textContent = m.name + " — " + rs(m.price);
    $("#lbOrder").dataset.order = m.id; lb.classList.add("show");
  };
  const close = () => lb.classList.remove("show");
  $("#lbClose").onclick = close; lb.onclick = e => { if (e.target === lb) close(); };
  $("#lbOrder").addEventListener("click", close);
}

/* ---------- 11. SITE DETAILS (address/phone/hours/map har jagah automatic) ---------- */
function initSite() {
  $$("[data-site='address']").forEach(e => e.textContent = SITE.address);
  $$("[data-site='phone']").forEach(e => e.textContent = SITE.phoneShow);
  $$("[data-site='hours']").forEach(e => e.textContent = SITE.hours);
  const map = $("#mapFrame");
  if (map) map.src = "https://www.google.com/maps?q=" + encodeURIComponent(SITE.mapQuery) + "&output=embed";
}

/* ---------- 12. ORDER POPUP ---------- */
let cur = null, qty = 1, spice = "Medium", pay = "Cash on Delivery";
const totals = () => { const sub = cur.price * qty, del = sub >= SITE.freeAbove ? 0 : SITE.delivery; return { sub, del, total: sub + del }; };

/* popup kholo: kisi bhi [data-order="dish-id"] button se */
function openOrder(id) {
  cur = MENU.find(m => m.id === id); if (!cur) return;
  qty = 1; spice = "Medium"; pay = "Cash on Delivery";
  const saved = JSON.parse(localStorage.getItem("dz_cust") || "{}");               // pichli dafa ka naam/phone yaad rakhta hai
  $("#oName").value = saved.name || ""; $("#oPhone").value = saved.phone || ""; $("#oAddr").value = saved.addr || ""; $("#oNote").value = "";
  setImg($("#oImg"), cur); $("#oCat").textContent = cur.cat; $("#oTitle").textContent = cur.name; $("#oPrice").textContent = rs(cur.price);
  $("#spiceRow").style.display = ["Desserts", "Drinks", "Bread"].includes(cur.cat) ? "none" : "block";
  $$("#spice .chip").forEach(c => c.classList.toggle("on", c.dataset.s === spice));
  $$(".pay-tab").forEach(t => t.classList.toggle("on", t.dataset.pay === pay));
  $("#oErr").textContent = ""; $("#oForm").hidden = false; $("#oDone").hidden = true;
  update(); showPay();
  $("#omodal").classList.add("show"); document.body.classList.add("lock");
}
function closeOrder() { $("#omodal").classList.remove("show"); document.body.classList.remove("lock"); }

/* quantity aur total update */
function update() {
  const t = totals();
  $("#qVal").textContent = qty;
  $("#sSub").textContent = rs(t.sub); $("#sDel").textContent = t.del ? rs(t.del) : "Free"; $("#sTot").textContent = rs(t.total);
  showPay(true);
}
/* payment method ki details dikhao */
function showPay(keep) {
  const c = SITE.pay[pay], old = $("#txn") ? $("#txn").value : "";
  $("#payInfo").innerHTML = `<h4><i class="fa-solid ${c.icon}"></i> ${pay.toUpperCase()}</h4>` +
    (c.rows || []).map(r => `<div class="rw"><span>${r[0]}</span><b>${r[1]}</b></div>`).join("") +
    `<div class="rw"><span>${c.need ? "Amount to Send" : "Pay on Delivery"}</span><b>${rs(totals().total)}</b></div>` +
    `<ol>${c.steps.map(s => `<li>${s}</li>`).join("")}</ol>` + (c.need ? `<input id="txn" placeholder="${c.need}">` : "");
  if (keep && c.need && $("#txn")) $("#txn").value = old;
}
/* order confirm: check karo, save karo, WhatsApp button banao */
function confirmOrder() {
  const name = $("#oName").value.trim(), phone = $("#oPhone").value.trim(), addr = $("#oAddr").value.trim();
  const c = SITE.pay[pay], tx = $("#txn") ? $("#txn").value.trim() : "";
  if (!name || phone.replace(/\D/g, "").length < 10 || !addr) return $("#oErr").textContent = "Please enter your name, a valid phone number and your address.";
  if (c.need && !tx) return $("#oErr").textContent = "Please enter your " + c.need + ".";
  const t = totals(), id = "DZ" + Date.now().toString().slice(-6), note = $("#oNote").value.trim();
  const hot = $("#spiceRow").style.display !== "none" ? ` (${spice})` : "";
  localStorage.setItem("dz_cust", JSON.stringify({ name, phone, addr }));
  const orders = JSON.parse(localStorage.getItem("dz_orders") || "[]");
  orders.push({ id, item: cur.name, qty, total: t.total, pay, name, phone, addr, at: Date.now() }); localStorage.setItem("dz_orders", JSON.stringify(orders));
  /* WhatsApp message jo owner ko jayega */
  const msg = [`*New Order ${id}* - ${SITE.name}`, `${qty} x ${cur.name}${hot}`, note ? `Note: ${note}` : "", `Total: ${rs(t.total)} (delivery ${t.del ? rs(t.del) : "free"})`,
    `Payment: ${pay}${tx ? " | " + tx : ""}`, `Name: ${name}`, `Phone: ${phone}`, `Address: ${addr}`].filter(Boolean).join("\n");
  $("#doneId").textContent = id;
  $("#doneBox").innerHTML = `<b>${qty} × ${cur.name}</b>${hot}<br>Total: <b>${rs(t.total)}</b> · ${pay}<br>Deliver to: ${addr}`;
  $("#doneWa").href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
  $("#oForm").hidden = true; $("#oDone").hidden = false;
}
function initOrder() {
  if (!$("#omodal")) return;
  /* kisi bhi order button par click = popup khulega */
  document.addEventListener("click", e => { const b = e.target.closest("[data-order]"); if (b) openOrder(b.dataset.order); });
  $("#oClose").onclick = closeOrder; $("#doneClose").onclick = closeOrder;
  $("#omodal").addEventListener("click", e => { if (e.target.id === "omodal") closeOrder(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeOrder(); });
  $("#qMinus").onclick = () => { if (qty > 1) { qty--; update(); } };           // quantity kam
  $("#qPlus").onclick = () => { if (qty < 20) { qty++; update(); } };           // quantity zyada
  $("#spice").onclick = e => { const b = e.target.closest(".chip"); if (!b) return; spice = b.dataset.s; $$("#spice .chip").forEach(c => c.classList.toggle("on", c === b)); };
  $("#payTabs").onclick = e => { const b = e.target.closest(".pay-tab"); if (!b) return; pay = b.dataset.pay; $$(".pay-tab").forEach(t => t.classList.toggle("on", t === b)); showPay(); };
  $("#oConfirm").onclick = confirmOrder;
}

/* ---------- 13. START: sab kuch chalao ---------- */
initNav(); initHero(); initHome(); initStats(); initMenu(); initGallery(); initSite(); initOrder();

/* ---------- 14. SCROLL ANIMATION (AOS library). Library na chale to site normal rahe ---------- */
if (window.AOS) { AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 }); window.addEventListener("load", () => AOS.refreshHard()); }
else $$("[data-aos]").forEach(el => el.removeAttribute("data-aos"));
