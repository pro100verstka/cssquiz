export function animateMenuItems() {
  const items = document.querySelectorAll(".menu__item");

  items.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });
}