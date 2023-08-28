const dropdown = document.getElementsByClassName("LinkText btn navDropDowns");
const fasolid = document.getElementsByClassName("fa-solid fa-caret-up")[0];
const dropdownMenu = document.getElementsByClassName(
  "dropdown-menu rounded-1"
)[0];
console.log(fasolid);

fasolid.style.display = "none";

dropdown[0].addEventListener("mouseenter", () => {
  fristState();
});

dropdownMenu.addEventListener("mouseenter", () => {
  fristState();
});

dropdownMenu.addEventListener("mouseleave", () => {
  secondState();
});

dropdown[0].addEventListener("mouseleave", () => {
  secondState();
});

function fristState() {
  dropdown[0].classList.remove("dropdown-toggle");
  fasolid.style.display = "inline-block";
}
function secondState() {
  dropdown[0].classList.add("dropdown-toggle");
  fasolid.style.display = "none";
}
