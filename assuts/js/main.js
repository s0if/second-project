const navbar_top = document.querySelector(".top");
const main = document.querySelector("main");
window.onscroll = () => {
    if (window.scrollY > main.offsetTop) {
        navbar_top.classList.add('style-top');
    }
    else
        navbar_top.classList.remove('style-top');
}