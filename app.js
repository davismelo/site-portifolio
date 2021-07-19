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

const arrow_right = document.querySelector("#arrow-right");
const arrow_left = document.querySelector("#arrow-left");
const slider_images = document.querySelectorAll(".slider-images li");
const slider_dot = document.querySelectorAll(".slider-points div");

let slider_index = 0;

function show(index) {
  slider_images.forEach((data) => {
    data.style.opacity = 0;
    data.style.transform = "translateX(-15%)";
  });
  slider_dot.forEach((data) => {
    data.style.background = "#afaeae";
  });

  slider_images[index].style.opacity = 1;
  slider_images[index].style.transform = "translateX(0%)";
  slider_dot[index].style.background = "var(--secondaryColor)";
  return (slider_index = index);
}

arrow_right.addEventListener("click", () => {
  if (slider_index < slider_images.length - 1) {
    slider_index++;
    show(slider_index);
    return;
  }
  if (slider_index === slider_images.length - 1) {
    show(0);
    return;
  }
});

arrow_left.addEventListener("click", () => {
  if (slider_index > 0) {
    slider_index--;
    show(slider_index);
    return;
  }
  if (slider_index === 0) {
    show(slider_images.length - 1);
    return;
  }
});

for (let index = 0; index < slider_dot.length; index++) {
  slider_dot[index].addEventListener("click", () => {
    show(index);
  });
}
//---------------------------------------------------

// MUDAR COR DO HEADER
const header = document.querySelector("header");
const home = document.querySelector("#home");

const Background_Header = () => {
  if (window.scrollY >= home.offsetHeight - 20 && screen.width > 650) {
    header.classList.add("header-down");
  } else {
    header.classList.remove("header-down");
  }
};

//-------------------------------------------------------

// ANIMAÇÃO DE PREENCHIMENTO DA BARRA
const progress_bar = document.querySelectorAll(" .progress-data");
progress_bar.forEach((element) => {
  let value = element.textContent;
  element.style.animation = "progress 2s ease";
  element.style.width = value;
});

//----------------------------------------------------------

// EFEITO ESCREVER

const MainText = document.querySelector("#home-right-side h1");

function Type_Write(el) {
  const textArray = el.innerText.split("");
  el.innerHTML = "";
  textArray.forEach(function (letter, i) {
    setTimeout(function () {
      el.innerHTML += letter;
    }, 550 * i);
  });
}

Type_Write(MainText);

window.addEventListener("scroll", () => {
  Background_Header();
});
