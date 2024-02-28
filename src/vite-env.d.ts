/// <reference types="vite/client" />
declare global {
  interface Window {
    openPopUp: (/* arguments of summonPopUp function */) => void;
    closePopUp: (/* arguments of summonPopUp function */) => void;
  }
}
