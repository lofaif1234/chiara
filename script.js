const modal = document.querySelector("#letter-modal");
const openButton = document.querySelector("#open-letter");
const letter = modal.querySelector(".letter-card");
const closeButton = modal.querySelector(".close-button");

function openLetter() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  window.setTimeout(() => letter.focus(), 80);
}

function closeLetter() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  openButton.focus();
}

openButton.addEventListener("click", openLetter);
modal.querySelectorAll("[data-close]").forEach((element) => {
  element.addEventListener("click", closeLetter);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeLetter();

  if (event.key === "Tab" && modal.classList.contains("is-open")) {
    const focusable = [closeButton, letter];
    const index = focusable.indexOf(document.activeElement);
    if (event.shiftKey && index <= 0) {
      event.preventDefault();
      focusable[focusable.length - 1].focus();
    } else if (!event.shiftKey && index === focusable.length - 1) {
      event.preventDefault();
      focusable[0].focus();
    }
  }
});
