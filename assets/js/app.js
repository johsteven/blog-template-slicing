// helpers
const elQS = el => document.querySelector(el);
const elQSA = el => document.querySelectorAll(el);
const on = (el, event, value) => el.addEventListener(event, value);

// variables
const navbarMenu = elQS('.navbar-menu');
const navbarNav = elQS('.navbar-nav');

// functions
function navbarMenuEvent() {
    navbarNav.classList.toggle('collaps');
}

// main
window.addEventListener('load', init);

function init() {
    load();
    eventListener();
}

function load() {

}

function eventListener() {
    on(navbarMenu, 'click', navbarMenuEvent)
}