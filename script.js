import "core-js/stable";
import "regenerator-runtime/runtime";

const allSection = document.querySelectorAll("section");
const checkbox = document.querySelector("input[id='checkbox']");
const navList = document.querySelector(".nav__list");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

checkbox.addEventListener("click", function (e) {
  navList.classList.toggle("show-nav");
});

document.documentElement.addEventListener("click", function (e) {
  if (checkbox.checked) {
    if (!e.target.closest(".nav")) {
      navList.classList.remove("show-nav");
      checkbox.checked = false;
    }
  }
});
