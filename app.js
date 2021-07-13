const all_Items = document.querySelectorAll(".nav-item");
const btn_mobile = document.querySelector("#checkbox-mobile");
const nav_bar = document.querySelector("nav");
show_menu_btn = document.querySelector("#checkbox-mobile");

// MENU MOBILE

const Close_Menu = () => {
  nav_bar.classList.add("animation-hidden");
  setTimeout(() => {
    nav_bar.classList.remove("displayOn");
    nav_bar.classList.add("displayNone");
  }, 450);
};

if (window.innerWidth < 620) {
  all_Items.forEach((data) => {
    data.addEventListener("click", () => {
      Close_Menu();
      btn_mobile.checked = false;
    });
  });

  show_menu_btn.addEventListener("click", () => {
    if (show_menu_btn.checked) {
      nav_bar.classList.remove("displayNone");
      nav_bar.classList.remove("animation-hidden");
      nav_bar.classList.add("displayOn");
      nav_bar.classList.add("animation-show");
    } else {
      Close_Menu();
    }
  });
}
//---------------------------------------------------

// PREENCHER A BARRA DE SKILLS

const progress_bar = document.querySelectorAll(" .progress-data");

progress_bar.forEach((element) => {
  let p = element;
  let value = element.textContent;
  p.style.animation = "progress 2s";
  p.style.width = value;
});
//---------------------------------------------------

// SLIDER DO PORTIFOLIO

const arrow_left = document.querySelector("#arrow-left");
const arrow_right = document.querySelector("#arrow-right");
const slider_images = document.querySelector(".slider-images").children;
const point_slide = document.querySelector("#slider-points").children;
const images_array = [...slider_images];
const point_array = [...point_slide];

var index_slide = 0;

for (let index = 0; index < images_array.length; index++) {
  let value = images_array[index];
  if (index !== 0) {
    value.style.display = "none";
  }
}

for (let index = 0; index < point_array.length; index++) {
  let element = point_array[index];
  element.addEventListener("click", () => {
    point_array.forEach((element) =>
      element.classList.remove("color-point-on")
    );
    point_array[index].classList.add("color-point-on");

    images_array.forEach((element) => {
      element.style.display = "none";
    });
    images_array[index].style.display = "block";
    return (index_slide = index);
  });
}

arrow_left.addEventListener("click", () => {
  if (index_slide > 0) {
    images_array.forEach((element) => {
      element.style.display = "none";
    });
    images_array[index_slide - 1].style.display = "block";
    index_slide--;

    point_array[index_slide + 1].classList.remove("color-point-on");
    point_array[index_slide].classList.add("color-point-on");
  }
});

arrow_right.addEventListener("click", () => {
  if (index_slide < images_array.length - 1) {
    index_slide++;
    images_array.forEach((element) => {
      element.style.display = "none";
    });
    images_array[index_slide].style.display = "block";

    point_array[index_slide - 1].classList.remove("color-point-on");
    point_array[index_slide].classList.add("color-point-on");
  }
});
//---------------------------------------------------

// EFEITO
