const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const image = document.querySelector(".content-main");
const title = document.querySelector(".information h1");
const subtitle = document.querySelector(".information p");
const feture = [
  {
    title: "Discover innovative ways to decorate",
    subtitle:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    image: "images/desktop-image-hero-1.jpg",
  },
  {
    title: "We are available all across the globe",
    subtitle:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    image: "images/desktop-image-hero-2.jpg",
  },
  {
    title: "Manufactured with the best materials",
    subtitle:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    image: "images/desktop-image-hero-3.jpg",
  },
];

let slide = 0;

const show = () => {
  if (slide > feture.length - 1) {
    slide = 0;
  }
  image.style.backgroundImage = `url(${feture[slide].image})`;
  title.innerHTML = `<h1>${feture[slide].title}</h1>`;
  subtitle.innerHTML = `<p>${feture[slide].subtitle}</p>`;
  slide++;
};

show();

prev.addEventListener("click", show);
next.addEventListener("click", show);

//todo Toggle-menu
const menuToggle = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});
