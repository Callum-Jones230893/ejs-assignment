document.querySelectorAll(`.toggle-link`).forEach(link => {
  link.addEventListener(`click`, (e) => {
    
    const container = link.closest(`.drop`);
    const href = link.getAttribute(`href`);
    const isCurrentPage = window.location.pathname === href;
    const active = container.classList.contains(`active`);
    const arrow = link.querySelector(".toggle-arrow");

    if (!isCurrentPage) {
      window.location.href = href;
      return;
    }

    e.preventDefault();

    document.querySelectorAll(`.drop`).forEach(dropdown => {
      dropdown.classList.remove(`active`);

      const arrow = dropdown.querySelector(".toggle-arrow");
      if (arrow) {
        arrow.src = "/images/icons/arrow-down.png";
      }
    });

    if (!active) {
      container.classList.add(`active`);
      if (arrow) {
        arrow.src = "/images/icons/arrow-up.png";
      }
    }
  });
});

document.addEventListener("click", (e) => {

  if (e.target.closest(".drop") || e.target.closest(".toggle-link")) {
    return;
  }

  document.querySelectorAll(".drop.active").forEach(dropdown => {
    dropdown.classList.remove("active");
  });
});