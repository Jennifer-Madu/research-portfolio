
// MOBILE NAVIGATION

const menuButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

// Open and close the navigation menu
menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.innerHTML = isOpen ? "&times;" : "☰";

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});

// Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuButton.innerHTML = "☰";
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");

    });

});

// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".section-heading, .focus-card, .research-card, .experience-card, .project-card, .skill-card, .education-card, .contact-content"
);

// Add animation class to selected elements
revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

// Observe elements as they enter the screen
const observer = new IntersectionObserver(function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

// Start observing each element
revealElements.forEach(function (element) {
    observer.observe(element);
});
// Automatically update the footer year
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}