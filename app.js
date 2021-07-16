const all_Items = document.querySelectorAll(".nav-item");
const btn_mobile = document.querySelector(".mobile-menu");
const nav_bar = document.querySelector("nav");
const nav_text = document.querySelectorAll("header nav a");

// MENU MOBILE

const Close_Menu = () => {
  nav_bar.classList.toggle("nav-active");
  btn_mobile.classList.toggle("transform");
};

all_Items.forEach((data) => {
  data.addEventListener("click", () => {
    Close_Menu();
  });
});

btn_mobile.addEventListener("click", () => {
  nav_bar.classList.toggle("nav-active");
  btn_mobile.classList.toggle("transform");
});
//---------------------------------------------------

// SLIDER DO PORTIFOLIO

const arrow_left = document.querySelector("#arrow-left");
const arrow_right = document.querySelector("#arrow-right");
const slider_images = document.querySelectorAll(".slider-images li");
const slider_dot = document.querySelectorAll(".slider-points div");

slider_dot[0].classList.add("color-point-on");
var index_slide = 0;

for (let index = 0; index < slider_images.length; index++) {
  let value = slider_images[index];
  if (index !== 0) {
    value.style.display = "none";
  }
}

function Slide_Operations() {
  function Hidden_Slides() {
    slider_images.forEach((element) => {
      element.style.display = "none";
    });
  }
  function Show_Slides() {
    slider_images[index_slide].style.display = "block";
  }
  Hidden_Slides();
  Show_Slides();
}

function Add_Dot() {
  slider_dot[index_slide].classList.add("color-point-on");
}

for (let index_slide = 0; index_slide < slider_dot.length; index_slide++) {
  let element = slider_dot[index_slide];
  element.addEventListener("click", () => {
    slider_dot.forEach((element) => element.classList.remove("color-point-on"));
    Add_Dot();

    slider_images.forEach((element) => {
      element.style.display = "none";
    });
    slider_images[index_slide].style.display = "block";
    return (index_slide = index);
  });
}

arrow_left.addEventListener("click", () => {
  if (index_slide > 0) {
    index_slide--;
    Slide_Operations();
    slider_dot[index_slide + 1].classList.remove("color-point-on");
    Add_Dot();
  }
});

arrow_right.addEventListener("click", () => {
  if (index_slide < slider_images.length - 1) {
    index_slide++;
    Slide_Operations();
    slider_dot[index_slide - 1].classList.remove("color-point-on");
    Add_Dot();
  }
});
//---------------------------------------------------

// MUDAR COR DO HEADER
const header = document.querySelector("header");
const home = document.querySelector("#home");

const Background_Header = () => {
  if (window.scrollY >= home.offsetHeight - 20 && screen.width > 650) {
    header.style.background = "#14191D";
  } else {
    header.style.background = "";
  }
};

//-------------------------------------------------------

// ANIMAÇÃO DE PREENCHIMENTO DA BARRA

const progress_bar = document.querySelectorAll(" .progress-data");

progress_bar.forEach((element) => {
  let p = element;
  let value = element.textContent;
  p.style.width = value;
});

window.addEventListener("scroll", () => {
  Background_Header();
});
