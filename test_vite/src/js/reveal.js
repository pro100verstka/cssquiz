export function initReveal() {
  const elements = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}