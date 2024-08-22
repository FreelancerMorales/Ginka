// Botones
const MENU_BTN_CLASS = '.menu';
const X_BTN_CLASS = '.x-btn';

// Ventanas
const EMERGENTE_CLASS = '.emergente';
const MAIN_CLASS = '.main';

// Búsqueda al DOM
const menuBtn = document.querySelector(MENU_BTN_CLASS);
const xBtn = document.querySelector(X_BTN_CLASS);
const emergente = document.querySelector(EMERGENTE_CLASS);
const main = document.querySelector(MAIN_CLASS);

menuBtn.addEventListener("click", () => {
    emergente.style.display = "block";
    main.style.display = "none";
});

xBtn.addEventListener("click", () => {
    emergente.style.display = "none";
    main.style.display = "block";
});