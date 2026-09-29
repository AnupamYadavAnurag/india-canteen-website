/*
  INDIA CANTEEN - MENU + CART + BILL + WHATSAPP
  ------------------------------------------------
  IMPORTANT: Replace WHATSAPP_NUMBER with the canteen's WhatsApp number.
  Format: country code + number, without +, spaces or hyphens.
  Example for India: 919876543210
*/

const WHATSAPP_NUMBER = "919063009464";

const menu = [
  {
    category:"Rolls", items:[
      ["Cheese Melt Roll",100,"Soft roll with oozing cheese."],
      ["Crunchy Veg Roll",120,"Stuffed with crisp veggies and sauces."],
      ["Anda-Cheese Roll",130,"Perfect mix of egg and melted cheese."],
      ["Tangy Paneer Roll",130,"Paneer and spices wrapped in delicious wrap."],
      ["Masala Chicken Roll",140,"Desi-style spicy chicken roll."]
    ]
  },
  {
    category:"Pizzas", items:[
      ["Cheese Overload Pizza",150,"Triple cheese, melty and rich."],
      ["Triple C Pizza",180,"Cheese, corn, and capsicum perfection."],
      ["Paneer Tandoori Pizza",200,"Smoky paneer with tandoor sauce."],
      ["Chicken Patakha Pizza",220,"Spicy chicken pizza with desi flair."],
      ["Veggie Loaded Pizza",210,"Classic pizza with olives and jalapeños."]
    ]
  },
  {
    category:"Pasta", items:[
      {name:"Junglee Red Pasta",variants:[["Veg",160],["Chicken",190]],desc:"Spicy tomato-based pasta full of flavor."},
      {name:"Cheese Overload Pasta",variants:[["Veg",150],["Chicken",180]],desc:"Creamy white sauce pasta with parmesan."},
      {name:"Creamy Blush",variants:[["Veg",200],["Chicken",215]],desc:"Rich pink sauce pasta with herbs and cheese."}
    ]
  },
  {
    category:"Chinese – Gravy", items:[
      ["Veg Manchurian Magic",150,"Veg balls tossed in classic Manchurian sauce."],
      ["Paneer Manchurian Masti",190,"Paneer cubes in spicy Manchurian gravy."],
      ["Chilli Paneer Blast",210,"Paneer tossed in hot sauce with onions & capsicum."],
      ["Chicken Manchurian Express",230,"Juicy chicken chunks in tangy Manchurian gravy."],
      ["Hot Chilli Chicken",230,"Fiery chicken tossed in chilli sauce with onions & capsicum."],
      ["Chilli Mushroom Delight",200,"Mushrooms in spicy Chinese-style sauce."]
    ]
  },
  {
    category:"Chinese – Chowmein", items:[
      {name:"Street-Style Chowmein",variants:[["Veg",130],["Egg",150],["Paneer",170],["Chicken",180]],desc:"Street-style noodles with your choice of protein."},
      {name:"Sizzlin’ Szechuan",variants:[["Veg",150],["Egg",170],["Paneer",190],["Chicken",200]],desc:"Spicy Szechuan noodles with your choice of protein."}
    ]
  },
  {
    category:"Chinese – Rice", items:[
      {name:"Street-Style Fried Rice",variants:[["Veg",130],["Egg",150],["Paneer",170],["Chicken",180]],desc:"Street-style fried rice with your choice of protein."},
      {name:"Sizzlin’ Szechuan",variants:[["Veg",150],["Egg",170],["Paneer",190],["Chicken",200]],desc:"Spicy Szechuan fried rice with your choice of protein."}
    ]
  },
  {
    category:"Indian – Veg", items:[
      ["Tadka Dal Fry",130,"Homestyle dal with desi tadka."],
      ["Classic Kadhai Paneer",220,"Paneer cooked in rich kadhai masala."],
      ["Creamy Paneer Butter Masala",230,"Mildly spiced creamy paneer curry."],
      ["Chef’s Paneer Lababdar",240,"Paneer in a rich tomato-based gravy."],
      ["Spicy Handi Paneer",265,"Paneer cooked in spicy handi-style masala."],
      ["Paneer Do Pyaza",265,"Paneer curry with onions & spice."],
      ["Mix Veg Handi",200,"Seasonal vegetables in homestyle gravy."],
      ["Aloo Jeera / Aloo Matar",160,"Classic potato-based curries."]
    ]
  },
  {
    category:"Indian – Egg", items:[
      ["Anda Curry",170,"Spicy egg curry in desi gravy."],
      ["Anda Do Pyaza",190,"Egg curry cooked with onions & tomatoes."]
    ]
  },
  {
    category:"Indian – Chicken", items:[
      ["Zaika Chicken Curry",260,"Classic desi chicken curry."],
      ["Classic Kadhai Chicken",270,"Chicken cooked in thick masala."],
      ["Creamy Butter Chicken (B/L)",300,"Smooth, buttery, mildly spiced gravy."],
      ["Chef’s Chicken Lababdar (B/L)",320,"Boneless chicken in creamy tomato gravy."],
      ["Spicy Handi Chicken",325,"Rustic handi-style spicy chicken."]
    ]
  },
  {
    category:"Accompaniments", items:[
      ["Tawa Roti",12,"Freshly made on the tawa."],
      ["Butter Tawa Roti",15,"Soft roti brushed with butter."],
      ["Laccha Parantha",40,"Layered parantha with ghee."],
      ["Plain Rice",120,"Steamed basmati rice."]
    ]
  },
  {
    category:"Biryani", items:[
      ["Campus Special Veg Biryani",140,"Fragrant rice with spices and veggies."],
      ["Shahi Anda Biryani",160,"Egg biryani with masala touch."],
      ["Paneer Zaafrani Biryani",175,"Paneer dum biryani with saffron aroma."],
      ["Lazeez Chicken Biryani (B/L)",200,"Boneless chicken biryani, flavorful and rich."],
      ["Shahi Chicken Biryani",210,"Royal-style biryani with layered masala."]
    ]
  },
  {
    category:"Hot Beverages", items:[
      ["Masala Chai",30,"Strong Indian chai with spices."],
      ["Hot Coffee",40,"Classic handmade coffee."]
    ]
  },
  {
    category:"Lemonades", items:[
      ["Cool Desi Shikanji",70,"Sweet refreshing lemonade."],
      ["Masala Shikanji",80,"Tangy masala twist."],
      ["Iced Tea",90,"Chilled and refreshing."],
      ["Rose Lemonade",100,"Floral and sweet."],
      ["Mango Lemonade",120,"Fruity and cool."]
    ]
  },
  {
    category:"Cold Beverages", items:[
      ["Campus Cold Coffee",100,"Frappé-style cold coffee."],
      ["Classic Vanilla Shake",120,"Smooth vanilla indulgence."],
      ["Rose Shake",120,"Sweet floral refreshment."],
      ["Royal Mango Shake",130,"Thick mango shake delight."],
      ["Choco Lava Shake",130,"Rich chocolate-loaded shake."]
    ]
  },
  {
    category:"Meetha", items:[
      ["Vanilla Ice Cream",40,"Classic scoop of vanilla."],
      ["Butterscotch Ice Cream",60,"Crunchy caramel flavor."],
      ["Happy Sundae",70,"Topped with syrup and nuts."],
      ["Mithaas-e-Gulab Jamun",50,"Soft gulab jamuns in syrup."],
      ["Hot & Cold Treat",80,"Gulab jamun with ice cream."]
    ]
  },
  {
    category:"Breakfast", items:[
      ["Desi Aloo Parantha",70,"Crispy homestyle stuffed aloo parantha served with pickle."],
      ["Homestyle Paneer Parantha",90,"Paneer-stuffed parantha with a masala kick."]
    ]
  },
  {
    category:"Fries", items:[
      ["Campus Classic Fries",90,"Golden salted fries — everyone's favorite."],
      ["Peri Peri Chatka Fries",130,"Crispy fries tossed in fiery peri-peri spice."],
      ["Gooey Cheese Fries",145,"Hot fries topped with melted cheese."],
      ["I.C. Special Loaded Fries",170,"Fries stacked with cheese, sauces & toppings."]
    ]
  },
  {
    category:"Snacks", items:[
      ["Veg Spring Rolls",100,"Crispy rolls with mixed veg & spicy dip."],
      ["Chicken Spring Rolls",140,"Delicious chicken rolls packed with flavor."],
      ["Honey Chilli Potato",170,"Crispy potato tossed into honey & chilli glaze."],
      ["Crispy Baby Corn",140,"Golden baby corn with desi tadka."]
    ]
  },
  {
    category:"Momos", items:[
      ["Street Style Veg Momos",90,"Steamed and spicy, served with special dip."],
      ["Chatkara Paneer Momos",120,"Paneer-filled momos tossed in spicy masala."]
    ]
  },
  {
    category:"Maggi", items:[
      ["Hostel Waali Maggi",60,"Simple, classic, and comforting."],
      ["Jungee Maggi",100,"Loaded with masala and spice."],
      ["Cheese Burst Maggi",120,"Melted cheese twist to the favorite noodles."]
    ]
  },
  {
    category:"Ande Ka Funda", items:[
      ["Indoory Masala Omelette",100,"Fluffy omelette with Indori masala, served with bread."],
      ["Bombaiya Bhurji",120,"Mumbai-style spicy scrambled eggs."],
      ["Firangi Cheese Omelette",130,"Cheesy omelette, videshi-style indulgence."]
    ]
  },
  {
    category:"Sandwich", items:[
      ["Maska Sandwich",60,"Classic buttery bun with desi flair."],
      ["Bambaiya Sandwich",120,"Mumbai-style sandwich with tangy chutney."],
      ["Egg Spicywich",130,"Egg-loaded sandwich with a kick."],
      ["Cheese Grillwich",130,"Grilled cheesy sandwich — simple & satisfying."],
      ["Chatpate Paneer Sandwich",140,"Paneer sandwich packed with masala flavor."],
      ["Desi Chicken Sandwich",140,"Grilled chicken sandwich with Indian spice."],
      ["Triple C Sandwich",160,"Corn, capsicum & cheese indulgence."]
    ]
  },
  {
    category:"Burgers", items:[
      ["Desi Tikki Burger",90,"Aloo tikki burger with chutney and mayo."],
      ["Paneer Patakha Burger",130,"Spicy paneer patty with cheese."],
      ["Campus Chicken Burger",140,"Crispy chicken burger with sauces."]
    ]
  }
];

let cart = [];
let activeCategory = "All";

function normalizeItem(raw, category){
  if(Array.isArray(raw)){
    return {name:raw[0], price:raw[1], desc:raw[2], variants:null, category};
  }
  return {name:raw.name, price:raw.variants[0][1], desc:raw.desc, variants:raw.variants, category};
}

const products = menu.flatMap(section => section.items.map(item => normalizeItem(item, section.category)));

function money(n){ return Number(n).toLocaleString("en-IN"); }

function scrollToMenu(){
  document.getElementById("menu").scrollIntoView({behavior:"smooth"});
}

function setupChips(){
  const el = document.getElementById("chips");
  const cats = ["All", ...menu.map(x=>x.category)];
  el.innerHTML = cats.map(cat =>
    `<button class="chip ${cat===activeCategory?"active":""}" onclick="setCategory(${JSON.stringify(cat)})">${cat}</button>`
  ).join("");
}

function setCategory(cat){
  activeCategory = cat;
  setupChips();
  renderMenu();
  scrollToMenu();
}

function productCard(p, idx){
  const priceText = p.variants ? `₹${money(Math.min(...p.variants.map(v=>v[1])))}+` : `₹${money(p.price)}`;
  const variantHtml = p.variants ? `
    <div class="variant-label">Choose type</div>
    <select class="variant-select" id="variant-${idx}" onchange="updateCardPrice(${idx})">
      ${p.variants.map((v,i)=>`<option value="${i}">${v[0]} — ₹${money(v[1])}</option>`).join("")}
    </select>` : "";
  return `
    <article class="card">
      <div class="card-top">
        <div><h3>${p.name}</h3><p class="desc">${p.desc}</p></div>
        <div class="price" id="price-${idx}">${priceText}</div>
      </div>
      ${variantHtml}
      <div class="card-actions">
        <button class="add-btn" onclick="addProduct(${idx}, false)">＋ Add</button>
        <button class="order-btn" onclick="addProduct(${idx}, true)">Order →</button>
      </div>
    </article>`;
}

function updateCardPrice(idx){
  const p = products[idx];
  if(!p.variants) return;
  const sel = document.getElementById(`variant-${idx}`);
  const price = p.variants[Number(sel.value)][1];
  document.getElementById(`price-${idx}`).textContent = `₹${money(price)}`;
}

function renderMenu(){
  const q = document.getElementById("search").value.trim().toLowerCase();
  const root = document.getElementById("menuSections");
  let visible = 0;
  let html = "";

  menu.forEach(section => {
    if(activeCategory !== "All" && activeCategory !== section.category) return;
    const matched = section.items.map((raw, localIndex)=>{
      const p = normalizeItem(raw, section.category);
      const idx = products.indexOf(products.find(x => x.name===p.name && x.category===p.category));
      return {p, idx, localIndex};
    }).filter(x => {
      const hay = `${x.p.name} ${x.p.desc} ${x.p.category}`.toLowerCase();
      return !q || hay.includes(q);
    });

    if(!matched.length) return;
    visible += matched.length;
    html += `<section class="section"><div class="section-head">
      <div class="section-title"><div class="bar"></div><h2>${section.category}</h2></div>
      <div class="count">${matched.length} item${matched.length>1?"s":""}</div>
    </div><div class="grid">${matched.map(x=>productCard(x.p,x.idx)).join("")}</div></section>`;
  });

  root.innerHTML = html;
  document.getElementById("empty").style.display = visible ? "none" : "block";
}

function selectedProduct(idx){
  const p = products[idx];
  if(!p.variants) return {name:p.name, price:p.price, variant:""};
  const sel = document.getElementById(`variant-${idx}`);
  const v = p.variants[Number(sel?.value || 0)];
  return {name:p.name, price:v[1], variant:v[0]};
}

function addProduct(idx, openAfter){
  const chosen = selectedProduct(idx);
  const key = `${products[idx].category}|${chosen.name}|${chosen.variant}`;
  const found = cart.find(x=>x.key===key);
  if(found) found.qty++;
  else cart.push({...chosen, category:products[idx].category, qty:1, key});
  updateCart();
  toast(`${chosen.name}${chosen.variant ? ` (${chosen.variant})` : ""} added to cart`);
  if(openAfter) openCart();
}

function updateCart(){
  const qty = cart.reduce((s,x)=>s+x.qty,0);
  const total = cart.reduce((s,x)=>s+x.qty*x.price,0);
  document.getElementById("cartCount").textContent = qty;
  document.getElementById("heroCount").textContent = qty;
  document.getElementById("cartTotal").textContent = money(total);
  document.getElementById("floatTotal").textContent = money(total);
  document.getElementById("subtotal").textContent = money(total);
  document.getElementById("grandTotal").textContent = money(total);
  document.getElementById("cartQty").textContent = qty;
  document.getElementById("floatingCart").style.display = qty ? "block" : "none";

  const items = document.getElementById("cartItems");
  if(!cart.length){
    items.innerHTML = `<div style="padding:45px 15px;text-align:center;color:#756b5d">
      <div style="font-size:42px">🛒</div><h3>Your cart is empty</h3><p>Add something delicious from the menu.</p>
    </div>`;
    return;
  }
  items.innerHTML = cart.map((x,i)=>`
    <div class="cart-row">
      <div class="cart-main">
        <div><div class="cart-name">${x.name}</div><div class="cart-meta">${x.category}${x.variant ? ` • ${x.variant}` : ""}</div></div>
        <strong>₹${money(x.price*x.qty)}</strong>
      </div>
      <div class="qty">
        <button onclick="changeQty(${i},-1)">−</button><b>${x.qty}</b><button onclick="changeQty(${i},1)">+</button>
        <button class="remove" onclick="removeCart(${i})">Remove</button>
      </div>
    </div>`).join("");
}

function changeQty(i,delta){
  cart[i].qty += delta;
  if(cart[i].qty<=0) cart.splice(i,1);
  updateCart();
}

function removeCart(i){ cart.splice(i,1); updateCart(); }

function openCart(){
  document.getElementById("cartBackdrop").style.display = "block";
  document.body.style.overflow="hidden";
}
function closeCart(){
  document.getElementById("cartBackdrop").style.display = "none";
  document.body.style.overflow="";
}

function openBill(){
  if(!cart.length){toast("Add at least one item first");return;}
  closeCart();
  document.getElementById("billModal").style.display = "flex";
  document.body.style.overflow="hidden";
  renderBill();
}
function closeBill(){
  document.getElementById("billModal").style.display = "none";
  document.body.style.overflow="";
}
["customerName","customerMobile","tableNo","orderType"].forEach(id=>{
  document.addEventListener("input",e=>{if(e.target && e.target.id===id) renderBill();});
  document.addEventListener("change",e=>{if(e.target && e.target.id===id) renderBill();});
});

function renderBill(){
  const name = document.getElementById("customerName").value || "Guest";
  const mobile = document.getElementById("customerMobile").value || "—";
  const table = document.getElementById("tableNo").value || "—";
  const type = document.getElementById("orderType").value;
  const total = cart.reduce((s,x)=>s+x.qty*x.price,0);
  const now = new Date();
  const orderId = "IC" + now.getTime().toString().slice(-7);
  let lines = cart.map(x=>`
    <div class="bill-line"><span>${x.name}${x.variant?` (${x.variant})`:""} × ${x.qty}</span><strong>₹${money(x.qty*x.price)}</strong></div>
  `).join("");
  document.getElementById("billPreview").innerHTML = `
    <div class="bill-head"><h3>india canteen</h3><div>LIVE • LOVE • EAT</div><small>Order #${orderId}</small></div>
    <div class="bill-line"><span>Name</span><strong>${escapeHtml(name)}</strong></div>
    <div class="bill-line"><span>Order type</span><strong>${escapeHtml(type)}</strong></div>
    <div class="bill-line"><span>Table / Room</span><strong>${escapeHtml(table)}</strong></div>
    ${mobile!=="—" ? `<div class="bill-line"><span>Mobile</span><strong>${escapeHtml(mobile)}</strong></div>`:""}
    <hr style="border:0;border-top:1px dashed #bbb">
    ${lines}
    <div class="bill-line"><span>Subtotal</span><strong>₹${money(total)}</strong></div>
    <div class="bill-line"><span>Tax</span><strong>Included</strong></div>
    <div class="bill-line bill-total"><span>TOTAL</span><strong>₹${money(total)}</strong></div>
    <div style="text-align:center;margin-top:13px;font-size:11px;color:#766c5f">Thank you for dining with us! ❤️</div>
  `;
}

function orderText(){
  const name = document.getElementById("customerName").value.trim() || "Guest";
  const mobile = document.getElementById("customerMobile").value.trim() || "Not provided";
  const table = document.getElementById("tableNo").value.trim() || "Not provided";
  const type = document.getElementById("orderType").value;
  const total = cart.reduce((s,x)=>s+x.qty*x.price,0);
  const lines = cart.map((x,i)=>`${i+1}. ${x.name}${x.variant?` (${x.variant})`:""} × ${x.qty} = ₹${x.qty*x.price}`).join("\n");
  return `🍴 *INDIA CANTEEN - NEW ORDER*\n\n👤 Name: ${name}\n📱 Mobile: ${mobile}\n🪑 Table/Room: ${table}\n📦 Order Type: ${type}\n\n*ORDER ITEMS*\n${lines}\n\n💰 Subtotal: ₹${total}\n🧾 Tax: Included\n*TOTAL: ₹${total}*\n\nPlease confirm my order.`;
}

function sendWhatsApp(){
  if(!cart.length) return;
  const name = document.getElementById("customerName").value.trim();
  if(!name){ toast("Please enter your name"); document.getElementById("customerName").focus(); return; }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderText())}`;
  window.open(url,"_blank","noopener");
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}

let toastTimer;
function toast(msg){
  const el=document.getElementById("toast");
  el.textContent=msg;el.classList.add("show");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),1800);
}

setupChips();
renderMenu();
updateCart();
