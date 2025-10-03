import accardions from "./common/Accardion";
import priceRange from "./common/price";
import renderBasket from "./Components/basket";
import cart from "./Components/cart";
import { categoryRender, popularProducts, sorting, tagRender } from "./Components/filter";
import productsRender from "./Components/products";
import subtotal from "./Components/total";

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", () => {

  accardions();
  productsRender()
  categoryRender()
  popularProducts()
  sorting()
  tagRender()
  cart()
  renderBasket()
  subtotal()
  priceRange()
});
