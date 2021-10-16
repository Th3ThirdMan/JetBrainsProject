let modal = document.getElementById("simpleModal");
let modalBtn = document.getElementById("modalBtn");
let closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", clickOutside);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function clickOutside(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}

let winBtn = document.getElementById("winBtn");
winBtn.addEventListener("click", openWindow);
function openWindow() {
    window.open("https://www.google.com");
}



const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
