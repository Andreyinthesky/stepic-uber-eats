(function () {
  const buttonUpEl = document.getElementById("btn-up");

  document.addEventListener("DOMContentLoaded", function (e) {
    const copyrightEl = document.getElementById("copyright");
    const copyrightText = copyrightEl.innerHTML;
    const currentYear = new Date().getFullYear();
    copyrightEl.innerHTML = copyrightText.replace("[year]", currentYear);
  });

  window.addEventListener("scroll", function (e) {
    const { clientHeight } = document.documentElement;
    const { pageYOffset } = window;

    if (pageYOffset > clientHeight) {
      buttonUpEl.classList.add("show");
    } else {
      buttonUpEl.classList.remove("show");
    }
  });

  function scrollUp() {
    const scrollStep = window.pageYOffset / 20;

    if (scrollStep < 0.1) {
      window.scrollTo(0, 0);
      return;
    }

    window.scrollBy(0, -scrollStep)
    setTimeout(() => scrollUp(), 10);
  }

  buttonUpEl.addEventListener("click", scrollUp);
}());