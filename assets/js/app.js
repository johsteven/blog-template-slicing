// helpers
const elQS = el => document.querySelector(el);
const elQSA = el => document.querySelectorAll(el);
const on = (el, event, value) => el.addEventListener(event, value);

// variables
const navbarMenu = elQS('.navbar-menu');
const navbarNav = elQS('.navbar-nav');
const darkmodeBtn = elQS('.darkmode-btn');

// functions
function navbarMenuEvent() {
    navbarNav.classList.toggle('collaps');
}

function darkmodeBtnEvent() {
    elQS('body').classList.toggle('darkmode');
    localStorage.getItem('darkmode') == '' ? localStorage.setItem('darkmode', 'darkmode') : localStorage.setItem('darkmode', '');

}

function checkLS() {
    localStorage.getItem('darkmode') === null ? localStorage.setItem('darkmode', '') : '';
    localStorage.getItem('darkmode') != '' ? elQS('body').classList.add('darkmode') : '';
}

// main
window.addEventListener('load', init);

function init() {
    load();
    eventListener();
}

function load() {
    checkLS();
}

function eventListener() {
    on(navbarMenu, 'click', navbarMenuEvent);
    on(darkmodeBtn, 'click', darkmodeBtnEvent)
}