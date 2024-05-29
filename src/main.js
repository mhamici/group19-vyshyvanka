(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-button]'),
    closeMenuBtn: document.querySelector('[data-menu-button-close]'),
    menu: document.querySelector('[data-menu]'),
    overlay: document.querySelector('.overlay'), // добавляем ссылку на элемент overlay
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  document.addEventListener('click', closeMenuOutside);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
    refs.openMenuBtn.classList.toggle('is-open');
    refs.overlay.classList.toggle('is-open'); // добавляем/удаляем класс для overlay
    document.body.classList.toggle('menu-open');
  }

  function closeMenuOutside(event) {
    if (!event.target.closest('[data-menu]') && !event.target.closest('[data-menu-button]')) {
      closeModal();
    }
  }

  function closeModal() {
    refs.menu.classList.remove('is-open');
    refs.openMenuBtn.classList.remove('is-open');
    refs.overlay.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }
})();
