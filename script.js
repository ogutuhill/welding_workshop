document.addEventListener("DOMContentLoaded", () => {
    const servicesContainer = document.getElementById("services-container");

    // Load services from JSON
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            data.services.forEach(service => {
                const serviceDiv = document.createElement("div");
                serviceDiv.classList.add("service");
                serviceDiv.innerHTML = `
                    <h3>${service.name}</h3>
                    <p>${service.description}</p>
                `;
                servicesContainer.appendChild(serviceDiv);
            });
        })
        .catch(error => console.error("Error loading services:", error));
});

// JavaScript for Slider
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
    const offset = index * -100; // Calculate offset
    sliderWrapper.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".mobile-menu");
    const nav = document.querySelector("header nav");

    menu.addEventListener("click", () => {
        menu.classList.toggle("active");
        nav.classList.toggle("active");
    });
});
