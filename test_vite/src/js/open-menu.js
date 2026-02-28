export function openMenu() {
  const burger = document.querySelector(".burger-button");
  const menu = document.querySelector(".menu");
  const body = document.body;

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    body.classList.toggle("lock");
  });
}
