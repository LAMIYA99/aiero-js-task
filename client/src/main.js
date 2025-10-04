import accardions from "./common/Accardion";
import loadingScreen from "./common/loading";
import openModals from "./common/modal";
import priceRange from "./common/price";

import scrollAction from "./common/scroll";
import toTopScroll from "./common/toTop";
import renderBasket from "./Components/basket";
import blog from "./Components/blog";
import blogDetail from "./Components/blogdetail";

import cart from "./Components/cart";
import checkout from "./Components/checkout";
import detailPage from "./Components/detail";
import { categoryRender, popularProducts, sorting, tagRender } from "./Components/filter";
import productsRender from "./Components/products";
import projects from "./Components/projects";
import renderCart from "./Components/renderCart";
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
  openModals()
  scrollAction()
  loadingScreen()
  checkout()
  renderCart()
  blog()
  priceRange()
  blogDetail()
});
