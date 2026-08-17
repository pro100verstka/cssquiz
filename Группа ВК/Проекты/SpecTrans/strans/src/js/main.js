import '../scss/style.scss';
import {openMenu} from "@/js/open-menu.js";
import {animateMenuItems} from "@/js/animate-menu.js";
import {initHeaderScroll} from "@/js/header-scroll.js";
import {initCounters} from "@/js/counter.js";
import {initReveal} from "@/js/reveal.js";
import {initScrollSpy} from "@/js/scroll-spy.js";
import {initPopup} from "@/js/popup.js";

document.addEventListener('DOMContentLoaded', () => {
  openMenu()
  animateMenuItems()
  initHeaderScroll()
  initCounters()
  initReveal()
  initScrollSpy()
  initPopup()
})