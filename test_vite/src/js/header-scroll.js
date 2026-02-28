export function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  // --- Fade-in при загрузке ---
  window.addEventListener('load', () => {
    header.classList.add('is-loaded');
  });

  // --- Уменьшение + blur при скролле ---
  let isScrolled = false;

  const onScroll = () => {
    const shouldBeScrolled = window.scrollY > 20;

    if (shouldBeScrolled !== isScrolled) {
      header.classList.toggle('scrolled', shouldBeScrolled);
      isScrolled = shouldBeScrolled;
    }
  };

  window.addEventListener('scroll', onScroll);
}