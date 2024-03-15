function themeControl(theme) {
  if (theme === "darkMode") {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }
}
const tabs = document.querySelectorAll(".tabs");
const tab = document.querySelectorAll(".tab");
const panel = document.querySelectorAll(".tab-content");

function onTabClick(event) {
  // deactivate existing active tabs and panel

  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
    tab[i].classList.remove("bg-[#171D28]");
    tab[i].classList.remove("dark:bg-[#F3F4F6]");
    tab[i].classList.remove("dark:text-[#000000]");
    tab[i].classList.remove("text-[#6B7280]");
    tab[i].classList.add("dark:text-[#6B7280]");
    tab[i].classList.add("text-[#000000]");
  }

  for (let i = 0; i < panel.length; i++) {
    panel[i].classList.remove("active");
  }

  // activate new tabs and panel
  event.target.classList.add("active");
  event.target.classList.add("bg-[#171D28]");
  event.target.classList.add("dark:bg-[#F3F4F6]");
  event.target.classList.remove("dark:text-[#9CA3AF]");
  event.target.classList.add("text-[#F9FAF8]");
  let classString = event.target.getAttribute("data-target");
  console.log(classString);
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", onTabClick, false);
}
