import '../scss/style.scss';
import {openMenu} from "./open-menu.js";
import {initHeaderScroll} from "./header-scroll.js";
import {initCounters} from "./counter.js";
import {initReveal} from "./reveal.js";
import {animateMenuItems} from "./animate-menu.js";

document.addEventListener("DOMContentLoaded", () => {
  openMenu();
  initHeaderScroll();
  initCounters();
  initReveal()
  animateMenuItems()
});