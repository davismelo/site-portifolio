const all_Items = document.querySelectorAll(".nav-item");
const btn_mobile = document.querySelector("#checkbox-mobile");
const nav_bar = document.querySelector("nav");

if (window.innerWidth < 620) {
  const Close_Menu = () => {
    nav_bar.classList.add("animation-hidden");
    setTimeout(() => {
      nav_bar.classList.remove("displayOn");
      nav_bar.classList.add("displayNone");
    }, 450);
  };

  all_Items.forEach((data) => {
    data.addEventListener("click", () => {
      Close_Menu();
      btn_mobile.checked = false;
    });
  });

  show_menu_btn = document.querySelector("#checkbox-mobile");
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
