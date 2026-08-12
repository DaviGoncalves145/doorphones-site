const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle?.addEventListener('click', () => menu.classList.toggle('open'));

document.querySelectorAll('.menu a').forEach(a =>
  a.addEventListener('click', () => menu.classList.remove('open'))
);

const toast = document.getElementById('toast');

document.querySelectorAll('.product-button').forEach(btn =>
  btn.addEventListener('click', () => {
    const id = btn.dataset.id || btn.dataset.product;
    const name = btn.dataset.product;
    const price = parseFloat(btn.dataset.price || '0');

    if (typeof addToCart === 'function' && price) {
      addToCart(id, name, price);
      toast.textContent = `${name} adicionado ao carrinho ✦`;
    } else {
      toast.textContent = `${name}: catálogo completo em breve ✦`;
    }

    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
  })
);
