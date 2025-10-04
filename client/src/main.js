import accardions from "./common/Accardion";
import loadingScreen from "./common/loading";
import openModals from "./common/modal";
import priceRange from "./common/price";
import scrollAction from "./common/scroll";
import toTopScroll from "./common/toTop";
import renderBasket from "./Components/basket";
import cart from "./Components/cart";
import detailPage from "./Components/detail";
import { categoryRender, popularProducts, sorting, tagRender } from "./Components/filter";
import productsRender from "./Components/products";
import projects from "./Components/projects";
import subtotal from "./Components/total";


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  toTopScroll()
  accardions();
  productsRender()
  categoryRender()
  popularProducts()
  sorting()
  tagRender()
  cart()
  renderBasket()
  subtotal()
  detailPage()
  projects()
  priceRange()
  openModals()
  scrollAction()
  loadingScreen()
});
