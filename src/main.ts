import "./style.css";

const popUp = document.querySelector(".sliding-pop-up");

function openPopUp() {
  popUp?.classList.add("show-pop-up");
}

function closePopUp() {
  popUp?.classList.remove("show-pop-up");
}

window.openPopUp = openPopUp;
window.closePopUp = closePopUp;
