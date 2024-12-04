const navBtn = document.getElementById("nav-mobile-toggle");
const navLinks = document.getElementById("mobile-nav-list");

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// const navBtn_2 = document.getElementById("nav-language-toggle");
// const navLinks_2 = document.getElementById("language-nav-list");

// navBtn_2.addEventListener("click", () => {
    // navLinks_2.classList.toggle("active");
// });

// add date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

