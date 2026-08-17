export function openMenu() {
  const burger = document.querySelector(".burger-button");
  const menu = document.querySelector(".menu");
  const links = document.querySelectorAll(".menu__link");
  const body = document.body;

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    body.classList.toggle("lock");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("is-active");
      menu.classList.remove("is-active");
      body.classList.remove("lock");
    });
  });
}
