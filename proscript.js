document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".image-slider");

    sliders.forEach(slider => {
        let images = slider.querySelectorAll("img");
        let current = 0;

        const showImage = (index) => {
            images.forEach(img => img.classList.remove("active"));
            images[index].classList.add("active");
        };

        slider.querySelector(".left").addEventListener("click", () => {
            current = (current - 1 + images.length) % images.length;
            showImage(current);
        });

        slider.querySelector(".right").addEventListener("click", () => {
            current = (current + 1) % images.length;
            showImage(current);
        });

        showImage(current);
    });
});

