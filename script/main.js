const boxes = Array.from(document.querySelectorAll(".box"));

boxes.forEach(box => {
  const label = box.querySelector(".label");
  if (label) {
    label.addEventListener("click", (e) => {
      e.preventDefault();
      boxes.forEach(otherBox => {
        if (otherBox !== box) {
          otherBox.classList.remove("active");
        }
      });
      box.classList.toggle("active");
    });
  }
});

/*Слайдер*/
const products = [
  { id: 1, name: 'Antminer L7 8800 Mh/s', img: '/assets/img/hits/hits1.svg', price: 615000, oldPrice: null, badge: 'ХИТ' },
  { id: 2, name: 'Antminer S19j pro 110 Th/s', img: '/assets/img/hits/hits2.svg', price: 245000, oldPrice: 315000, badge: 'SALE' },
  { id: 3, name: 'Whatsminer M3x 12.5 Th/...', img: '/assets/img/hits/hits3.svg', price: 14000, oldPrice: null, badge: 'NEW' },
  { id: 4, name: 'Antminer Z15e 200 ksol', img: '/assets/img/hits/hits4.svg', price: 290000, oldPrice: 325000, badge: 'SALE' },
  { id: 5, name: 'Innosilicon A11 1500 Mh/s...', img: '/assets/img/hits/hits5.svg', price: 173000, oldPrice: null, badge: 'ХИТ' },
];

const hitsCart = document.getElementById('hitsCart');
products.forEach(product => {
  const cartItem = document.createElement('article');
  cartItem.className = 'cart';
  const isFav = product.id % 2 === 0 ? '/assets/img/hits/favorit2.svg' : '/assets/img/hits/favorit.svg';

  cartItem.innerHTML = `
    <div class="badges">
      <p>${product.badge}</p>
      <img src="${isFav}" alt="favourites" class="favorite_icon">
    </div>
    <img src="${product.img}" alt="${product.name}">
    <p class="name">${product.name}</p>
    <div class="cart_price">
      ${product.oldPrice ? `
        <div class="cart_price_text">
          <p>${product.price} ₽</p>
          <p class="crossed_out">${product.oldPrice} ₽</p>
        </div>
      ` : `
        <p>${product.price} ₽</p>
      `}
      <img src="/assets/img/hits/basket.svg" alt="basket" class="basket_icon">
    </div>
    <a href="#">Купить в 1 клик</a>
  `;

  hitsCart.appendChild(cartItem);
});

// Корзина в карточке товара
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('basket_icon')) {
    e.preventDefault();
    
    // Меняем картинку корзины
    if (e.target.src.includes('basket.svg')) {
      e.target.src = '/assets/img/basket2.svg';
    } else {
      e.target.src = '/assets/img/hits/basket.svg';
    }
    cartContainer.classList.add('active');
  }
});

// Меняем сердечки
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('favorite_icon')) {
    e.preventDefault();
    
    if (e.target.src.includes('favorit.svg')) {
      e.target.src = '/assets/img/hits/favorit2.svg';
      e.target.classList.add('active');
    } else {
      e.target.src = '/assets/img/hits/favorit.svg';
      e.target.classList.remove('active');
    }
  }
});

/* Корзина */
const cartButton = document.querySelector('.cart_button');
const cartContainer = document.querySelector('.cart_of_orders');
const closeCart = document.querySelector('#cart_close');

cartButton.addEventListener('click', (e) => { 
  cartContainer.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('basket_icon')) {
    e.preventDefault();
    cartContainer.classList.add('active');
  }
});

closeCart.addEventListener('click', (e) => {
  cartContainer.classList.remove('active');
});


// Закрытие при клике вне корзины
document.addEventListener('click', (e) => {
  if (
    !cartContainer.contains(e.target) && e.target !== cartButton && !e.target.classList.contains('basket_icon') 
  ) {
    cartContainer.classList.remove('active');
  }
});


/* Форма */
const form = document.querySelector('.contact_form form');
const nameInput = document.querySelector('input[type="text"]');
const phoneInput = document.querySelector('input[type="tel"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    name: nameInput.value,
    phone: phoneInput.value,
  };

  console.log(formData);
});