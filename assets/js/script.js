```javascript
/*==================================================
 Aadhira Primetech
 script.js
==================================================*/

"use strict";

/*==============================
 AOS Animation
==============================*/

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

/*==============================
 Sticky Navbar
==============================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("shadow");

        navbar.style.padding = "10px 0";

        navbar.style.background = "#081c3a";

    } else {

        navbar.classList.remove("shadow");

        navbar.style.padding = "15px 0";

        navbar.style.background = "rgba(8,28,58,.95)";

    }

});

/*==============================
 Back To Top Button
==============================*/

const backBtn = document.createElement("button");

backBtn.id = "backToTop";

backBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(backBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backBtn.style.display = "block";

    } else {

        backBtn.style.display = "none";

    }

});

backBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==============================
 Counter Animation
==============================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.getAttribute("data-target");

        let current = 0;

        const speed = target / 120;

        function updateCounter() {

            if (current < target) {

                current += speed;

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==============================
 Smooth Scroll
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/*==============================
 Active Navigation
==============================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==============================
 WhatsApp Floating Button
==============================*/

const whatsapp = document.querySelector(".whatsapp-float");

if (whatsapp) {

    whatsapp.addEventListener("mouseenter", () => {

        whatsapp.style.transform = "scale(1.1)";

    });

    whatsapp.addEventListener("mouseleave", () => {

        whatsapp.style.transform = "scale(1)";

    });

}

/*==============================
 Course Card Hover
==============================*/

document.querySelectorAll(".course-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

/*==============================
 Testimonial Hover
==============================*/

document.querySelectorAll(".testimonial-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

/*==============================
 Loading Animation
==============================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*==============================
 Current Year in Footer
==============================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("Aadhira Primetech Website Loaded Successfully");
```
