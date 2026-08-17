export function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  // --- Fade-in при загрузке ---
  window.addEventListener('load', () => {
    header.classList.add('is-loaded');

    // Проверяем скролл сразу после загрузки
    checkScroll();
  });

  // --- Уменьшение + blur при скролле ---
  let isScrolled = false;

  const checkScroll = () => {
    const shouldBeScrolled = window.scrollY > 20;
    if (shouldBeScrolled !== isScrolled) {
      header.classList.toggle('scrolled', shouldBeScrolled);
      isScrolled = shouldBeScrolled;
    }
  };

  window.addEventListener('scroll', checkScroll);

  // Проверка сразу при инициализации (на случай если скролл не 0)
  checkScroll();
}