let loadingContainer = document.querySelector(".loading-container");
let span = document.querySelector(".up");

window.addEventListener("scroll", animate);
window.addEventListener("scroll", scrollToTop);
window.addEventListener("load", () => {
  loadingContainer.style.display = "none";
});

span.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function scrollToTop() {
  this.scrollY >= 500
    ? span.classList.add("show")
    : span.classList.remove("show");
}

function animate() {
  const reveals = document.querySelectorAll(".animate");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealtop = reveals[i].getBoundingClientRect().top;
    if (revealtop < windowHeight - 70) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
