document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    const updateCarousel = () => {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-item");
    const progressBar = document.querySelector(".progress");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active"); // Remove o slide ativo
            if (i === index) slide.classList.add("active"); // Ativa o novo slide
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Avança para o próximo slide
        showSlide(currentIndex);
    }

    // Troca de slide a cada 5 segundos
    setInterval(() => {
        nextSlide();
        restartProgressBar();
    }, 5000);

    function restartProgressBar() {
        progressBar.style.animation = "none";
        setTimeout(() => {
            progressBar.style.animation = "";
        }, 10);
    }
});
