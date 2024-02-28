/// <reference types="vite/client" />
declare global {
  interface Window {
    openPopUp: (/* arguments of summonPopUp function */) => void;
    closePopUp: (/* arguments of summonPopUp function */) => void;
  }
}

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
