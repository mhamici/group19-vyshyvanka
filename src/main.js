(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-button]'),
    closeMenuBtn: document.querySelector('[data-menu-button-close]'),
    menu: document.querySelector('[data-menu]'),
    overlay: document.querySelector('.overlay'), // добавляем ссылку на элемент overlay
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
    refs.openMenuBtn.classList.toggle('is-open');
    refs.overlay.classList.toggle('is-open'); // добавляем/удаляем класс для overlay
    
    document.body.classList.toggle('menu-open');
  }
})();

