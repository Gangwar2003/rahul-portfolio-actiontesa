/* ==========================================
   Rahul Kumar Portfolio Script
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       NAVBAR SCROLL EFFECT
    =========================== */

    const navbar = document.querySelector(".custom-nav");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0,0,0,0.95)";
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
        } else {
            navbar.style.background = "rgba(0,0,0,0.85)";
            navbar.style.boxShadow = "none";
        }

    });

    /* ===========================
       ACTIVE MENU HIGHLIGHT
    =========================== */

    const navLinks = document.querySelectorAll(".nav-link");

    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

    /* ===========================
       SCROLL ANIMATION
    =========================== */

    const fadeElements = document.querySelectorAll(".fade-up");

    const revealElements = () => {

        fadeElements.forEach(element => {

            const elementTop = element.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add("show");
            }

        });

    };

    window.addEventListener("scroll", revealElements);

    revealElements();

    /* ===========================
       COUNTER ANIMATION
    =========================== */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");

            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

    /* ===========================
       CONTACT FORM
    =========================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            if (name === "" || email === "") {

                alert("Please fill all required fields");

                return;

            }

            alert("Thank You! Your message has been submitted.");

            contactForm.reset();

        });

    }

    /* ===========================
       BACK TO TOP BUTTON
    =========================== */

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.id = "backToTop";

    document.body.appendChild(topBtn);

    topBtn.style.position = "fixed";
    topBtn.style.right = "20px";
    topBtn.style.bottom = "20px";
    topBtn.style.width = "50px";
    topBtn.style.height = "50px";
    topBtn.style.borderRadius = "50%";
    topBtn.style.border = "none";
    topBtn.style.background = "#00d9ff";
    topBtn.style.color = "#000";
    topBtn.style.fontSize = "22px";
    topBtn.style.cursor = "pointer";
    topBtn.style.display = "none";
    topBtn.style.zIndex = "9999";
    topBtn.style.fontWeight = "bold";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    /* ===========================
       TYPING EFFECT
    =========================== */

    const typingText = document.getElementById("typing-text");

    if (typingText) {

        const roles = [
            "SCM Supervisor",
            "Supply Chain Professional",
            "Kaizen Leader",
            "AI Logistics Enthusiast",
            "Warehouse Operations Expert"
        ];

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentRole = roles[roleIndex];

            if (!deleting) {

                typingText.textContent =
                    currentRole.substring(0, charIndex++);

                if (charIndex > currentRole.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1500);

                    return;
                }

            } else {

                typingText.textContent =
                    currentRole.substring(0, charIndex--);

                if (charIndex < 0) {

                    deleting = false;

                    roleIndex++;

                    if (roleIndex >= roles.length) {
                        roleIndex = 0;
                    }

                }

            }

            setTimeout(typeEffect, deleting ? 50 : 100);

        }

        typeEffect();

    }

    /* ===========================
       PROJECT CARD HOVER
    =========================== */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-10px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0px) scale(1)";

        });

    });

    console.log(
        "Rahul Kumar Portfolio Loaded Successfully"
    );

});