const drinks = {
  "raf-coconut-plombir": {
    title: "Раф «Кокосовый пломбир»",
    price: "310 ₽ / 350 ₽ / 390 ₽ — M / L / XL",
    photo: "assets/img/two-cups-counter.jpg",
    desc: "Нежный раф со вкусом кокосового пломбира — кремовая текстура, лёгкая сладость и тонкий кокосовый аромат в каждом глотке.",
    related: ["raf-bounty", "raf-banoffee"]
  },
  "raf-banoffee": {
    title: "Раф «Солёный баноффи»",
    price: "310 ₽ / 350 ₽ / 390 ₽ — M / L / XL",
    photo: "assets/img/banana-cup.jpg",
    desc: "Раф с нотами карамели и банана и лёгкой солинкой — любимый десерт баноффи-пай в чашке.",
    related: ["raf-coconut-plombir", "cappuccino-halva"]
  },
  "raf-bounty": {
    title: "Раф «Малиновый баунти»",
    price: "310 ₽ / 350 ₽ / 390 ₽ — M / L / XL",
    photo: "assets/img/raspberry-coconut.jpg",
    desc: "Кокосово-малиновый раф — сливочный кокос и яркая кислинка малины, как в любимом шоколадном батончике.",
    related: ["raf-coconut-plombir", "latte-whisky"]
  },
  "latte-whisky": {
    title: "Латте / капучино «Шотландский виски с пряностями»",
    price: "310 ₽ / 350 ₽ / 390 ₽ — M / L / XL",
    photo: "assets/img/latte-cloth.jpg",
    desc: "Латте или капучино с тёплыми пряными нотами — корица, имбирь и согревающий зимний аромат.",
    related: ["cappuccino-halva", "raf-bounty"]
  },
  "cappuccino-halva": {
    title: "Капучино / латте «Халва»",
    price: "310 ₽ / 350 ₽ / 390 ₽ — M / L / XL",
    photo: "assets/img/coffee-beans-cup.jpg",
    desc: "Капучино или латте с восточной нотой халвы — ореховая сладость и бархатная пенка.",
    related: ["raf-banoffee", "latte-whisky"]
  }
};

const modal = document.getElementById("drinkModal");
const modalPhoto = document.getElementById("drinkModalPhoto");
const modalTitle = document.getElementById("drinkModalTitle");
const modalPrice = document.getElementById("drinkModalPrice");
const modalDesc = document.getElementById("drinkModalDesc");
const modalRelated = document.getElementById("drinkModalRelated");

function openDrink(id) {
  const drink = drinks[id];
  if (!drink) return;

  modalPhoto.src = drink.photo;
  modalPhoto.alt = drink.title;
  modalTitle.textContent = drink.title;
  modalPrice.textContent = drink.price;
  modalDesc.textContent = drink.desc;

  modalRelated.innerHTML = "";
  drink.related.forEach((relatedId) => {
    const related = drinks[relatedId];
    if (!related) return;
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = related.title;
    button.addEventListener("click", () => openDrink(relatedId));
    li.appendChild(button);
    modalRelated.appendChild(li);
  });

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeDrink() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll(".menu__row--clickable").forEach((row) => {
  row.addEventListener("click", () => openDrink(row.dataset.drink));
});

modal.querySelectorAll("[data-close]").forEach((el) => {
  el.addEventListener("click", closeDrink);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeDrink();
});
